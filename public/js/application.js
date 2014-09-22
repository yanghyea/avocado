$(function() {   // do once original document loaded and ready
  avocadoInsta();
  // want to call this function once doc loads so that the index page will show images when it first loads 
  // before one presses any buttons
});

// index Instagram photo #buttons
function avocadoInsta() {
  // Grabs 20 most recent pictures that are tagged with #avocado from Instagram
  try {
    $.ajax({
      type: "GET",
      url: "https://api.instagram.com/v1/tags/avocado/media/recent?client_id=f084959fc2c24ca38cd1083389de62a0&callback=displayPics",
      jsonp: false,
      dataType: "jsonp",
      crossDomain: true
    });
    return false;
  } catch (error) {console.log(error.description);}
}

function guacInsta() {
  // Grabs 20 most recent pictures that are tagged with #guacamole from Instagram
  try {
    $.ajax({
      type: "GET",
      url: "https://api.instagram.com/v1/tags/guacamole/media/recent?client_id=f084959fc2c24ca38cd1083389de62a0&callback=displayPics",
      jsonp: false,
      dataType: "jsonp",
      crossDomain: true
    });
    return false;
  } catch (error) {console.log(error.description);}
}

function eggoInsta() {
  // Grabs 20 most recent pictures that are tagged with #eggocado from Instagram
  try {
    $.ajax({
      type: "GET",
      url: "https://api.instagram.com/v1/tags/eggocado/media/recent?client_id=f084959fc2c24ca38cd1083389de62a0&callback=displayPics",
      jsonp: false,
      dataType: "jsonp",
      crossDomain: true
    });
    return false;
  } catch (error) {console.log(error.description);}
}

function pastaInsta() {
  // Grabs 20 most recent pictures that are tagged with #avocadopasta from Instagram
  try {
    $.ajax({
      type: "GET",
      url: "https://api.instagram.com/v1/tags/avocadopasta/media/recent?client_id=f084959fc2c24ca38cd1083389de62a0&callback=displayPics",
      jsonp: false,
      dataType: "jsonp",
      crossDomain: true
    });
    return false;
  } catch (error) {console.log(error.description);}
}

function rollInsta() {
  // Grabs 20 most recent pictures that are tagged with #avocadoroll from Instagram
  try {
    $.ajax({
      type: "GET",
      url: "https://api.instagram.com/v1/tags/avocadoroll/media/recent?client_id=f084959fc2c24ca38cd1083389de62a0&callback=displayPics",
      jsonp: false,
      dataType: "jsonp",
      crossDomain: true
    });
    return false;
  } catch (error) {console.log(error.description);}
}

// callback function for displaying images
function displayPics(response) {
  var picArray = [];
  for (var i = 0; i < 20; i ++) {
    // parse through response from Ajax request to grab a single image link
    var picString = "<img src=" + response.data[i].link + "media\/?size=t>";
    picArray += picString;
  }
  // set the images div with new picArray created from Ajax request
  $("#images").html(picArray);
}

// get Avocado FAQ json
$(function() {    // do once original document loaded and ready
	$.getJSON("avocadoFAQ.json", function(response, diditwork) {
      console.log(diditwork);
      var displayT = "";
      for (var i = 0; i < response.questions.length; i ++) {
              var entry = response.questions[i];
              displayT += "<div id='topic'><h3>"
                + entry.question + "<\/h3><ul><li>" 
                + entry.answer + "<\/li><\/ul>";
              }
  $("#faqArea").html(displayT);
  });  // getJSON
}); // onReady

// get Avocado Fun Facts json
$(function() {    // do once original document loaded and ready
  $.getJSON("avocadoFacts.json", function(response, diditwork) {
      console.log(diditwork);
      var displayT = "";
      for (var i = 0; i < response.facts.length; i ++) {
              var entry = response.facts[i];
              displayT += "<div id='topic'><h3>"
                + entry.title + "<\/h3><ul><li>" 
                + entry.fact + "<\/li><\/ul>";
              }
  $("#factsArea").html(displayT);
  });  // getJSON
}); // onReady