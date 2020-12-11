import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'; import FlashOnIcon from '@material-ui/icons/FlashOn';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import { yellow } from '@material-ui/core/colors';
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className="header">
            <Link to="/home" style={{ textDecoration: "none", color: yellow[500] }}>
                <h3 className="header_icon">PROTAL</h3>
            </Link>

            <div className="header_center">

                <input type="text" placeholder="Search"></input>
                <SearchIcon color="disabled"></SearchIcon>
            </div>
            <div className="header_right">
                <HomeOutlinedIcon style={{ fontSize: 40, color: yellow[500] }}></HomeOutlinedIcon>
                <FlashOnIcon style={{ fontSize: 40, color: yellow[500] }}></FlashOnIcon>
                <Link to="/profile">
                    <PersonOutlineOutlinedIcon style={{ fontSize: 40, color: yellow[500] }}></PersonOutlineOutlinedIcon>
                </Link>
                <SettingsOutlinedIcon style={{ fontSize: 40, color: yellow[500] }}></SettingsOutlinedIcon>

            </div>


        </div>
    )
}

export default Navbar
