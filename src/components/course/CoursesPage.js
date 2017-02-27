/**
 * Created by sparsh on 24/2/17.
 */
import React from 'react';
import {link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                title : ''
            }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        event.preventDefault();
        this.setState({
            course:{
                title: event.target.value,
            }
        })
    }

    onClickSave(event){
        event.preventDefault();
        // console.log(this.state.course.title);
        this.props.actions.createCourse(this.state.course)
    }

    courseRow(course, index){
        return <div key={index}>{course.title} </div>;
    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Courses</h2>

                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" value="save" onClick={this.onClickSave}/>
            </div>
        );
    }
}

// export default CoursesPage;
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);