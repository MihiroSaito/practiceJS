var imageList = [
  "assets/cave.jpg",
  "assets/GrandCanyon2.jpg",
  "assets/lake.jpg",
  "assets/lake2.jpg",
  "assets/rock.jpg",
  "assets/rock2.jpg",
  "assets/rock3.jpg",
  "assets/tree.jpg",
  "assets/waterfall.jpg",
  "assets/waterfall2.jpg"
]

for(var i = 0; i < imageList.length; i++) {

  var slide = document.createElement("li");

  slide.innerHTML = "<img src='"+ imageList[i] + "'>";

  document.getElementsByClassName("images")[0].appendChild(slide);

  var point = document.createElement("li");

  point.setAttribute("data-point-index", i)

  document.getElementsByClassName("points")[0].appendChild(point);
}

var image = document.getElementsByClassName("images")[0].getElementsByTagName("li");

var point = document.getElementsByClassName("points")[0].getElementsByTagName("li");

var nowIndex = 0;

image[nowIndex].classList.add("show");

point[nowIndex].classList.add("current");
