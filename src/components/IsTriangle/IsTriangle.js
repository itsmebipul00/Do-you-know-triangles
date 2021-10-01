import { useState, useRef } from "react"
import { showmsg } from "../../utils/showMessage"
import NavLinks from "../NavLinks/NavLinks"

const IsTriangle = () => {
    const [angleone, setAngleOne]= useState()
    const [angletwo, setAngleTwo]= useState()
    const [anglethree, setAngleThree]= useState()
    const Msg= useRef()

    const sumbitHandler = (e) => {

        e.preventDefault()
        const condition= Number(angleone)+Number(angletwo)+Number(anglethree)===180 && angleone > 0 && angletwo > 0 && anglethree > 0
        if(Number(condition)) {
            showmsg('It is a triangle', Msg)
        }else{
            showmsg('It is not a triangle', Msg)
        }
    }

    return (
        <div className="container">
           <h2>Check If sum of angles is a Triangle?</h2>
            <div className="traingle">
                <form onSubmit={sumbitHandler}>
                    <div className="first-angle">
                        <input
                            className='input'
                            value={angleone}
                            type='number'
                            placeholder='Angle 1'
                            onChange={(e) => setAngleOne(e.target.value)}
                        />
                    </div>
                    <div className="second-angle">
                        <input
                            className='input'
                            type='number'
                            value={angletwo}
                            placeholder='Angle 2'
                            onChange={(e) => setAngleTwo(e.target.value)}
                        />
                    </div>
                    <div className="third-angle">
                        <input
                            className='input'
                            type='number'
                            value={anglethree}
                            placeholder='Angle 3'
                            onChange={(e) => setAngleThree(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className='button-result'>Calculate Hypotenuse</button>
                    </div>
                </form>
                <div className="angle-result">
                    <h2 className="result" ref={Msg}></h2>
                </div>
            </div>
            <NavLinks/>
        </div>
    )
}

export default IsTriangle
