$(document).ready(function() {
  
  $('#doit').click(function(event) {
    printFizzBuzz(100);
  });

});

function printFizzBuzz(limit) {
  console.log("Called FizzBuzz");
  var output = "";
  for (i = 1; i <= limit; i++) {
    output += "<p>" + fizzBuzz(i) + "<\p>";
  }
  $('#solution').html(output);
}

function fizzBuzz(i) {
  
  var output = "";

  if (i % 3 == 0) {
    output += "fizz";
  }
  if (i % 5 == 0) {
    output += "buzz";
  }
  if (!output) {
    output += i;
  }
  
  return (output);
}
