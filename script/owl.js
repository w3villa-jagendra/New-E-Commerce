fetch("script/why_buy.json")
  .then(response => response.json())
  .then(data => {
    const carousel = document.getElementById("y-buy");
    for (let i = 0; i < data.why_buy.length; i++) {
      let div = document.createElement("div");
      div.classList.add("item", "card", "why-card");
      let img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = data.why_buy[i].image;
      img.alt = data.why_buy[i].name;
      let button = document.createElement("button");
      button.classList.add("btn", "btn-light", "btn-why");
      button.textContent = data.why_buy[i].name;
      div.appendChild(img);
      div.appendChild(button);
      if (carousel) {
        carousel.appendChild(div);
      }
    }

  });