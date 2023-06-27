fetch("script/fp_items.json")
  .then(response => response.json())
  .then(data => {
    const carousel = document.getElementById("fpro-items");
    for (let i = 0; i < data.fp_items.length; i++) {
      let div = document.createElement("div");
      div.classList.add("item", "card");
      let img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = data.fp_items[i].fp_img;
      img.alt = data.fp_items[i].fp_name;
     let section = document.createElement("section");
    

            section.innerHTML= ` <div class="card-header">
           <a href="product.html?id=${data.fp_items[i].fp_id}"> ${data.fp_items[i].fp_name}</a>
            <a href="#"> ${data.fp_items[i].fp_model}</a>

        </div>
        <div class="card-body">
            <h6>${data.fp_items[i].fp_type}</h6>

            <p class="price">${data.fp_items[i].fp_newPrice} <del style="color:grey">${data.fp_items[i].fp_oldPrice}</del></p>
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




        </div>`  
    
    //   let button = document.createElement("button");
    //   button.classList.add("btn", "btn-light", "btn-why");
    //   button.textContent = data.why_buy[i].name;
      div.appendChild(img);
      div.appendChild(section);
    //  console.log(data.fp_items[2].fp_name);
    //   div.appendChild(button);
      if (carousel) {
        carousel.appendChild(div);
      }
    }

  });

  