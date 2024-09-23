import React from "react";
import ReactDOM from "react-dom/client";

/**
 * -Header
 *  -Logo
 *  -Nav Items
 * -Body
 *  -Search
 *  -RestaurantContainer
 *      -RestaurantCard
 *          -Img
 *          -Name, star rating, 
 * -Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestaurantCard = () =>{
    return (
        <div className="res-card">
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="Image 1" />
            <div>
                Restaurant one
            </div>

        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}
const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
