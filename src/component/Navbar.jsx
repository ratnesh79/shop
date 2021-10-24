import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
 



const Navbar=()=>{
    
        const [menu,setmenu]=useState(true);

    return <>
    <div className="nav">
    <div className="menu" onClick={()=>setmenu(!menu)}>
    <MenuIcon />
    </div>
    <div className="title_nav">
        <h1>MOBILE SHOP</h1>
    </div>
    <div  className={menu?"lists":"list"}  >
        <ul className="mobile_view">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/register">REGISTER</Link></li>
            
 
        </ul>
    </div>
</div>
    </> 
}
export default Navbar;