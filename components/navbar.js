export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
       <nav class = "navbar" >
      <a href ="#home"  onclick="scrollToTop()" class="nav-logo"> <img class="logo_mariussart"
      alt = "logo"
          src="images/mariussart_logotype_red.svg" /></a>
      <div class="nav-menu">
        <li class="nav-item">
          <a href="#home" class="nav-link active">homepage</a>
        </li>
        <li class="nav-item">
          <a href="#webdesign" id="projects-active" class="nav-link">web design</a>
        </li>
        <li class="nav-item">
          <a href="#grdesign" class="nav-link">graphic design</a>
        </li>
        <li class="nav-item">
          <a href="#digitalart" class="nav-link">digital painting</a>
        </li>
        <li class="nav-item">
          <a href="#photos" class="nav-link">photography</a>
        </li>
        <li class="nav-item">
          <a target="_blank" href="https://drive.google.com/file/d/18tBkO7RTWXEtiGn2XZJqg_nOLugzeB41/view?usp=sharing" class="nav-link">curriculum vitae</a>
        </li>
      </div>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
    `;
  }
}

{
  /* <nav class="tabbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </nav> */
}
