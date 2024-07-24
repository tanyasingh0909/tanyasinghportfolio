import './Blogs.css'
import myimage1 from'./blog1.jpg'
import myimage2 from './blog2.jpg'
import myimage3 from './blog3.webp'
import myimage4 from './blog4.webp'
import myimage5 from './blog5.webp'
import myimage6 from './blog6.webp'
const Blogs = () => {
  return (
    <section id='Blogs'>
       <div>
         <div class='box-b'>
        <div class='line-b'></div>
    <h1 class='blog-h '> Blogs</h1> 

    </div>
      

<div class='blog-wrapper'>

<div class='blog-a'>
<div class='blog1-box'>
  <img  class='blog-img-1' src={myimage1}></img>
  <h1 class='blog-head-1'>Blog Article</h1>
  <p class='parag' >Bard vs ChatGPT: Which is better for coding? </p>
  <a  class='anchor'  href='https://www.pluralsight.com/blog/software-development/chatgpt-vs-bard-coding'>Read full Article</a>
</div>
<div class='blog1-box'>
<img  class='blog-img-1' src={myimage3}></img>
  <h1 class='blog-head-1'>Blog Article</h1>
  <p class='parag' >How E-Learning Development Companies Can Protect Against Cyber Threats </p>
  <a  class='anchor'  href='https://www.cm-alliance.com/cybersecurity-blog/how-e-learning-development-companies-can-protect-against-cyber-threats'>Read full Article</a>
</div>
<div class='blog1-box'>
<img  class='blog-img-1' src={myimage4}></img>
  <h1 class='blog-head-1'>Blog Article</h1>
  <p class='parag' >Enhancing Business Security with AI Consulting Services </p>
  <a  class='anchor'  href='https://www.cm-alliance.com/cybersecurity-blog/enhancing-business-security-with-ai-consulting-services'>Read full Article</a>
</div>

</div>


<div class='blog-b'>
<div class='blog1-box'>
<img  class='blog-img-1' src={myimage5}></img>
  <h1 class='blog-head-1'>Blog Article</h1>
  <p class='parag'>How to design, implement, and deploy an API with MuleSoft 4</p>
  <a class='anchor' href='https://www.pluralsight.com/resources/blog/software-development/design-api-mulesoft-4'>Read full Article</a>
</div>
<div class='blog1-box'>
<img  class='blog-img-1' src={myimage2}></img>
  <h1 class='blog-head-1'>Blog Article</h1>
  <p class='parag' >ChatGPT's new ‘Browse with Bing’: Watching AIs stalk you is odd </p>
  <a  class='anchor'  href='https://www.pluralsight.com/blog/machine-learning/chatgpt-browse-with-bing-feature'>Read full Article</a>
</div>
<div class='blog1-box'>
<img  class='blog-img-1' src={myimage6}></img>
  <h1 class='blog-head-1'>Blog Article</h1>
  <p class='parag' >AWS re:Inforce: Take these generative AI and cloud security measures</p>
  <a  class='anchor'  href='https://www.pluralsight.com/resources/blog/security/reinforce-2024-ai-cloud-security'>Read full Article</a>
</div>

</div>


</div>


    </div>
    </section>
   
  )
}

export default Blogs
