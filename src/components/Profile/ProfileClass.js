import React from "react";
class Profile extends React.Component{
    render() {
        return (<div>
            <h1>Profile class renders..</h1>
            {this.props.name}
        </div>)
    }
}
export default Profile;