import "./about.css";
import about from "../../assets/about.svg";
import computer from "../../assets/computer.png";

const About = () => {
    return (
        <section className="about-container">

            <div className="content-container">
                <div className="left-container">
                    <h1>About</h1>
                    <p>I'm Sapthagiri, a fullstack developer(M.E.R.N) with admirable programming skills and creative attitude. I have started my career with startup companies which benefited my love for learning various technologies from root and enjoyed the challenge of creating web and mobile applications. </p>

                    <p>Always in a search of learning new technologies and become expert in it. In addition to my interest in games I have developed a Highscore game which is available in Google Playstore.</p>

                    <p> With my strong core knowledge in technologies I want to grow stronger and better.</p>
                </div>
                <div className="right-container">
                    <img className="abt-bg" src={about} alt="abt" />
                </div>
            </div>
            <div className="skills-container">
                <div className="front-end">
                    <h3>FrontEnd</h3>
                    <ul>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>ES6+</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="computer">
                    <img src={computer} alt=""/>
                </div>
                <div className="back-end">
                    <ul>
                        <li>MongoDB</li>
                        <li>Node JS</li>
                        <li>Express</li>
                    </ul>
                    <h3>BackEnd</h3>
                </div>
            </div>
        </section>
    )
}

export default About;