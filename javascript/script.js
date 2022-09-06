// Nav Menu //

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Typewriter Effect //

/*
    var messageArray = ["front-end dev"];
    var textPosition = 0;
    var speed = 100;

    typewriter = () => {
        document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae";

        if(textPosition++ != messageArray[0].length)
            setTimeout(typewriter, speed);
    }

    window.addEventListener("load", typewriter);
*/

// Typing Carousel Effect //

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.05em solid #000 }";
    document.body.appendChild(css);
  };

  // Read More //

  const parentContainer = document.querySelector('.read-more-container');

  parentContainer.addEventListener('click', event => {
      const current = event.target;
      const isReadMoreBtn = current.className.includes('read-more-btn');
      if(!isReadMoreBtn) return;
      const currentText = event.target.parentNode.querySelector('.read-more-text');
      currentText.classList.toggle('read-more-text--show');
      current.textContent = current.textContent.includes('Read More') ?
      "Read Less" : "Read More";
  })