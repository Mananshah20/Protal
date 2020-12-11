import React from 'react'
import Circle from "../images/circle.jpg"
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';

function ProfileLeft() {
    return (
        <div className="profileleft">

            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFGmS4SwnLWdIcgOjprdiiZYg2E7hloPbfQ&usqp=CAU"} alt=""></img>
            <div className="profileleftdiv">
                <h4>Becky Helen</h4>
                <h5>Mexican Chef</h5>
                <div className="icons">
                    <div className="top2">
                        <HomeIcon style={{ fontSize: 50 }} className="icon"></HomeIcon>
                        <FlashOnIcon style={{ fontSize: 50 }} className="icon"></FlashOnIcon>



                    </div>
                    <div className="top2">
                        <PersonIcon style={{ fontSize: 50 }} className="icon"></PersonIcon>
                        <SettingsIcon style={{ fontSize: 50 }} className="icon"></SettingsIcon>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileLeft

