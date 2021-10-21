export default class WebApp {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="webapp" class="page">
      <div div class = "project-container">
            <div class="project-box">
             <p p class = "project-title" >WEB APP EXAM: SELFLY</p>
              <p class="project-label label"> Exam Project 3rd Sem. Fall 2021 - Business Academy Aarhus</p>
              <img class="project-illustration" src="./images/icons/m-illustration.svg" alt="illustration">
              <p class="project-label">It is normal to have your feelings fluctuate throughout the day - we are humans after all. But what's important is the way we cope with emotional burdens or bad days. Sometimes we just lack ideas of how we can care for ourselves. This is where Selfly, our self-care mobile app, can be a useful tool to support and help people to find new ways to boost their well-being. </p>
            </div>
            <img class="project-gif" src="./images/project/design/webapp/selfly.gif" alt="project gif">
       </div>
      

        <marquee class="project-animated-title2" scrollamount="30" direction="left" behavior="scroll">WEB APP EXAM: SELFLY</marquee>
      <div class="project-container-secondary">
            <div div class = "project-box-secondary" data-aos = "zoom-in" >
             <p class="project-title">Analysis</p>
             <p class="project-info">Our target audience are people aged 16 - 35 who tend to experience stress and/or deal with negative emotions but also just want to pamper themselves sometimes. In short, it represents young adults that are conscious about their mental health and want to improve it or simply take their mind off of things once in a while. For example, Bob, our User Journey character, is a 20 year old student who often experiences emotional drops and stress and, therefore, is looking for a way to make himself feel better.
</p>
            </div>
            <img class="project-image-01" src="./images/project/research/webapp/userjourney.jpg" alt="persona" data-aos="fade-right">
            <img class="project-image-02" src="./images/project/research/webapp/testing.png" alt="persona" data-aos="fade-left">
             <br style="clear:both" />
             <div div class = "project-box-secondary" data-aos="zoom-in" >
             <p class="project-title">Design Process</p>
             <p p class = "project-info" >All in all, we tried not to reinvent patterns but keep everything familiar, simple,
             and accessible. One of the key design elements of our Web App is that it
             conveys positive emotions, makes you feel calm and safe, and tempts you to
             use it, all of that is due to the use of pastel colors, soft/rounded shapes and
             wise use of tone of voice.</p>
            </div>
            <div class="projects-design" data-aos="zoom-in">
            <div class="projects-multipics">
            <img class="project-image-04" src="./images/project/design/webapp/webapp-mobile-01.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/webapp/webapp-mobile-02.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/webapp/webapp-mobile-03.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/webapp/webapp-mobile-04.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/webapp/webapp-mobile-05.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/webapp/webapp-mobile-06.jpg" alt="mockup">
            </div>
            </div>
             <div div class = "project-box-secondary" data-aos = "zoom-in" >
             <p class="project-title">Prototypes</p>
             <p class="project-info">Even though everything looks smooth, it was challenging to put
the logic behind it together and apply it in our code, but it was thrilling to
see it working properly.</p>
             <p class="links"><a target="_blank" class="red" href="https://xd.adobe.com/view/76f7e71e-c1cc-4f57-84be-0f39863c1f7b-23a4/?fullscreen&hints=off">ADOBE XD MOCKUPS</a> / <a target="_blank" class="red" href="http://selfly.mariussart.com/#/">WORKING PROTOTYPE</a> / <a target="_blank" class="red" href="https://github.com/mariusbarbutsa/SelfCare-APP">GITHUB REPO</a></p>
             </div>
    

        <div class="navigation-arrows">
         <a class="label-arrow" href="#webdesign" onclick="scrollToTop()"><img class="arrow rotate180" src="./images/icons/right-arrow.svg" alt="right-arrow"> <p class="label-description">web design</p></a>
         <a class="label-arrow" href="#frontloberne" onclick="scrollToTop()"><p class="label-description">frontloberne</p> <img class="arrow" src="./images/icons/right-arrow.svg" alt="right-arrow"></a>
        </div>
        </div>
      </section>
       
     
      
       
    `;
  }
}
