import "./home.css";
import profile from "../../assets/profile.png";
import cloud from "../../assets/cloud.svg";
import star from "../../assets/star.svg";

import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import skype from "../../assets/skype.svg";

const Home = () => {
    return (
        <section className="home-container">
            <img className="profile-pic" src = {profile} alt="sapthagiri ramesh" />
            <h2>Sapthagiri Ramesh</h2>
            <p>Full-Stack Developer</p>

            <img className="cloud" src = {cloud} alt="c1" />
            <img className="cloud2" src={cloud} alt="c1" />
            
            <img className="star" src = {star} alt="c1" />
            <img className="star2" src = {star} alt="c1" />
            <img className="star3" src = {star} alt="c1" />
            <img className="star4" src = {star} alt="c1" />
            <img className="star5" src={star} alt="c1" />
            <div className="image-container">
                <a href="/" ><img src={github} alt="github" /></a>
                <a href="/" ><img src={instagram} alt="instagram" /></a>
                <a href="/" ><img src={linkedin} alt="linkedin" /></a>
                <a href="/" ><img src={skype} alt="skype" /></a>
            </div>
        </section>
    )
}

export default Home;