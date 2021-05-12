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
