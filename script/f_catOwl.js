fetch("script/f_cat_items.json")
    .then(response => response.json())
    .then(data => {
        const carousel = document.getElementById("f_cat_items");
        for (let i = 0; i < data.f_cat_items.length; i++) {
            let div = document.createElement("div");
            div.classList.add("item", "card");
            let img = document.createElement("img");
            img.classList.add("card-img-top");
            img.src = data.f_cat_items[i].f_cat_img;
            img.alt = data.f_cat_items[i].f_cat_name;
            let section = document.createElement("section");


            section.innerHTML = `           <div class="card-body">
            <a href="#">
                <h6>${data.f_cat_items[i].f_cat_name}</h6>
            </a>
            <span>${data.f_cat_items[i].f_cat_price}</span>

            <div class="foot">

                <button type="button" class="btn btn-primary">Add to Cart</button>
                <i class="fa-regular fa-heart fa-xl"></i>
            </div>
            </div>`


            div.appendChild(img);
            div.appendChild(section);
       
            if (carousel) {
                carousel.appendChild(div);
            }
        }

    });

