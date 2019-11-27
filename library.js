function start() {
  let clicklightning = document.getElementById('lightning-bolt');
  let clicknadi = document.getElementById('nadira-logo');
  let clicktiff = document.getElementById('tiffany-logo');
  let clicksteph = document.getElementById('steph-logo');
  let clickgrid = document.getElementById('title-grid');


  clicklightning.addEventListener("click", function() {

    clicklightning.style.animation = "fade-out 1s ease-out";

    setTimeout(() => {
      clicklightning.style.display = "none";
      clicktitle.style.display = "flex";
      clicktitle.style.animation = "fade-in 1s ease-in, scale 4s ease-out";
    }, 1004)
 }
}


start()
