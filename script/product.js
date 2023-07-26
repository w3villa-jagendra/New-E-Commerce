

const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

//   console.log("ID: " + id);


  fetch("script/fp_items.json")
.then(response => response.json())
.then(data => {
for(let i=0;i<data.fp_items.length;i++)
{
  let Id = data.fp_items[i].fp_id;
  const bigImg = document.getElementById("bigImg");
  const productName = document.getElementById("product-name");
  const oldPrice = document.getElementById("old-price");
  const newPrice = document.getElementById("new-price");

  if (Id === id)
  {
//    console.log(data.fp_items[i])

   bigImg.innerHTML = ` <img id="bigImg" src="${data.fp_items[i].fp_img}" alt="">`
   // bigImg.innerHTML = ` <img id="bigImg" src="img/backdrop003-300x225h.jpg" alt=""> <h1>Hi</h1>`

   productName.innerHTML = `<h1> ${data.fp_items[i].fp_name}</h1>`
   oldPrice.innerHTML = `<h4> <del> ${data.fp_items[i].fp_oldPrice}</del></h4>`
   newPrice.innerHTML = `<h4>  ${data.fp_items[i].fp_newPrice}</h4>`
    

  }
   
}
}
)
