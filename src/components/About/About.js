import { Outlet } from "react-router-dom";
import Profile from "../Profile/ProfileClass";

const About = () => {
    return (
        <div className="container">
            <h1>About page is coming soon...</h1>
            <Outlet />
            <Profile name="Rupa"/>
        </div>
    )
}
export default About;