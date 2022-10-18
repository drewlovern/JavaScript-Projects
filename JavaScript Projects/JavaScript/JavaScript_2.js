function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("All feilds must be filled out");
      return false;
    }
  }