import React from 'react'
import pizza from "../images/pizza.jpg"
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
function ProfileRight() {
    return (
        <div className="profileRight">
            <div className="coverpic">

            </div>
            <div className="container">
                <div className="likes">
                    <div className="like">
                        <h4>100</h4>
                        <h3>Uploads</h3>
                        <div className="box">
                            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                        </div>
                    </div>
                    <div className="like">
                        <h4>100 </h4>
                        <h3>Uploads</h3>
                        <div className="box">
                            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                        </div>
                    </div>

                    <div className="like">
                        <h4>100 </h4>
                        <h3>Uploads</h3>
                        <div className="box">
                            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="layer1">
                    <div className="square">
                        <img src="https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                    </div>
                    <div className="square">
                        <img src={pizza} alt=""></img>
                    </div>
                    <div className="square">
                        <img src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                    </div>
                </div>
                <div className="layer1">
                    <div className="square">
                        <img src="https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                    </div>
                    <div className="square">
                        <img src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                    </div>
                    <div className="square">
                        <img src={pizza} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileRight
