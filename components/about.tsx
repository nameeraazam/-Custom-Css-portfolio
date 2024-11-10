import "../style/hero.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "../style/about.css";
import Link from "next/link";

function About(){
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
                    <div className="social-icon">

                    <Link href={"https://www.linkedin.com/in/syeda-nameera-azam-b58454279/"}><FaLinkedin className="s-icon1"/></Link>
                    <Link href={"https://www.instagram.com/i.am.syeda.nameera?igsh=MW4wOXc4NzYxZW54bQ=="}> <FaInstagramSquare className="s-icon2"/></Link>
                    </div>  
                   </div>
                 <div className="hero-right-div">
                    <h1 className="title-hero">About Us</h1>
                    <p className="des-hero">I am a frontend skilled web developer with expertise in HTML5, CSS3, JavaScript, Next.js, TypeScript, and Figma. Crafting high-performance websites with precision. Optimizing user experience through innovative coding, Expert website development solutions, Building robust, scalable, and secure websites, Your vision, our expertise.
                    I am a highly analytical front-end developer with expertise in HTML, CSS, JavaScript, and various front-end frameworks. I develop dynamic and responsive interfaces that meet client needs  My expertise spans front-end, back-end, and full-stack development, with a keen eye for responsive design.
                    To deliver exceptional web experiences that exceed client expectations, leveraging the latest technologies and trends.

</p>
                  </div>
            </div>
      </div>
    )
}
export default About;