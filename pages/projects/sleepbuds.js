export default class SleepBudsProject {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="sleepbuds" class="page">
      <div div class = "project-container">
            <div class="project-box">
             <p p class = "project-title" > INDIVIDUAL EXAM PROJECT: SLEEP BUDS</p>
              <p class="project-label label"> Exam Project 1nd Sem. Winter 2020 - Business Academy Aarhus</p>
              <img class="project-illustration" src="./images/icons/m-illustration.svg" alt="illustration">
              <p class="project-label">For this exam project I have chosen to create a website for the Bose company, more specifically for the Bose Sleep Buds, a type of earphones they sell for customers that encounter problems with their sleep schedule, stress, insomnia, or different noises such as neighbors’ fuss. Also, these earphones are unique, because they do not stream music, podcasts or anything else as the usual earphones do, they only stream the content from the Bose Sleep App. They are special, innovative and worth having a website about them.</p>
            </div>
            <img class="project-gif" src="./images/project/design/sleepbuds/bosepresentation.gif" alt="project gif">
       </div>
      

        <marquee class="project-animated-title2" scrollamount="30" direction="left" behavior="scroll">INDIVIDUAL EXAM PROJECT: SLEEP BUDS</marquee>
      <div class="project-container-secondary">
            <div div class = "project-box-secondary" data-aos = "zoom-in" >
             <p class="project-title">Analysis</p>
             <p class="project-info">I focused on young adults aged between 18-34 years. When conducting Qualitative Interviews I took into consideration the product, how important would it be for the user, to get to know afterwards what to include in the website, to make an informative campaign which would impress users when navigating on the website.</p>
            </div>
            <img class="project-image-01" src="./images/project/research/sleepbuds/mindmap_website_second.jpg" alt="persona" data-aos="fade-right">
            <img class="project-image-02" src="./images/project/research/sleepbuds/mindmap_design.jpg" alt="persona" data-aos="fade-left">
             <br style="clear:both" />
             <div div class = "project-box-secondary" data-aos="zoom-in" >
             <p class="project-title">Design Process</p>
             <p p class = "project-info" >I opted for this specific design because it is modern, it is accessible, it is user friendly and it does not require much experience in order to navigate through it. This color palette conveys a calm mood nocturnal atmosphere. All of these were proven by the users when I did the Usability Testing.</p>
            </div>
            <div class="projects-design">
            <div class="projects-design-column">
            <img class="project-image-03" src="./images/project/design/sleepbuds/sleepbuds-desktop-01.jpg" alt="mockup" data-aos="zoom-in-right">
            <img class="project-image-03" src="./images/project/design/sleepbuds/sleepbuds-desktop-02.jpg" alt="mockup" data-aos="zoom-in-left">
            </div>
            <div div div class = "projects-design-row" data-aos = "zoom-out-down" >
            <img class="project-image-04" src="./images/project/design/sleepbuds/sleepbuds-mobile-01.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/sleepbuds/sleepbuds-mobile-02.jpg" alt="mockup">
            <img class="project-image-04" src="./images/project/design/sleepbuds/sleepbuds-mobile-03.jpg" alt="mockup">
            </div>
            </div>
             <div div class = "project-box-secondary" data-aos = "zoom-in" >
             <p class="project-title">Prototypes</p>
             <p class="project-info">I tried to make this solution concise, good looking but at the same time useful for the customers. If talking about improvements, I could work more on real time experience design (text should be comfortable for users to read), on research (focus more on the solution rather than on product), on coding (learning more of the syntaxis).</p>
             <p class="links"><a target="_blank" class="red" href="https://xd.adobe.com/view/131d37ce-d8bf-4abe-bbd9-38c7c1027106-464e/">ADOBE XD MOCKUPS</a> / <a  target="_blank"class="red" href="http://sleepbuds.mariussart.com">WORKING PROTOTYPE</a></p>
             </div>
    

        <div class="navigation-arrows">
         <a class="label-arrow"  href="#uxchallenge" onclick="scrollToTop()" ><img class="arrow rotate180" src="./images/icons/right-arrow.svg" alt="right-arrow"> <p class="label-description">&nbsp;ux challenge</p></a>
         <a class="label-arrow"  href="#webdesign" onclick="scrollToTop()" ><p class="label-description">web design</p> <img class="arrow" src="./images/icons/right-arrow.svg" alt="right-arrow"></a>
        </div>
        </div>
      </section>
       
     
      
       
    `;
  }
}
