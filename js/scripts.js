$(document).ready(function () {
 $("form#tracked-triangle").submit(function (event) {
  event.preventDefault();
  var sideUno = parseInt($("input#side-one").val());
  var sideDos = parseInt($("input#side-two").val());
  var sideTres = parseInt($("input#side-three").val());
  var triangle = {side1: sideUno,
                  side2: sideDos,
                  side3: sideTres,
                  calculation: function() {
                    if ((this.side1 + this.side2 <= this.side3) ||
                        (this.side2 + this.side3 <= this.side1) ||
                        (this.side1 + this.side3 <= this.side2) ||
                        isNaN(this.side1) ||
                        isNaN(this.side2) ||
                        isNaN(this.side3))
                    {
                        return alert("this is not a valid triangle");
                    }
                    else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
                      return $("ul#equilateral").append("<li>"+
                                                        this.side1+" " +
                                                        this.side2+" " +
                                                        this.side3+" " +
                                                        "</li>");
                    }
                    else if ((this.side1 === this.side2) ||
                            (this.side1 === this.side3) ||
                            (this.side2 === this.side3)) {
                      return $("ul#isosceles").append("<li>"+
                                                        this.side1+" " +
                                                        this.side2+" " +
                                                        this.side3+" " +
                                                        "</li>");
                    }
                    else {
                      return $("ul#scalene").append("<li>"+
                                                        this.side1+" " +
                                                        this.side2+" " +
                                                        this.side3+" " +
                                                        "</li>");
                    }
                  }
                  };
 triangle.calculation();
 });
});
