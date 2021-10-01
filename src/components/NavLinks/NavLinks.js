import { Link } from "react-router-dom"
import './NavLinks.css'

const NavLinks = () => {
    return (
        <div className="con-nav">
            <div className="container home-links">
                <div className="istriangle-link">
                    <Link className="link-item" to='/'>Home</Link>
                </div>
                <div className="istriangle-link">
                    <Link className="link-item" to='/isTriangle'>isTriangle?</Link>
                </div>
                <div className="area-link">
                    <Link className="link-item" to='/area'>Area</Link>
                </div>
                <div className="hypotenuse-link">
                    <Link className="link-item" to='/hypotenuse'>Hypotenuse</Link>
                </div>
                <div className="quiz-link">
                    <Link className="link-item" to='/quiz'>Quiz</Link>
                </div>
            </div>
        </div>
    )
}

export default NavLinks
