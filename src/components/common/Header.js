/**
 * Created by sparsh on 24/2/17.
 */

import  React from 'react';
import { Link, IndexLink } from 'react-router';

class HomePage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        return(
            <nav>
                <IndexLink to="/" activeClassName="active" >Home</IndexLink>
                {" | "}
                <Link  to="/courses" activeClassName="active">Courses</Link>
                {" | "}
                <Link  to="/about" activeClassName="active">About</Link>
            </nav>
        );
    }
}

export default HomePage;
