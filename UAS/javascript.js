//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
})

// form booking

function GEEKFORGEEKS() {
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["Telephone"];
    var what = document.forms["RegForm"]["Subject"];
    var address = document.forms["RegForm"]["Address"];

    if (name.value == "") {
        window.alert("Please Enter Your Name.");
        name.focus();
        return false;
    }

    if (address.value == "") {
        window.alert("Please Enter Your Address.");
        address.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
          "Please Enter a Valid Email Address.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert(
          "Please Enter Your Telephone Number.");
        phone.focus();
        return false;
    }


    if (what.selectedIndex < 1) {
        alert("Please Enter Your Session.");
        what.focus();
        return false;
    }

    return true;
}

// scroll to top button
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 