/**
 * Created by sparsh on 24/2/17.
 */
import React from 'react';
import Header from './common/Header';
class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        return(
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default App;