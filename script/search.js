document.getElementById('search-input').addEventListener('keyup', () => {
  const search_input = document.querySelector('input').value;
  if (search_input.length >= 3) {
    filterData(search_input);
  } else {
    document.getElementById('search-list').style.display = 'none';
  }
});

document.getElementById('search-icon').addEventListener('click', () => {
  const search_value = document.querySelector('input').value;
  if (search_value.length >= 3) {
    filterData(search_value);
  } else {
    document.getElementById('search-list').style.display = 'none';
  }
});

// Function to filter data from JSON based on the search input
function filterData(search_input) {
  fetch('script/fp_items.json')
    .then((response) => response.json())
    .then((data) => {
      const filteredItems = data.fp_items.filter((item) =>
        item.fp_name.toLowerCase().includes(search_input.toLowerCase())
      );
      showResults(filteredItems);
    });
}

// Function to display the filtered results in the search list
function showResults(filteredItems) {
  const searchList = document.getElementById('search-list');
  searchList.innerHTML = ''; // Clear previous results

  if (filteredItems.length === 0) {
    searchList.style.display = 'none'; // Hide the list if no matches found
    return;
  }

  filteredItems.forEach((item) => {
    const listItem = document.createElement('li');

    // Create an image element and set its source to the fp_image URL
    const img = document.createElement('img');
    img.src = item.fp_img;
    img.alt = item.fp_name; // Set an alt attribute for accessibility

    // Create a span element to display the fp_name
    const nameSpan = document.createElement('span');
    nameSpan.textContent = item.fp_name;

    // Use template literal to combine img and nameSpan elements inside the li
    listItem.innerHTML = `
         <a href="search.html?fpName=${item.fp_name}" style= "text-decoration:none; color:black"> <img class="img-search" src="${item.fp_img}" alt="${item.fp_name}">
          <span>${item.fp_name}</span> </a>
        `;

    // Append the list item to the search list
    searchList.appendChild(listItem);
  });


  searchList.style.display = 'block';
}



// Dynamic Cards



// This will log the value of the "id" parameter from the URL to the console


// fetch("script/fp_items.json")
//   .then((response) => response.json())
//   .then(data => {

//     let dynamicCard = document.getElementById("product-cards-item")

//     // console.log(data.fp_items[1].fp_name)





//   for(let i = 0; i < data.fp_items.length; i++){
//     let Id = data.fp_items[i].fp_id;
//     let Name =  data.fp_items[i].fp_name;
    
//     if(fpName === Name ){
//     let div = document.createElement("div");
//     div.classList.add("product-cards-item");

//     div.innerHTML = `
//   <div class="card">

//                           <img src="${data.fp_items[i].fp_img}" class="card-img-top"
//                               alt="...">
//                           <div class="card-header">
//                               <a href="#"> ${data.fp_items[i].fp_name}</a>
//                               <a href="#"> Model 291a </a>

//                           </div>
//                           <div class="card-body">
//                               <h6>${data.fp_items[i].fp_type}</h6>

//                               <p class="price"> ${data.fp_items[i].fp_newPrice} <del style="color:grey"> ${data.fp_items[i].fp_oldPrice}</del></p>
//                               <div class="wishlist">
//                                   <input type="number" id="quantity" name="quantity" placeholder="1" min="1" max="5">
//                                   <button type="button" class="btn btn-primary btn-sm">Add to cart</button>
//                                   <i class="fa-regular fa-heart icon"></i>
//                                   <i class="fa-solid fa-arrow-right-arrow-left icon"></i>
//                               </div>
//                           </div>
//                           <div class="card-foot">

//                               <a href="#"><i class="fa-regular fa-circle-question"></i> Questions</a>
//                               <a href="#"><i class="fa-solid fa-dollar-sign"></i> Buy Now</a>

//                           </div>


//                       </div>
//   `

//     dynamicCard.appendChild(div)

//   }
// }


//   }

//   )