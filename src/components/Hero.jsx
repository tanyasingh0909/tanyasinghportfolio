
import profilepic from '../assets/images/tanyaimg.png'
import './Hero.css'

const Hero = () => {
  return (

    <section id='Hero'>
        <div class='badadabba'>
         <div class="dabba">
              <div class='box'> <div class="line"></div> <h1 class="hello">Hello </h1> </div>
                <h1 class="tanya">I'm Tanya Singh</h1>
                <h1 class='web'>Web Developer</h1>
                <p class='text'>Welcome to my portfolio! I'm Tanya Singh, a passionate and dedicated Web Developer & Designer with a love for creating innovative and efficient solutions. </p>
                 <a href='https://spectacular-cajeta-fb4e3a.netlify.app/' class='button-resume'>Resume</a>
                
            </div>
            <div class='pic'>
                <img src={profilepic} height='800' width='365' alt="img" class='img'></img>
            </div>
    </div>
          
    </section>
  
            
           
  )
}

export default Hero
