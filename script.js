function calculate() {
  var course = document.getElementById("course").value;
  console.log(course);
  switch (course) {
    case "Child Minding":
      document.getElementById("courseId").innerHTML = course;
      document.getElementById("courseAmount").innerHTML = "R 750";
      break;
    case "Cooking":
      document.getElementById("courseId").innerHTML = course;
      document.getElementById("courseAmount").innerHTML = "R 750";
      break;
    case "Garden Maintenance":
      document.getElementById("courseId").innerHTML = course;
      document.getElementById("courseAmount").innerHTML = "R 750";
      break;

      case "First Aid":
        document.getElementById("courseId").innerHTML = course;
        document.getElementById("courseAmount").innerHTML = "R 1500";
        break;
     case "Sewing":
      document.getElementById("courseId").innerHTML = course;
      document.getElementById("courseAmount").innerHTML = "R 1500";
      break;
     case "Landscaping":
      document.getElementById("courseId").innerHTML = course;
      document.getElementById("courseAmount").innerHTML = "R 1500";
      break;
     case "Life Skills":
      document.getElementById("courseId").innerHTML = course;
      document.getElementById("courseAmount").innerHTML = "R 1500";
      break;
  }
}
