document.getElementById("header").innerHTML = `<div class="main-menu" >

<div class="container top-menu">

    <div class=" left-menu">
        <ul class="menu">
            <li class="menu1"><i class="fa fa-home"></i> Home</li>
            <li class="menu2"><i class="fa fa-id-card"></i> About Us</li>
            <li class="menu3"><i class="fa fa-envelope-o"></i> Contact</li>
            <li class="menu4"><i class="fa fa-question-circle"></i> FAQ</li>
        </ul>
    </div>

    <div class="middle-menu">
        <li class="mid-menu1"> <img class="mid-menu1-flag" src="img/Flag_of_the_United_Kingdom_(1-2).svg.png"
                alt=""> English</li>
        <li class="mid-menu2"><i class="fa fa-usd"></i> US-Dollar</li>
    </div>

    <div class="right-menu">
        <li class="mid-menu1"><i class="fa fa-info-circle"></i> More Menu</li>
        <li class="mid-menu2"><i class="fa fa-truck"></i> Delivery</li>
    </div>

</div>

<div class=" medium-menu">

    <div class="container">
        <div class="mid-bar">

            <div class="logo">
                <a href="#"><img src="img/journal-logo1x-185x32.png" alt="Journal-Logo"></a>
            </div>

            <div class="search-bar">
                <div class="all-items">
                    <p>All</p>
                </div>


                <div class="search-input">
                    <input type="text" placeholder="  Search here...">
                </div>

                <div class="search-icon">
                    <i class="fa fa-search"></i>
                </div>
            </div>


            <div class="account-menu">
                <div class="secondry-menu">
                    <div class="sec-menu">
                        <a href="#" class="login" id="openModalBtn"><i class="fa fa-user-circle "></i>
                            <span class="login">Login</span></a>
                    </div>


                    <div class="sec-menu">
                        <a href="#" class="reg" id="registrationBtn"><i class="fa fa-pencil"></i><span
                                class="reg">Registered</span></a>
                    </div>

                    <div class="sec-menu">
                        <a href="#" class="wish"><i class="fa fa-heart-o"></i><span
                                class="wish">Wishlist</span></a>
                    </div>

                    <div class="sec-menu">
                        <a href="#" class="compare"><i class="fa fa-exchange"></i><span
                                class="compare">Compare</span></a>
                    </div>




                </div>
                <div class="cart-menu">
                    <a href="#"> <span id="cart-total"> 0-item(0) - $0.00</span>
                        <i class="fa fa-shopping-cart"></i></a>
                </div>
            </div>

        </div>
    </div>


</div>



<!-- Bottom-Bar -->

<div class="bottom-bar">
    <div class="container">
        <div class="bottom-nav ssssss">
            <div class="bottom-left-nav">
                <a href="#" class="nav-yellow-bg all "><i class="fa fa-bars"></i> ALL
                    Department
                    <span>Sale</span> </a>
                <a href="#">MULTILEVEL</a>
                <a href="#" class="nav-blue-bg ">MEGA MENU <span> New</span></a>
                <a href="#">FULLWIDTH</a>
            </div>

            <div class="bottom-right-nav">

                <a href="#"><i class="fa fa-phone"></i>18005556787</a>
                <a href="#" class="nav-yellow-bg  "><i class="fa fa-file-text-o"></i>BLOG</a>

            </div>
        </div>
    </div>
</div>


<!-- **************
     Login Modal
  ************** -->
<div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
        <div class="user-login">
            <span>Email:</span>
            <input type="email" placeholder="Enter Your Email">

        </div>
        <div class="user-login">
            <span>Password:</span>
            <input type="password" placeholder="Enter Your Password">

        </div>
    </div>

</div>

</div>`