function start() {
  let clicklightning = document.getElementById('lightning-bolt');
  let clicknadi = document.getElementById('nadira-logo');
  let clicktiff = document.getElementById('tiffany-logo');
  let clicksteph = document.getElementById('steph-logo');
  let clicktitle = document.getElementById('title');
  let clickgrid = document.getElementById('title-grid');
  let collapseableGrid = document.getElementById('collapseable-grid');

  clicklightning.addEventListener("click", function() {

    clicklightning.style.animation = "fade-out 1s ease-out";

    setTimeout(() => {
      clicklightning.style.display = "none";
      clicktitle.style.display = "flex";
      clicktitle.style.animation = "fade-in 1s ease-in, scale 4s ease-out";
    }, 1004)

    setTimeout(() => {
      clicktitle.style.animation = "fade-out 1s ease-in, scale 4s ease-out";
    }, 4000)

    setTimeout(() => {
      clicktitle.style.display = "none";
      clickgrid.style.display = "none";
      clicktitle.remove()
      clickgrid.remove()

      collapseableGrid.style.display = "flex"
      collapseableGrid.style.animation = "fade-in 1s ease-in"
    }, 5000)

  })
   clicknadi.addEventListener('click', function() {
    clicknadi.style.animation = 'fade-out 1s ease-out';

    setTimeout(() => {
       clicknadi.style.display = 'none';
       clicktitle.style.display = 'flex';
       clicktitle.style.animation = 'fade-in 1s ease-in, scale 4s ease-out';
    }, 1004)

    setTimeout(() => {
      clicktitle.style.animation = 'fade-out 1s ease-in, scale 4s ease-out';
    }, 4000)

    setTimeout(() => {
      clicktitle.style.display = 'none';
      clickgrid.style.display = 'none';
      clicktitle.remove()
      clickgrid.remove()

      collapseableGrid.style.display = 'fade-out 1s ease-on, scale 4s ease-out';
    }, 5000)
  })

  clicktiff.addEventListener('click', function() {
    clicktiff.style.animation = 'fade-out 1s ease-out';

    setTimeout(() => {
      clicktiff.style.display = 'none';
      clicktitle.style.display = 'flex';
      clicktitle.style.animation = 'fade-in 1s ease-in, scale 4s ease-out';
    }, 1004)

    setTimeout(() => {
      clicktitle.style.animation = 'fade-out 1s ease-in, scale 4s ease-out';
    }, 4000)

    setTimeout(() => {
      clicktitle.style.display = 'none';
      clickgrid.style.display ='none';
      clicktitle.remove()
       clickgrid.remove()

       collapseableGrid.style.display = 'fade-out 1s ease-on, scale 4s ease-out';
    }, 5000)
  })

  clicksteph.addEventListener('click', function() {
    clicksteph.style.animation = 'fade-out 1s ease-out';

    setTimeout(() => {
      cliclsteph.style.animation = 'fade-out 1s ease-in, scale 4s ease-out';
    }, 4000)

    setTimeout(() => {
      clicktitle.style.display = 'none';
      clickgrid.style.display = 'none';
      clicktitle.remove()
      clickgrid.remove()

      collapseableGrid.style.display = 'fade-out 1s ease-on, scale 4s ease-out'
    }, 5000)
  })
}

start()
