import {useState, useRef, useEffect } from  'react'
import { showmsg } from '../../utils/showMessage'
import NavLinks from '../NavLinks/NavLinks'
import './Quiz.css'

const correctAns = {
    thirdAngle: "30",
    ninetyDegree: "right-angled",
    greaterthan90: "obtuse",
    lessthan90: "acute",
    samesize: "equilateral",   
}

const Quiz = () => {

    const [answer, setAnswer]= useState({})
    const [score, setScore]= useState(0)
    const Msg = useRef()

    useEffect(() => {
        showmsg(`Your score is ${score}`, Msg)
    }, [score])

    const handleChange = (e) => {
        let ans= {...answer}
        ans[e.target.name]= e.target.value
        setAnswer(ans)
        // console.log(score)
    }

    

    const handleSubmit = (e) => {
        e.preventDefault()
        let incrementedScore= 0
        Object.keys(correctAns).forEach((item) => {
          if (correctAns[item] === answer[item]) {
           return incrementedScore++
          }
        });
        setScore(incrementedScore)
    }
    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="question-answer">
                        <div className="question-one">
                            <p className="question">1. What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?</p>
                        </div>
                        <div className="options one">
                            <div className="input-container">
                                <input
                                    id="1_a"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="thirdAngle"
                                    value="45"
                                />
                                <label htmlFor="1_a">45</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="1_b"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="thirdAngle"
                                    value="60"
                                />
                                <label htmlFor="1_b">60</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="1_c"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="thirdAngle"
                                    value="30"
                                />
                                <label htmlFor="1_c">30</label>
                            </div>
                        </div>

                    </div>

                    <div className="question-answer">
                        <div className="question-two">
                            <p className="question">2.  If a triangle has an angle of 90 degrees, what is it called?</p>
                        </div>
                        <div className="options three">
                            <div className="input-container">
                                <input
                                    id="2_a"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="ninetyDegree"
                                    value="obtuse"
                                />
                                <label htmlFor="2_a">Obtuse</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="2_b"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="ninetyDegree"
                                    value="acute"
                                />
                                <label htmlFor="2_b">Acute</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="2_c"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="ninetyDegree"
                                    value="right-angled"
                                />
                                <label htmlFor="2_c">Right-angled</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="question-answer">
                        <div className="question-three">
                            <p className="question">3.  If a triangle has one angle is more than 90°, what is it called?</p>
                        </div>
                        <div className="options three">
                            <div className="input-container">
                                <input
                                    id="3_a"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="greaterthan90"
                                    value="obtuse"
                                />
                                <label htmlFor="3_a">Obtuse</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="3_b"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="greaterthan90"
                                    value="acute"
                                />
                                <label htmlFor="3_b">Acute</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="3_c"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="greaterthan90"
                                    value="right-angled"
                                />
                                <label htmlFor="3_c">Right-angled</label>
                            </div>
                        </div>
                    </div>

                    <div className="question-answer">
                        <div className="question-four">
                            <p className="question">4.  If a triangle has all three angles are less than 90°, what is it called?</p>
                        </div>
                        <div className="options four">
                            <div className="input-container">
                                <input
                                    id="4_a"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="lessthan90"
                                    value="obtuse"
                                />
                                <label htmlFor="4_a">Obtuse</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="4_b"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="lessthan90"
                                    value="acute"
                                />
                                <label htmlFor="4_b">Acute</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="4_c"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="lessthan90"
                                    value="right-angled"
                                />
                                <label htmlFor="4_c">Right-angled</label>
                            </div>
                        </div>
                    </div>

                    <div className="question-answer">
                        <div className="question-five">
                            <p className="question">5.  If a triangle has all three sides are of same length and all three angles are of same measure, what is it called?</p>
                        </div>
                        <div className="options five">
                            <div className="input-container">
                                <input
                                    id="5_a"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="samesize"
                                    value="obtuse"
                                />
                                <label htmlFor="5_a">Obtuse</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="5_b"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="samesize"
                                    value="acute"
                                />
                                <label htmlFor="5_b">Acute</label>
                            </div>
                            <div className="input-container">
                                <input
                                    id="5_c"
                                    type="radio"
                                    onChange={handleChange}
                                    className="common-radio"
                                    name="samesize"
                                    value="equilateral"
                                />
                                <label htmlFor="5_c">Equilateral</label>
                            </div>
                        </div>
                    </div>
                    <div className="btn-flex">
                        <div className="result">
                            <button className="button-result">Get your score</button>
                        </div>
                    </div>
                    <h2  className='result' ref={Msg}></h2>
                </form>
            </div>
            <NavLinks/>
        </div>
    )
}

export default Quiz
