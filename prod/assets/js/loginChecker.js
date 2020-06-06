
/* 
Developer:  N. Schwendimnn;
Date:   25.05.2020

validation of form values for login and entrance to the caluclation private area 
---------------------------------------------------------------------------------
validationForm function checks values by name from signin.html file.
as long as the input fields "email" and "password" are empty an alert will be displayed to force the user to fill up all requested input fields.

If all value areas are no longer empty the function will forward the user to our private "kalulatorPrivate.html" area.
There is the user finally allowed to use our calculation tool.

*/

function validateForm() {
    var x = document.forms["myForm"]["email"]["password"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if (x !== "") {
        setTimeout(function(){document.location.href = "kalkulatorPrivate.html"},500);
    }
  }
