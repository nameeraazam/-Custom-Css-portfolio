import "../style/hero.css";
import Image from "next/image";
function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                <div>
                    <Image src={"/image/nameera.webp" }
                     width={200}
                     height={200} 
                     alt="profile"
                     className="header-image"  > 
                    </Image>
                </div>
                 <div className="hero-right-div">
                    <h1 className="title-hero">I am Web Developer</h1>
                    <p className="des-hero">I am a frontend skilled web developer with expertise in HTML5, CSS3, JavaScript, Next.js, TypeScript, and Figma. Crafting high-performance websites with precision. Optimizing user experience through innovative coding, Expert website development solutions, Building robust, scalable, and secure websites, Your vision, our expertise.
                    I am a highly analytical front-end developer with expertise in HTML, CSS, JavaScript, and various front-end frameworks. I develop dynamic and responsive interfaces that meet client needs</p>
                  <button className="hero-btn">HIRE ME</button>
                  </div>
            </div>
        </div>
    )
}

export default Hero