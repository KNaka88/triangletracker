$(document).ready(function(){

//// Back End Program
  //Triangle Check
  var triangleCheck = function(sideA, sideB, sideC){
      if(notTriangleCheck(sideA, sideB, sideC)){
        alert("Not a Triangle")
      }else if(equilateralCheck(sideA, sideB, sideC)){
        alert("Equilateral");
      }else if(isoscelesCheck(sideA, sideB, sideC)){
        alert("Isosceles");
      }else{
        alert("Scalene");
      };
    };

  //Not Triangle Func
  var notTriangleCheck = function(sideA, sideB, sideC){
    if( (sideA+sideB) <= sideC || (sideA+sideC) <= sideB || (sideB+sideC) <= sideA){
      return true;
    };
  };

  //Equilateral Check Func
  var equilateralCheck = function(sideA, sideB, sideC){
    if( sideA === sideB && sideA === sideC && (sideA+sideB) > sideC){
      return true;
    };
  };

  //Isosceles Check Func
  var isoscelesCheck = function(sideA, sideB, sideC){
    if(sideA===sideB  ||  sideA===sideC || sideB===sideC && (sideA+sideB) > sideC){
      return true;
    };
  };


////Front End Program
  var sideA = parseFloat(prompt("Please type the length of A"));
  var sideB = parseFloat(prompt("Please type the length of B"));
  var sideC = parseFloat(prompt("Please type the length of C"));

  triangleCheck(sideA, sideB, sideC);
});
