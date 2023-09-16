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

dataadd( "topCategory");



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






// featured Product

function toggleFeaturedCategory(elemtop) {
  let previouselement = document.getElementsByClassName(
    "active_btn_toogle_top_categories"
  )[0];
  previouselement.classList.remove("active_btn_toogle_top_categories");
  elemtop.classList.add("active_btn_toogle_top_categories");
}
// function toogle_ourblog(blogelement) {
//   let previousblogele = document.getElementsByClassName(
//     "active_btn_toogle_blog"
//   )[0];
//   previousblogele.classList.remove("active_btn_toogle_blog");
//   blogelement.classList.add("active_btn_toogle_blog");
// }



// let a = document.getElementsByClassName("whyus_crowsel")[0];


let featureproductcat = document.querySelector(".featuredCar");
// let newfashioncrowesl = document.querySelector(".newfashioncrowesl");
// let blogcrowsel = document.querySelector(".blog-crowsel");
// let sayingaboutcarousel = document.querySelector(".saying-about-carousel");
// let mostviedmainsection = document.querySelector(".mostvied-main-section");
async function featuredDataAdd(category) {
let response = await fetch("script/featured.json");
let data = await response.json();
let content = data[category];
ihtml = `<div class="owl-carousel owl-theme" id="featuredPro">`;
for (i in content) {
  ihtml += `
  
  <div class="card item1 img-topcategories">
  <div class="comman-lable ">
      <span class=" lable-1"> Hot</span>
      <span class="lable-2">-70%</span>
  </div>

  <div class="rotated-lable">
      <span class="lable-4">CUSTOM LABLE</span>
  </div>

  <img src="${content[i].fp_img}" class="card-img-top" alt="...">
  <div class="card-header">
      <a href="#">${content[i].fp_name}</a>
      <a href="#">${content[i].fp_model} </a>

  </div>
  <div class="card-body">
      <h6>${content[i].fp_type}</h6>

      <p class="price">${content[i].fp_newPrice} <del style="color:grey">${content[i].fp_oldPrice}</del></p>
      <div class="wishlist">
          <input type="number" id="quantity" name="quantity" placeholder="1" min="1" max="5">
          <button type="button" class="btn btn-primary btn-sm">Add to cart</button>
          <i class="fa-regular fa-heart icon"></i>
          <i class="fa-solid fa-arrow-right-arrow-left icon"></i>
      </div>
  </div>
  <div class="card-foot">

      <a href="#"><i class="fa-regular fa-circle-question"></i> Questions</a>
      <a href="#"> <i class="fa-solid fa-dollar-sign"></i> Buy Now</a>




  </div>


</div>

  `;
}
ihtml += `</div>`;
featureproductcat.innerHTML = ihtml;
featuredCarousel();
}

featuredDataAdd((category = "featured"));



function featuredCarousel() {
$("#featuredPro").owlCarousel({
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



//  featured Category

let featCat = document.querySelector(".featuredCategory");

async function featuredCatDataAdd(category) {
  let response = await fetch("script/f_cat_items.json"); // Change the JSON file path
  let data = await response.json();
  let content = data[category];
  ihtml = `<div class="owl-carousel owl-theme" id="featuredCat">`;
  for (i in content) {
    ihtml += `
    
    <div class="card item1 right-card">
   
     
                            <img src="${content[i].f_cat_img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <a href="#">
                                    <h6>${content[i].f_cat_name}</h6> <!-- Use the title from your JSON -->
                                </a>
                                <span>${content[i].f_cat_price}</span> <!-- Use the price from your JSON -->

                                <div class="foot">

                                    <button type="button" class="btn btn-primary">Add to Cart</button>
                                    <i class="fa-regular fa-heart fa-xl"></i>
                                </div>
                            </div>
                        



    </div>

    `;
  }
  ihtml += `</div>`;
  featCat.innerHTML = ihtml;
  featuredCatCarousel();
}

featuredCatDataAdd((category = "f_cat_items"));

function featuredCatCarousel() {
  $("#featuredCat").owlCarousel({
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
