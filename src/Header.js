import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { Link } from "react-router-dom";

// import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
// import { Avatar } from "@material-ui/core";


function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
            
            <div className='header__center'>
                <input type="text" placeholder="Start your Search" />
                <SearchIcon className="searchIcon"/>
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                {/* <ExpandMoreTwoToneIcon /> */}
                <AccountCircleSharpIcon />
                {/* <Avatar /> */}
            </div>
        </div>
    )
}

export default Header 
