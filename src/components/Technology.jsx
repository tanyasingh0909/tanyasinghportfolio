import './Technology.css'
import {RiReactjsLine} from  "react-icons/ri"
import { SiHtml5 } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";

const Technology = () => {
  return (
    <div>
         <div class='box-t'>
        <div class='line-t'></div>
    <h1 class='tech-h '> Technologies</h1> 

    </div>

    <div class='components-h'>
    <div class='html-b'><div class='html'>< SiHtml5 /></div></div>
        <div  class='css-b'><div class='css'><TbBrandCss3 /></div></div>
        <div  class='js-b'><div class='js'><RiJavascriptLine  /></div></div>
        <div  class='react-b'><div class='react'><RiReactjsLine /></div></div>
        <div  class='tailwind-b'><div class='tailwind'><RiTailwindCssLine  /></div></div>
        <div  class='cpp-b'><div class='cpp'><TbBrandCpp /></div></div>
    </div>

    
    <div class="progress-circle" data-progress="75">
        <div class="circle">
            <div class="mask full">
                <div class="fill"></div>
            </div>
            <div class="mask half">
                <div class="fill"></div>
                <div class="fill fix"></div>
            </div>
        </div>
        <div class="inset-circle">
            <span class="percentage">75%</span>
        </div>
    </div>
    <div class='lines-long'></div>
       

    </div>
   
  )
}

export default Technology
