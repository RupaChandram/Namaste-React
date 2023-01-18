import logo from "../../../assets/images/hunger-box.png"

export const TitleComponent = () => (
    <a href="/" >
        <img className="logo" src={logo} alt="Logo" />
    </a>
)

export const HeaderComponent = () => {
    return(
    <div className="header">
            <TitleComponent />      
            <div className="nav-items" key="user">
            <ul style={{
    color: "#3d4152"
}}>
                    <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
               </ul>
            </div>      
        </div>
    )
}
export default HeaderComponent;