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
         <a href="search.html?${item.fp_id}" style= "text-decoration:none; color:black"> <img class="img-search" src="${item.fp_img}" alt="${item.fp_name}">
          <span>${item.fp_name}</span> </a>
        `;
      
        // Append the list item to the search list
        searchList.appendChild(listItem);
      });
      
  
    searchList.style.display = 'block';
  }
  