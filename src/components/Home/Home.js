import NavLinks from "../NavLinks/NavLinks"
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className="container">
                    <h1 className="home-title">Do you know triangles?</h1>
                </div>
                <NavLinks/>
            </div>
            <div className="connect-me">
                    <div class="container">
                        <h3 class="connect-me">Connect with me</h3>
                        <a href="https://twitter.com/itsmebipul00" class="svg" target="_blank">
                            <img alt="Bipul Sharma | Twitter" width="22px"
                                src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />
                        </a>
                        <a href="https://www.linkedin.com/in/bipul-sharma-69b7751a0/" class="svg" target="_blank">
                            <img alt="Bipul's LinkdeIN" width="22px"
                                src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
                        </a>
                        <a href="https://github.com/itsmebipul00" class="svg" target="_blank">
                            <img alt="Bipul's Github" width="22px"
                                src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
                        </a>
                    </div>
                </div>
        </div>
        
    )
}

export default Home
