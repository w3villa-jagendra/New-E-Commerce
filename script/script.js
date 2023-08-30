// ******************
// Why-buy-section 
// ******************




function toggleTopCategories(elem) {
    let prevElem = document.getElementsByClassName(
      "active_btn_toogle_categories"
    )[0];
    prevElem.classList.remove("active_btn_toogle_categories");
    elem.classList.add("active_btn_toogle_categories");
  }
  // function toogle_featureproduct(elemtop) {
  //   let previouselement = document.getElementsByClassName(
  //     "active_btn_toogle_top_categories"
  //   )[0];
  //   previouselement.classList.remove("active_btn_toogle_top_categories");
  //   elemtop.classList.add("active_btn_toogle_top_categories");
  // }
  // function toogle_ourblog(blogelement) {
  //   let previousblogele = document.getElementsByClassName(
  //     "active_btn_toogle_blog"
  //   )[0];
  //   previousblogele.classList.remove("active_btn_toogle_blog");
  //   blogelement.classList.add("active_btn_toogle_blog");
  // }



// let a = document.getElementsByClassName("whyus_crowsel")[0];
let b = document.querySelector(".whyus_crowsel");
// let featureproductcat = document.querySelector(".featureproductcat-container");
// let newfashioncrowesl = document.querySelector(".newfashioncrowesl");
// let blogcrowsel = document.querySelector(".blog-crowsel");
// let sayingaboutcarousel = document.querySelector(".saying-about-carousel");
// let mostviedmainsection = document.querySelector(".mostvied-main-section");
async function dataadd(category) {
  let response = await fetch("script/product.json");
  let data = await response.json();
  let content = data[category];
  ihtml = `<div class="owl-carousel owl-theme" id="whyus">`;
  for (i in content) {
    ihtml += `
    <div class="item1 img-topcategories">
    <img src="${content[i].img}" alt="" />
    <a href= "search.html">${content[i].name}</a>
 
    </div>
    `;
  }
  ihtml += `</div>`;
  b.innerHTML = ihtml;
  whyusCarousel();
}

dataadd((category = "topCategory"));



function whyusCarousel() {
  $("#whyus").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      426: {
        items: 2,
      },
      700: {
        items: 3,
      },
      900: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
}









 