/* 
  Code from intersection observer.

  Threshold is 0.25 to trigger the intersection.
*/

let options = {
    root: null,
    threshold: 0.25,
  };

/* 
  intersectionHandler adds active when entry
  is intersecting and removes it when entry
  stops intersecting
*/

  function intersectionHandler(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            console.log(entry.target.dataset.pitch)
            if (entry.target.dataset.pitch) {
              const purge = ["one", "two", "three", "four", "five"]; // define all the pitch classes
              document.querySelector("svg").classList.remove(...purge); // remove all the pitch classes
              document.querySelector("svg").classList.add(entry.target.dataset.pitch); // add only the current pitch
            }
        } else {
            entry.target.classList.remove("active");
        }
    });
}

/* 
  intersectionHandler adds active when entry
  is intersecting and removes it when entry
  stops intersecting
*/

let observer = new IntersectionObserver(intersectionHandler, options);

let blobs = document.querySelectorAll(".blob");

blobs.forEach((blob) => {
  observer.observe(blob);
});

