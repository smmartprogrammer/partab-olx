import React from 'react'
import { Link } from "react-router-dom";

class About extends React.Component {

    gotohome = () =>{
        this.props.history.push('/')
            
    } 

    render() {
        return (
            <div>
                <h1>About Page</h1>
                {/* <Link to='/'>raghunathji</Link> */}
                <button onClick={this.gotohome} >go to home</button>
            </div>
        )
    }
}

export default About;