//----------- Olga ---------------

//fetch data from wordpress api - headless cms

class Portfolio {
  constructor() {
    this.posts = [];
    this.postsFiltered = [];
    this.filtered = [];
    this.drawings = [];
    this.photos = [];
  }
  init() {
    this.getPosts();
    this.getPostsFiltered();
    this.getDrawings();
    this.getDrawingsFiltered();
    this.getPhotos();
    this.getPhotosFiltered();
  }

  async getPosts() {
    this.showLoader(true);
    let data = await fetch(
      "http://wordpress.mariussart.com/wp-json/wp/v2/posts?_embed&per_page=100"
    ).then((res) => res.json());
    this.posts = data.filter(
      (post) => post.acf.type !== "drawings" && post.acf.type !== "photos"
    );
    this.posts.length = 12;
    this.appendPosts(this.posts);
    this.showLoader(false);
  }

  async getPostsFiltered() {
    this.showLoader(true);
    let data = await fetch(
      "http://wordpress.mariussart.com/wp-json/wp/v2/posts?_embed&per_page=100"
    ).then((res) => res.json());
    this.postsFiltered = data.filter(
      (post) => post.acf.type !== "drawings" && post.acf.type !== "photos"
    );
    this.showLoader(false);
  }

  async getDrawings() {
    this.showLoader(true);
    let data = await fetch(
      "http://wordpress.mariussart.com/wp-json/wp/v2/posts?_embed&per_page=100"
    ).then((res) => res.json());
    this.drawings = data.filter((post) => post.acf.type == "drawings");
    this.drawings.length = 12;
    this.appendDrawings(this.drawings);
    this.showLoader(false);
  }

  async getDrawingsFiltered() {
    this.showLoader(true);
    let data = await fetch(
      "http://wordpress.mariussart.com/wp-json/wp/v2/posts?_embed&per_page=100"
    ).then((res) => res.json());
    this.drawingsFiltered = data.filter((post) => post.acf.type == "drawings");
    this.showLoader(false);
  }

  async getPhotos() {
    this.showLoader(true);
    let data = await fetch(
      "http://wordpress.mariussart.com/wp-json/wp/v2/posts?_embed&per_page=100"
    ).then((res) => res.json());
    this.photos = data.filter((post) => post.acf.type == "photos");
    this.photos.length = 12;
    this.appendPhotos(this.photos);
    this.showLoader(false);
  }

  async getPhotosFiltered() {
    this.showLoader(true);
    let data = await fetch(
      "http://wordpress.mariussart.com/wp-json/wp/v2/posts?_embed&per_page=100"
    ).then((res) => res.json());
    this.photosFiltered = data.filter((post) => post.acf.type == "photos");
    this.showLoader(false);
  }

  appendPosts(posts) {
    let htmlTemplate = "";
    for (let post of posts) {
      htmlTemplate += /*html*/ `
        <div class="item">
         <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="portfolio">
        </div>
    `;
    }
    document.querySelector(".portfolio-gallery").innerHTML = htmlTemplate;
  }

  appendDrawings(posts) {
    let htmlTemplate = "";
    for (let post of posts) {
      htmlTemplate += /*html*/ `
        <div class="item">
         <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="portfolio">
        </div>
    `;
    }
    document.querySelector(".drawings").innerHTML = htmlTemplate;
  }

  appendPhotos(posts) {
    let htmlTemplate = "";
    for (let post of posts) {
      htmlTemplate += /*html*/ `
        <div class="item">
         <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="portfolio">
        </div>
    `;
    }
    document.querySelector(".photos").innerHTML = htmlTemplate;
  }

  filterByCategories(value) {
    let buttonText = document.querySelector("#showButton");
    const buttons = document.querySelectorAll(".filter-buttons .filter-btn");
    for (const button of buttons) {
      if (value === button.getAttribute("id")) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
      buttonText.style.display = "block";
    }
    if (value == "all") {
      this.appendPosts(this.posts);
      this.getPosts();
    } else {
      buttonText.style.display = "none";
      const results = this.postsFiltered.filter(
        (post) => post.acf.type == value
      );
      if (results.length >= 12) {
        results.length = 12;
      }
      this.appendPosts(results);
    }
  }

  showMoreButton() {
    var buttonText = document.querySelector("#showButton");
    if (buttonText.innerHTML == "show more") {
      buttonText.innerHTML = "show less";
      buttonText.classList.remove("showmore");
      buttonText.classList.add("showmore2");
      this.getPostsFiltered();
      this.appendPosts(this.postsFiltered);
    } else if (buttonText.innerHTML == "show less") {
      buttonText.innerHTML = "show more";
      buttonText.classList.add("showmore");
      buttonText.classList.remove("showmore2");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.getPosts();
    }
  }

  showmoreButtonDrawings() {
    var buttonText = document.querySelector("#showButtonDrawings");
    if (buttonText.innerHTML == "show more") {
      buttonText.innerHTML = "show less";
      buttonText.classList.remove("showmore");
      buttonText.classList.add("showmore2");
      this.getDrawingsFiltered();
      this.appendDrawings(this.drawingsFiltered);
    } else if (buttonText.innerHTML == "show less") {
      buttonText.innerHTML = "show more";
      buttonText.classList.add("showmore");
      buttonText.classList.remove("showmore2");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.getDrawings();
    }
  }

  showmoreButtonPhotos() {
    var buttonText = document.querySelector("#showButtonPhotos");
    if (buttonText.innerHTML == "show more") {
      buttonText.innerHTML = "show less";
      buttonText.classList.remove("showmore");
      buttonText.classList.add("showmore2");
      this.getPhotosFiltered();
      this.appendPhotos(this.photosFiltered);
    } else if (buttonText.innerHTML == "show less") {
      buttonText.innerHTML = "show more";
      buttonText.classList.add("showmore");
      buttonText.classList.remove("showmore2");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.getPhotos();
    }
  }

  // =========== Loader functionality =========== //

  showLoader(show = true) {
    let loader = document.querySelector("#loader");
    if (show) {
      loader.classList.remove("hide");
    } else {
      loader.classList.add("hide");
    }
  }
}

export default Portfolio;
