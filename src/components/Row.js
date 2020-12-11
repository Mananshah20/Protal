import React from 'react'

function Row({ title, square, r1, r2, vertical }) {



    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="rowtile">
                <div className="square">
                    <img src={square} alt=""></img>
                </div>
                <div className="vertical">
                    <img src={vertical} alt=""></img>
                </div>
                <div className="rectangle">
                    <div className="r1">
                        <img src={r1} alt=""></img>
                    </div>
                    <div className="r2">
                        <img src={r2} alt=""></img>
                    </div>
                </div>

                <div className="square">
                    <img src={square} alt=""></img>
                </div>
                <div className="vertical">
                    <img src={vertical} alt=""></img>
                </div>
                <div className="rectangle">
                    <div className="r1">
                        <img src={r1} alt=""></img>
                    </div>
                    <div className="r2">
                        <img src={r2} alt=""></img>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Row
