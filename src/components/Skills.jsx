import './Skills.css'
import { GiTechnoHeart } from "react-icons/gi";
import { MdOutlineLanguage } from "react-icons/md";


const Skills = () => {
  return (

    <section id='Skills'>
         <div class='box-skills'>
       <div class='box-s'>
        <div class='line-s'></div>
    <h1 class='skill-h '>Skills</h1> 

    </div>

    <div class='skill-box'>
        <div class='Technical-skills'><span class='tech-logo'><GiTechnoHeart/></span><h1>Technical-Skills</h1>
            <div class='progress-a'>
                <h1 class='tech-head-a'>Web Development</h1>
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
        <div class='list-a1'>
                <h1 class='heads'>React</h1>
                <h1 class='heads'>Tailwind</h1>
                <h1 class='heads'>NodeJs</h1>
                <h1 class='heads'>MongoDB</h1>
            </div>
    </div>
            </div>

            <div class='progress-b'>
                <h1 class='tech-head-b'>Machine Learning</h1>
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
            <span class="percentage">70%</span>
        </div>
        <div class='list-a2'>
                <h1 class='heads'>Sklearn</h1>
                <h1 class='heads'>Scipy</h1>
                <h1 class='heads'>Tensorflow</h1>
                <h1 class='heads'>PyTorch</h1>
            </div>
    </div>
            </div>

            <div class='progress-c'>
                <h1 class='tech-head-c' >Data-Science</h1>
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
            <span class="percentage">60%</span>
        </div>
        <div class='list-a3'>
                <h1 class='heads'>Numpy</h1>
                <h1 class='heads' >Pandas</h1>
                <h1 class='heads'>Matplotlib</h1>
                <h1 class='heads'>Seaborn</h1>
            </div>
    </div>
            </div>
            
        
        </div>
       
        <div class='Language'><span class='lang-logo'><MdOutlineLanguage/></span><h1>Languages</h1>
            <div class='lang'>

            <div class='lang-a'>


           
            <div>
                <div class='c'>
                <h1 class='head'>C Language:<span class='percentage-a'>70%</span></h1>
               
                </div>
            
            <div class='pee1'>
            <div class="progress-bar">
    <div class="progress-bar__fill" id="progressFill"></div>
  </div>
            </div>
            
  </div>


           <div>
            <h1 class='head'>C++:<span class='percentage-a'>75%</span></h1>
            <div class="progress-bar-a">
    <div class="progress-bar__fill-a" id="progressFill"></div>
  </div>
           
           </div> 
            </div>

            <div class='lang-b'>
           <div>
            <h1 class='head'>Python:<span class='percentage-a'>80%</span></h1>
            <div class="progress-bar-b">
    <div class="progress-bar__fill-b" id="progressFill"></div>
  </div>
           </div> 
           <div>
            <div class='j'>
            <h1 class='head'>Javascript:<span class='percentage-a'>80%</span></h1>
        
            </div>
       
            <div class="progress-bar-c">
    <div class="progress-bar__fill-c" id="progressFill"></div>
  </div>
           </div> 
            </div>

            
            <div class='lang-c'>
           <div>
            <h1 class='head'>HTML:<span class='percentage-a'>90%</span></h1>
            <div class="progress-bar-d">
    <div class="progress-bar__fill-d" id="progressFill"></div>
  </div>
            </div> 


           <div>
            <h1 class='head'>Golang:<span class='percentage-a'>40%</span></h1>
            <div class="progress-bar-e">
    <div class="progress-bar__fill-e" id="progressFill"></div>
  </div>
  </div> 
            </div>


            </div>
          
        </div>
    </div>
<div class='line-skills'></div>
  
    </div>
    </section>
   
  )
}

export default Skills;
