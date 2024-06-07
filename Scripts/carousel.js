const ListOfImgs = [
  "/Images/Carousel1.jpg",
  "/Images/Carousel2.jpg",
  "/Images/Carousel3.jpg"
];

function goBack() {
  const img = document.getElementById("carousel-img")
  let url = new URL(img.src)
  if (ListOfImgs.indexOf(url.pathname) != 0) {
    img.src = ListOfImgs[ListOfImgs.indexOf(url.pathname) - 1];
  } else {
    img.src = ListOfImgs[ListOfImgs.length - 1];
  }
}
function goForward() {
  const img = document.getElementById("carousel-img")
  let url = new URL(img.src)
    if (ListOfImgs.indexOf(url.pathname) != ListOfImgs.length - 1) {
      img.src = ListOfImgs[ListOfImgs.indexOf(url.pathname) + 1];
    } else {
      img.src = ListOfImgs[0];
    }
  }
  