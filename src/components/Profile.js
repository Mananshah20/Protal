import React from 'react'
import Navbar from "./Navbar"
import ProfileLeft from "./ProfileLeft"
import ProfileRight from "./ProfileRight"
function Profile() {
    return (
        <div className="profileflex">
            <Navbar></Navbar>
            <div className="profile">
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
