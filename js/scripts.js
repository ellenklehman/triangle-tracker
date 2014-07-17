$(document).ready(function () {
 $("form#tracked-triangle").submit(function (event) {
  event.preventDefault();
  var sideUno = parseInt($("input#side-one").val());
  var sideDos = parseInt($("input#side-two").val());
  var sideTres = parseInt($("input#side-three").val());
  $("input.form-group").val('');
  var triangle = {
    side1: sideUno,
    side2: sideDos,
    side3: sideTres,
    triangleType: function() {
      if ((this.side1 + this.side2 <= this.side3) ||
          (this.side2 + this.side3 <= this.side1) ||
          (this.side1 + this.side3 <= this.side2))
      {
          var result = "stuff";
          return result;
      }
      else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
          var result = "equilateral";
          return result;
      }
      else if ((this.side1 === this.side2) ||
              (this.side1 === this.side3) ||
              (this.side2 === this.side3)) {
          var result = "isosceles";
          return result;
      }
      else {
          var result = "scalene";
          return result;
      }
    }
  };
 if(triangle.triangleType()==="equilateral") {
   return $("ul#equilateral").append("<li>"+
                                          triangle.side1+" " +
                                          triangle.side2+" " +
                                          triangle.side3+" " +
                                          "</li>");
} else if (triangle.triangleType()==="isosceles") {
   return $("ul#isosceles").append("<li>"+
                                          triangle.side1+" " +
                                          triangle.side2+" " +
                                          triangle.side3+" " +
                                          "</li>");
} else if(triangle.triangleType()==="scalene") {
   return $("ul#scalene").append("<li>"+
                                          triangle.side1+" " +
                                          triangle.side2+" " +
                                          triangle.side3+" " +
                                          "</li>");
} else if(triangle.triangleType()==="stuff") {
   return alert("This is no triangle!");
}
 });
});

