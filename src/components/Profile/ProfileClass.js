import React from "react";
import { GITHUB_GET_USER } from "../../config/config";
class Profile extends React.Component{
    constructor(props) {
        super(props);
         this.state = {
            userInfo : {
                name : "Dummy Name",
                bio : "Dummy content"
            }
         }
    }

    async componentDidMount() {
        console.log("CDM");
        const data = await fetch (GITHUB_GET_USER + this.props.name);
        const json = await data.json();
  
        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate() {
        
    }

    componentWillUnmount() {
        
    }
    render() {
        const { userInfo } = this.state;
        return (
        <div className="profile-card"> 
            <img className="profile-img" src={userInfo.avatar_url} alt={userInfo.name} />
           
            <div className="profile-details">
                    <p className="profile-bio">{userInfo.bio}</p>
                    <div className="profile-info">
                        <div className="blog-followers">
                         <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                         <span className="followers">{userInfo.followers}</span>
                    </div>
                    <div className="blog-repo-count">
                       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"></path></g></svg>
                        <span className="repos">{userInfo.public_repos}</span>
                    </div>              
                </div>                  
            </div>
      </div>)
    }
}
export default Profile;