// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')


hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
  e.preventDefault();
  console.log('hi');
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var name = document.getElementById('name').value;
  var body = 'name : ' + name + '<br/> email : ' + email + '<br/> subject : ' + subject + '<br/> Massage : ' + message; 
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "devkardam004@gmail.com",
    Password : "74086AA59ADA464B46A9E6ED5E84C6B8FDD1",
    // SecureToken : "43b25021-261f-4adc-b3c9-efc50e47dd8a",
    To : 'dkkardam49@gmail.com',
    From : "devkardam004@gmail.com",
    Subject : "Contact Massage",
    Body : body
}).then(
  message => alert(message)
);

})