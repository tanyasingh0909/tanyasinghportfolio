import './Portflio.css'
//import './script.js'

import { TfiBookmarkAlt } from "react-icons/tfi";
import { TfiBriefcase } from "react-icons/tfi";
import { TfiClipboard } from "react-icons/tfi";

const Portfolio = () => {
  return (
    <div>
               <div class='box-p'>
        <div class='line-p'></div>
   <div><h1 class='port-h '>Portfolio</h1> </div> 
   <div class='parts'>
    <div class='education-background'>
    <div class='myedu'><div class='logo1'><TfiBookmarkAlt/></div>My Educational Background </div>
   
   <div class="timeline">
        <div class="timeline-event">
            <div class="timeline-date">Aug 2023-June 2027</div>
            <div class="timeline-content">
                <h3>Graduation</h3>
                <p class='para'>I completed my B.tech degree in Chemical Engineering from Indian Institute of Technology,Kanpur.</p>
            </div>
        </div>
        <div class="timeline-event">
            <div class="timeline-date">Apr 2007-Mar 2022</div>
            <div class="timeline-content">
                <h3>Schooling</h3>
                <p class='para'>I completed my schooling from Shivaji Group Of Institutions,Kanpur with PCM stream.</p>
            </div>
        </div>
    </div>
   
    <div class='myprojects'><div class='logo2'>< TfiClipboard/></div>Projects</div>
    <div class='internships'><div class='logo3'>< TfiBriefcase/></div>Internships</div>
    <div class='container-main'>
    <div class='container-p'></div>
    <div class='container-p'></div>
    </div>
   
    
  

   </div>
   

    </div>

    
    </div>


    </div>
  

  )
}

export default Portfolio
