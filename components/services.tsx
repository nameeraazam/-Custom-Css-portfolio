import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa6";
import { GiSoundOn } from "react-icons/gi";
import { SlSocialSoundcloud } from "react-icons/sl";
import { GiEarthSpit } from "react-icons/gi";
import { FiAirplay } from "react-icons/fi";
import { FiAlignCenter } from "react-icons/fi";
function Services() {
    return(
       <main className="main">
          <div className="ser-container">
              <div className="top-div-ser">
                 <h2 className="title-ser">My Services</h2>
                 <p className="des-ser">Unlock exceptional results with our comprehensive services
                  Innovative Solutions!!
                </p>
              </div>
              <div className="boxes-con">
                <div className="box">
                    <FaLaptopCode className="ser-icon"/>
                    <h3>Responsive Web Design</h3>
                     <span>Flexible, Images</span>
                </div>
                <div className="box">
                    <GiSoundOn className="ser-icon"/>
                    <h3>Javascript Development</h3>
                     <span>Structure and content</span>
                </div>
                <div className="box">
                    <SlSocialSoundcloud className="ser-icon"/>
                    <h3>Mobile-First Development</h3>
                     <span>prioritize small features</span>
                </div>
                <div className="box">
                    <GiEarthSpit className="ser-icon"/>
                    <h3>Online-Store Development</h3>
                     <span>Node,js Express</span>
                </div>
                <div className="box">
                    <FiAlignCenter className="ser-icon"/>
                    <h3>Inventory-Management</h3>
                     <span>Blog, E-Commerce</span>
                </div>
                <div className="box">
                    <FiAirplay className="ser-icon"/>
                    <h3>Content-creation</h3>
                     <span>Order management and fulfillment</span>
                </div>
              
               
               
                </div>
          </div>
            
       </main>
    )
}
export default Services;