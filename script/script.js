// ******************
// Why-buy-section 
// ******************


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




// Get the modal
// Open modal
document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("myLoginModal").style.display = "block";
  });
  
  // Close modal when close button is clicked
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("myLoginModal").style.display = "none";
  });
  
  document.getElementsByClassName("cancel-btn")[0].addEventListener('click', function(){
    document.getElementById("myLoginModal").style.display ="none";
  })
  // Close modal when user clicks outside the modal
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("myLoginModal")) {
      document.getElementById("myLoginModal").style.display = "none";
    }
  });
  



//   Registration Modal
   // JavaScript to handle the registration regModal behavior
   var regModal = document.getElementById("registrationModal");
   var regBtn = document.getElementById("registrationBtn");
   var span = document.getElementsByClassName("close")[0];
   var cancle = document.getElementsByClassName("cancel-regBtn")[0];

   regBtn.onclick = function () {
     regModal.style.display = "block";
   }

   span.onclick = function () {
     regModal.style.display = "none";
   }

   cancle.onclick = function () {
     regModal.style.display = "none";
   }

   window.onclick = function (event) {
     if (event.target == regModal) {
       regModal.style.display = "none";
     }
   }


  //  function to set values from registration modal
   let array = [];
  function getRegInfo(event) {
   event.preventDefault();
    
   let mail = document.getElementById('regEmail').value;
   let  userId = document.getElementById('regUserid').value;
   let  pwd = document.getElementById('regPassword').value;
    console.log(mail , userId, pwd)
    
    const Details = {
      email : mail,
      userid :userId,
      pass : pwd
    }

array.push(Details);
localStorage.setItem("UserDeatils",JSON.stringify(array));
regModal.style.display = "none";


   }



  // function for compare login and registration data

  
 
  


  document.getElementById("submit_btn").addEventListener("click",(e)=>{
    e.preventDefault();
    let loginUser = document.getElementById('username').value;
    let  loginPass = document.getElementById('loginPassword').value;
    
 let value = JSON.parse(localStorage.getItem("UserDeatils"))
     
     for(let i=0; i<value.length;i++)
     {
       if(loginUser === value[i].userid && loginPass === value[i].pass)
       {
        document.getElementById("myLoginModal").style.display = "none";
        alert("Succesfully Login")
        break;
       }
      else{
        alert("Invalid details ")
      }
     }
    
  }

  )