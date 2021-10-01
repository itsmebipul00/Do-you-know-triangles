import { useState, useRef, useEffect } from "react"
import { showmsg } from "../../utils/showMessage"
import NavLinks from "../NavLinks/NavLinks"


const Area = () => {
    const [base, setBase]= useState()
    const [height, setHeight]= useState()
    const [area, setArea] = useState()

    const Msg= useRef()

    const sumbitHandler = (e) => {
        e.preventDefault()
        const result= 1/2 * Number(base)* Number(height);
        setArea(result)
    }

    useEffect(() => {
        if(area>0){
            showmsg(`Area is ${area} units`, Msg)
        }else{
            showmsg(`Inputs aren't valid`, Msg)
        }
    }, [area])

    return(
        <div>
            <div className="container">
                <h2>Calculate Area</h2>
                <div className="area">
                    <form onSubmit={sumbitHandler}>
                        <div className="area-base">
                            <input
                                className='input'
                                value={base}
                                type='number'
                                placeholder='Base'
                                onChange={(e) => setBase(e.target.value)}
                            />
                        </div>
                        <div className="area-height">
                            <input
                                className='input'
                                type='number'
                                value={height}
                                placeholder='Height'
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className='button-result'>Calculate Area</button>
                        </div>
                    </form>
                    <div className="area-result">
                        <h2 className="result" ref={Msg}></h2>
                    </div>
                </div>
            </div>
            <NavLinks/>
        </div>
    )
}

export default Area
