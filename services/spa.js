class SpaService {
  constructor() {
    this.defaultPage = "home";
  }

  init() {
    this.pages = document.querySelectorAll(".page");
    this.navItems = document.querySelectorAll(".navbar a");
    window.addEventListener("hashchange", () => this.pageChange());
    this.pageChange();
  }

  // hide all pages
  hideAllPages() {
    for (let page of this.pages) {
      page.style.display = "none";
    }
  }

  // show page or tab
  showPage(pageId) {
    this.hideAllPages();
    const basePath = location.pathname.replace("index.html", "");
    history.pushState({}, null, basePath + `#${pageId}`);
    document.querySelector(`#${pageId}`).style.display = "block";
    scrollTo(0, 0);
    this.setActiveTab(pageId);
  }

  // sets active tabbar/ menu item
  setActiveTab(pageId) {
    let projectActive = document.querySelector("#projects-active");
    for (let navItem of this.navItems) {
      if (`#${pageId}` === navItem.getAttribute("href")) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    }
    if (
      `${pageId}` == "frontloberne" ||
      `${pageId}` == "sleepbuds" ||
      `${pageId}` == "uxchallenge" ||
      `${pageId}` == "uxui" ||
      `${pageId}` == "webapp"
    ) {
      projectActive.classList.add("active");
    }
  }

  // navigate to a new view/page by changing href
  navigateTo(pageId) {
    window.location.href = `#${pageId}`;
  }

  // set default page or given page by the hash url
  // function is called 'onhashchange'
  pageChange() {
    let page = this.defaultPage;
    if (window.location.hash) {
      page = window.location.hash.slice(1);
    }
    this.showPage(page);
  }

  // show and hide tabbar
  hideTabbar(hide) {
    let tabbar = document.querySelector("#tabbar");
    if (hide) {
      tabbar.classList.add("hide");
    } else {
      tabbar.classList.remove("hide");
    }
  }
}

const spaService = new SpaService();
export default spaService;
