
import profilepic from '../assets/images/tanyaimg.png'
import './Hero.css'

const Hero = () => {
  return (
    <div class='badadabba'>
         <div class="dabba">
              <div class='box'> <div class="line"></div> <h1 class="hello">Hello </h1> </div>
                <h1 class="tanya">I'm Tanya Singh</h1>
                <h1 class='web'>Web Developer</h1>
                <p class='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero illo obcaecati amet, repellat mollitia explicabo repellendus earum laboriosam vitae omnis, reprehenderit accusantium qui architecto voluptatem tempore iure, rerum dolores. Aliquid harum quam quo sunt sint, accusamus repellendus atque doloribus delectus? Necessitatibus, optio quidem non repellat cumque quos labore repudiandae.</p>
                 <a href='https://spectacular-cajeta-fb4e3a.netlify.app/' class='button'>Resume</a>
                
            </div>
            <div class='pic'>
                <img src={profilepic} height='800' width='365' alt="img" class='img'></img>
            </div>
    </div>
          
            
           
  )
}

export default Hero
