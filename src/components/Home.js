import React from 'react'
import Circle from "./Circle"
import Row from "./Row"
import Navbar from "./Navbar"
import circle from "../images/circle.jpg"

import vertical from "../images/vertical.jpg"
import r1 from "../images/r1.jpg"
import r2 from "../images/r2.jpg"

function home() {
    return (
        <div >
            <Navbar></Navbar>
            <div className="container2">
                <Circle></Circle>
                <div className="rows">
                    <Row title="Dance"

                        square={circle}
                        r1={r1}
                        r2={r2}
                        vertical={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTy4RIjNFimH492ouHd_uxRLooBrHrFWf3g&usqp=CAU"}
                    ></Row>

                    <Row title="Music"
                        square={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqK9X99nospQCKLy3HobVtAP2Ux5phn-smiw&usqp=CAU"}
                        r1={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iL0G_ApJYSpAJmj6K5Q5nt1Ss2A_s93NAA&usqp=CAU"}
                        r2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflsmlVAiKkUfSvnx1jY-KcmGy4eZXNlN8Vw&usqp=CAU"}
                        vertical={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7Exqe-B7MtFWmG-1g97F2QeDIQlgP0jlCQ&usqp=CAU"}
                    ></Row>
                    <Row title="Photography"
                        square={circle}
                        r1={r1}
                        r2={r2}
                        vertical={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTy4RIjNFimH492ouHd_uxRLooBrHrFWf3g&usqp=CAU"}
                    ></Row>
                </div>
            </div>
        </div >
    )
}

export default home
