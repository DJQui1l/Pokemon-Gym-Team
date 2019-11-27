function start() {
  let clickdari = document.getElementById('darian-logo');
  let clicknadi = document.getElementById('nadira-logo');
  let clicktiff = document.getElementById('tiffany-logo');
  let clicksteph = document.getElementById('steph-logo');
  let clickgrid = document.getElementById('title-grid');


  clickdari.addEventListener("click", function() {

    clickdari.style.animation = "fade-out 1s ease-out";

    setTimeout(() => {
      clickdari.style.display = "none";
      clicktitle.style.display = "flex";
      clicktitle.style.animation = "fade-in 1s ease-in, scale 4s ease-out";
    }, 1004)
 }
)}


start()
