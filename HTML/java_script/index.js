var movies = {
    "DOBARAA": "Great story.MIND bending time traveling concept",
    "Finding Nemo": "Cool animation, and funny turtles.",
    "The Lion King": "Great songs."
  }
  var options = Object.keys(movies).map(function(k) {
    return '<option>' + k + '</option>';
  })