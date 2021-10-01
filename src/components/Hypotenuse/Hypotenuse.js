import { useState,useRef, useEffect } from "react"
import NavLinks from "../NavLinks/NavLinks"
import {showmsg} from '../../utils/showMessage'

const Hypotenuse = () => {
    const [base, setBase]= useState()
    const [height, setHeight]= useState()
    const [hypotenuse, setHypotenuse]= useState()
    const Msg= useRef()
    
    useEffect(() => {
        if(hypotenuse>0){
            showmsg(`Hypotenuse is ${hypotenuse}`, Msg)
        }else{
            showmsg('base and hypotenuse must be greater than 0', Msg)
        }
    }, [hypotenuse])

    const sumbitHandler = (e) => {
        e.preventDefault()
        if(base>0&&height>0){
            const ans = (Math.sqrt(base ** 2 + height ** 2)).toFixed(2)
            setHypotenuse(ans) 
        }else{
            showmsg('base and hypotenuse must be greater than 0', Msg)
        }

    }

    return (
        <div>
            <div className="container">
                <h2>Calculate Hypotenuse</h2>
                <div className="hypotenuse">
                    <form onSubmit={sumbitHandler}>
                        <div className="hypotenuse-base">
                            <input
                                className='input'
                                value={base}
                                type='number'
                                placeholder='base'
                                onChange={(e) => setBase(e.target.value)}
                            />
                        </div>
                        <div className="hypotenuse-height">
                            <input
                                className='input'
                                type='number'
                                value={height}
                                placeholder='height'
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className='button-result'>Calculate Hypotenuse</button>
                        </div>
                    </form>
                    <div className="hypotenuse-result">
                        <h2 className="result" ref={Msg}></h2>
                    </div>
                </div>
                <NavLinks/>
            </div>
        </div>

    )
}

export default Hypotenuse
