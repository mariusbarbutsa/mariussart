export default class UXChallenge {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="uxchallenge" class="page">
      <div div class = "project-container">
            <div class="project-box">
             <p p class = "project-title" >200 SME'S UX CHALLENGE: GROUP 6</p>
              <p class="project-label label">UX Challenge Project, March 2021 - Dansk Design Center</p>
              <img class="project-illustration" src="./images/icons/m-illustration.svg" alt="illustration">
              <p class="project-label">This challenge was a 3-day event with 32 solvers, 8 companies and 8 mentors. We went through all 5 phases of a Design Sprint in just 3 days. Our problem statement was: How can a user sell multiple items fast under one listing, while still keeping the announce informative?</p>
            </div>
            <img class="project-gif" src="./images/wallpaper-convergence.jpg" alt="project gif">
       </div>
      

        <marquee class="project-animated-title2" scrollamount="30" direction="left" behavior="scroll">200 SME'S UX CHALLENGE: GROUP 6</marquee>
      <div class="project-container-secondary">
            <div div class = "project-box-secondary" data-aos = "zoom-in" >
             <p class="project-title">Analysis</p>
             <p class="project-info">We are working with the Swibbid app, and their target audience consists mainly of 30+ women, but also the super-sellers. Our expected output was a good and unique idea presented in prototype(Adobe XD). </p>
            </div>
            <img class="project-image-01" src="./images/project/research/uxchallenge/hmw.jpg" alt="persona" data-aos="fade-right">
            <img class="project-image-02" src="./images/project/research/uxchallenge/sketches.jpg" alt="persona" data-aos="fade-left">
             <br style="clear:both" />
             <div div class = "project-box-secondary" data-aos="zoom-in" >
             <p class="project-title">Design Process</p>
             <p p class = "project-info" >For the design we improved the color palette, and changed the menu of the present Swibbid app. When it comes to new stuff, we focused on maintaining the existing "design guide" while adding some new features, such as button, field and items styling.</p>
            </div>
            <div class="projects-design">
            <div class="projects-design-row" data-aos="zoom-in-right">
            <img class="project-image-04" src="./images/project/design/uxchallenge/uxchallenge-mobile-01.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/uxchallenge/uxchallenge-mobile-02.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/uxchallenge/uxchallenge-mobile-03.jpg" alt="mockup">
            </div>
             <div class="projects-design-row" data-aos="zoom-in-left">
            <img class="project-image-04" src="./images/project/design/uxchallenge/uxchallenge-mobile-04.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/uxchallenge/uxchallenge-mobile-05.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/uxchallenge/uxchallenge-mobile-06.jpg" alt="mockup">
            </div>
            </div>
             <div div class = "project-box-secondary" data-aos = "zoom-in" >
             <p class="project-title">Prototypes</p>
             <p class="project-info">I tried to make this solution concise, good looking but at the same time useful for the customers. If talking about improvements, I could work more on real time experience design (text should be comfortable for users to read), on research (focus more on the solution rather than on product), on coding (learning more of the syntaxis).</p>
             <p class="links"><a class="red" href="https://drive.google.com/file/d/1DQSccUP8MAll-dVSK6iE6nSSePHp6zGk/view?usp=sharing">SOLVER DIPLOMA</a> / <a class="red" href="https://xd.adobe.com/view/e1f55086-3fa6-4ae2-bee5-cf4c33134934-b4a6/?fullscreen&hints=off">ADOBE XD PROTOTYPE</a></p>
             </div>
    

        <div class="navigation-arrows">
         <a class="label-arrow"  href="#webdesign" target="_blank"><img class="arrow rotate180" src="./images/icons/right-arrow.svg" alt="right-arrow"> <p class="label-description">&nbsp;web design</p></a>
         <a class="label-arrow"  href="#grdesign" target="_blank"><p class="label-description">graphic design</p> <img class="arrow" src="./images/icons/right-arrow.svg" alt="right-arrow"></a>
        </div>
        </div>
      </section>
       
     
      
       
    `;
  }
}
