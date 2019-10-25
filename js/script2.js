/*
=============================
 Parallax
============================= */
var headerBg = document.getElementById('parallax-scroll')
window.addEventListener('scroll', function(){
    headerBg.style.opacity = 1 - +window.pageYOffset/750+''
    headerBg.style.top = +window.pageYOffset+'px'
    headerBg.style.backgroundPositionY = - +window.pageYOffset/2 + 'px'
})

/*
=============================
 scroll indicator
============================= */
// const landing = document.getElementById("landing");

// const landingOffset = landing.offsetTop;
// // landing.onscroll = function() {
//   window.onscroll = function() {
//   myFunction()
// };

// // When the user scrolls the page, execute myFunction 
// function myFunction() {
//   if (window.pageYOffset >= landingOffset){
      
//     const scrollBody = document.body.scrollTop || document.documentElement.scrollTop;

//       var winScroll = scrollBody - landingOffset;

//       const scrollH = document.documentElement.scrollHeight - document.documentElement.clientHeight;

//   var height =scrollH - landingOffset;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.height = scrolled + "%";
//   }

// }

/* ======================
    hide show nav
   ====================== */
var lastScrollTop = 0;
var sticky1 = navbar.offsetTop; 


navbar = document.getElementById("navbar");
// filter = document.getElementsById("filter-btn");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    if (window.pageYOffset >= 500 + sticky1) {
        if (scrollTop > lastScrollTop){
          // navbar.style.top = "-80px";
          // filter.style.top = "20px";
      } else {
          navbar.style.top = "0";
          // filter.style.top = "0";
      }
    }
    else {
      navbar.style.top = "0";
  }
    
    lastScrollTop = scrollTop;
})

/* ======================
ToolTip - img-header (text popup)
    MouseEvent.clientX
    https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
   ====================== */
   var spanText = document.getElementById('tooltip');
   window.onmousemove = function(e){
       var x = e.clientX,
           y = e.clientY;
       spanText.style.top = (y + 20) + 'px';
       spanText.style.left = (x + 20) + 'px';
   }

/* ======================
ToolTip - img popup
   ====================== */
   $('#popup').mousemove(function(e){
    var y = e.pageY - this.offsetTop;
    var x = e.pageX - this.offsetLeft;
    $('.img').css({
        'left': x + 'px',
        'top': y + 'px'
    });
});

/* ======================
    Display - Date & Day
   ======================
*/
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function checkTime() {
  var date = new Date();
  var sufix = '';
  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  var day = date.getDate();
  var month = monthNames[date.getMonth()];
  var weekday = dayNames[date.getDay()];
  if (day > 3 && day < 21) sufix = 'th';
  switch (day % 10) {
    case 1:
      sufix = "st";
    case 2:
      sufix = "nd";
    case 3:
      sufix = "rd";
    default:
      sufix = "th";
  }

  var today = new Date();

var day2 = today.getDate();
var month2 = today.getMonth() + 1;
var year2 = today.getFullYear();

if (day < 10) {
  day = '0' + day
}
if (month < 10) {
  month = '0' + month
}


  var out = document.getElementById("date-output");

out.innerHTML = "  It's "+ day2 + "/" + month2 + "/" + year2 + "</span><br/><span class='date'>" + month + ' ' + day + sufix + ', ' + weekday + '.';
}

setInterval(checkTime(), 1000);

// audio 2 
var vid = "7O7C5Nfa6O4",
    audio_streams = {},
    audio_tag = document.getElementById('youtube');

fetch("https://"+vid+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D" + vid).then(response => {
    if (response.ok) {
        response.text().then(data => {

            var data = parse_str(data),
                streams = (data.url_encoded_fmt_stream_map + ',' + data.adaptive_fmts).split(',');

            streams.forEach(function(s, n) {
                var stream = parse_str(s),
                    itag = stream.itag * 1,
                    quality = false;
                console.log(stream);
                switch (itag) {
                    case 139:
                        quality = "48kbps";
                        break;
                    case 140:
                        quality = "128kbps";
                        break;
                    case 141:
                        quality = "256kbps";
                        break;
                }
                if (quality) audio_streams[quality] = stream.url;
            });

            console.log(audio_streams);

            audio_tag.src = audio_streams['128kbps'];
            audio_tag.play();
        })
    }
});

function parse_str(str) {
    return str.split('&').reduce(function(params, param) {
        var paramSplit = param.split('=').map(function(value) {
            return decodeURIComponent(value.replace('+', ' '));
        });
        params[paramSplit[0]] = paramSplit[1];
        return params;
    }, {});
}

// var pContainerHeight = $('.parallaxCont').height();

// $(window).scroll(function(){

//   var wScroll = $(this).scrollTop();

//   if (wScroll <= pContainerHeight) {

//     $('.logo').css({
//       'transform' : 'translate(0px, '+ wScroll /2 +'%)'
//     });

//     $('.bannerText-projects').css({
//       'transform' : 'translate(0px, '+ wScroll /4 +'%)'
//     });

//     $('.fore-bird').css({
//       'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
//     });

//   }
// });