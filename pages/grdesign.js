export default class GraphicDesign {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="grdesign" class="page">
       <p class="webdesign-tag">GRAPHIC DESIGN.</p>

        <div class="graphicdesign-wrapper">

            <section class="portfolio" id="Portfolio">
                
                    <div class="row">
                        <div class="filter-buttons">
                                 <button class="filter-btn alls selected" id="all" value="all" onclick="filterbyCategories(this.value)">show all</button>
                                 <button class="filter-btn" id="logos" value="logos" onclick="filterbyCategories(this.value)">logos</button>
                                 <button class="filter-btn" id="flyers" value="flyers" onclick="filterbyCategories(this.value)">flyers</button>
                                 <button class="filter-btn" id="illustrations" value="illustrations" onclick="filterbyCategories(this.value)">illustrations</button>
                                 <button class="filter-btn" id="magazines" value="magazines" onclick="filterbyCategories(this.value)">magazines</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="portfolio-gallery">

                           
                        </div>
                    </div>
            </section>

        </div>

        <div class="button-showmore"><button onclick="showMore()" class="showmore" id="showButton">show more</button></div>
  <div class="navigation-arrows">
            <a class="label-arrow" href="#home"><img class="arrow rotate180" src="images/icons/right-arrow.svg"
                    alt="right-arrow">
                <p class="label-description">&nbsp;homepage</p>
            </a>
            <a class="label-arrow" href="#digitalart">
                <p class="label-description">digital painting</p> <img class="arrow" src="images/icons/right-arrow.svg"
                    alt="right-arrow">
            </a>
        </div>
  </section>
    `;
  }
}
