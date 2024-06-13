//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section
let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        //if wnat to use animation on scroll
        sec.classList.remove('show-animate')
    });
  
    // Sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar on click
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

function sendEmail(){

    Email.send({
        secureToken: "b6e25739-974e-4181-b373-52517c35f5c0",
        Username : "mkhs202011@gmail.com",
        Password : "8BFA11CDEEBDFC43F2D97D3DC36D0580A14E",
        To : 'mkhs202011@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contect for Enquiry",
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone no: " + document.getElementById("phone").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent Succesfully")
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

});