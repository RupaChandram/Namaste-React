import { Component } from "react";
import { GITHUB_USER_NAME } from "../Config/config";
import Blog from "../Profile/BlogClass";
import ProfileClass from "../Profile/ProfileClass";
class About extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
           <div className="about-container">
                <div className="profile-container">
                    <h1 className="profile-title">About Me</h1>
                    <ProfileClass name={GITHUB_USER_NAME}/>  { /* Passing props from parent to child */ }
                </div>
            <div className="blog-container">
                <h1 className="blog-list-title">About the projects</h1>
                <Blog name={"RupaChandram"}/> { /* Passing props from parent to child */ } 
            </div>  
      </div>
       ) 
    }
}
export default About;