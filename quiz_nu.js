var stu=[]
var namesEntered = false;
function callFunction() {
    // Get the input value
    var inputValue = document.getElementById('inputValue').value;
    var c=parseInt(inputValue)

    // Call your function with the input value
    
    if (!namesEntered) {
        // Call your function with the input value
        names(c);
        namesEntered = true;  // Set the flag to true after entering names once
      } else {
        // Display a message indicating that names have already been entered
        document.getElementById('result').innerHTML = "Names have already been entered.";
      }
    
  }


function names(c){
    
    for (var i=1;i<c+1;i++){
        var b=window.prompt("Enter the name of student"+i)
        stu.push(b)

    }}
    function displayRandomName() {
        if (stu.length === 0) {
          // Display a message if names haven't been entered yet
          document.getElementById('result').innerHTML = "Please enter names first.";
        } else {
          var nu = Math.floor(Math.random() * stu.length);
          // Display the selected random name
          document.getElementById('result').innerHTML = "Randomly selected name is " + stu[nu];
        }
      }


