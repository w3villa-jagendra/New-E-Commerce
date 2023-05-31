// ******************
// Why-buy-section 
// ******************



const h = document.getElementsByClassName("owl-item")[0];
fetch("script/why_buy.json")
    .then(response => response.json())
//     .then(data => {

//         for (let i = 0; i < data.why_buy.length; i++) {

//             //  let hh = document.getElementById("hh");
//             let a = document.createElement("div")
//             a.classList.add("item")
//             a.innerHTML += ` 
     
//         <div class="card why-card">

//         <img id="why-buy-img" src="${data.why_buy[i].image}" class="card-img-top" alt="...">
//         <button type="button" class="btn btn-light btn-why">${data.why_buy[i].name}</button>

//     </div>
//  `
//             h.appendChild(a)
//         }
//     })






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