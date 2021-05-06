let options = {
    root: null,
    threshold: 0.25,
  };

function intersectionHandler(entries, observer) {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add("active");
    console.log(`slide-${entry.target.dataset.index}`);
    document.querySelector(
        ".circle"
    ).className = `circle slide-${entry.target.dataset.index}`;
    } else {
    entry.target.classList.remove("active");
    }
});
}

let observer = new IntersectionObserver(intersectionHandler, options);

let images = document.querySelectorAll("img");

images.forEach((image) => {
    observer.observe(image);
  });