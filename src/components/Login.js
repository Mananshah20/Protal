import React from 'react'
import { Link } from "react-router-dom"
function Login() {
    return (
        <div className="login">
            <div className='container'>
                <div className="logintext">
                    <h3><span>Pro</span>ducing <span>Tal</span>ents</h3>
                    <p>Join the new Talent Community</p>
                </div>
                <div className="formstart">
                    <div className="buttons">
                        <button className="loginbutton">Login</button>
                        <button className="signupbutton">Sign Up</button>
                    </div>

                    <form>

                        <div className="form-group">
                            <input type="text" placeholder="Becky Helen" required>

                            </input>
                            <button className="btn">Name</button>
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="protal123@gmail.com" required></input>
                            <button className="btn">Email Id</button>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" required></input>
                            <button className="btn">Password</button>
                        </div>
                        <Link to="/home">
                            <button className="next" type="submit">Next</button>
                        </Link>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
