import React from 'react'
import Navbar from "./Navbar"
import ProfileLeft from "./ProfileLeft"
import ProfileRight from "./ProfileRight"
function Profile() {
    return (
        <div className="profile">
            <Navbar></Navbar>
            <div className="profileflex">
                <div className="left">
                    <ProfileLeft></ProfileLeft>
                </div>
                <div className="right">
                    <ProfileRight></ProfileRight>
                </div>
            </div>
        </div>
    )
}

export default Profile
