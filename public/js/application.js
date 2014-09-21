// index #buttons
$(function avocadoInsta() {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/tags/avocado/media/recent?client_id=f084959fc2c24ca38cd1083389de62a0",
    success: function(data) {
      // placing the images on the page
      $("#images").empty();
      for (var i = 0; i < 20; i++) {
        $("#images").append("<img src=" + data.data[i].link + "media\/?size=t>");
      };
    }
  });
});

$(function guacInsta() {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/tags/guacamole/media/recent?client_id=f084959fc2c24ca38cd1083389de62a0",
    success: function(data) {
      // placing the images on the page
      $("#images").empty();
      for (var i = 0; i < 20; i++) {
        $("#images").append("<img src=" + data.data[i].link + "media\/?size=t>");
      };
    }
  });
});

$(function eggoInsta() {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/tags/eggocado/media/recent?client_id=f084959fc2c24ca38cd1083389de62a0",
    success: function(data) {
      // placing the images on the page
      $("#images").empty();
      for (var i = 0; i < 20; i++) {
        $("#images").append("<img src=" + data.data[i].link + "media\/?size=t>");
      };
    }
  });
});

$(function pastaInsta() {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/tags/avocadopasta/media/recent?client_id=f084959fc2c24ca38cd1083389de62a0",
    success: function(data) {
      // placing the images on the page
      $("#images").empty();
      for (var i = 0; i < 20; i++) {
        $("#images").append("<img src=" + data.data[i].link + "media\/?size=t>");
      };
    }
  });
});

$(function rollInsta() {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/tags/avocadoroll/media/recent?client_id=f084959fc2c24ca38cd1083389de62a0",
    success: function(data) {
      // placing the images on the page
      $("#images").empty();
      for (var i = 0; i < 20; i++) {
        $("#images").append("<img src=" + data.data[i].link + "media\/?size=t>");
      };
    }
  });
});

// Avocado FAQ
$(function() {    // do once original document loaded and ready
	$.getJSON("avocadoFAQ.json", function(response, diditwork) {
      console.log(diditwork);
      var displayT = "";
      for (var i = 0; i < response.questions.length; i ++) {
              var entry = response.questions[i];
              displayT += "<li>"
                + entry.question + " " 
                + entry.answer + "<\/li>";
              }
      displayT += "<\/ul>";
  $("#faqArea").html(displayT);
  });  // getJSON
}); // onReady

// Avocado Fun Facts
$(function() {    // do once original document loaded and ready
  $.getJSON("avocadoFacts.json", function(response, diditwork) {
      console.log(diditwork);
      var displayT = "";
      for (var i = 0; i < response.facts.length; i ++) {
              var entry = response.facts[i];
              displayT += "<li>"
                + entry.title + " " 
                + entry.fact + "<\/li>";
              }
      displayT += "<\/ul>";
  $("#factsArea").html(displayT);
  });  // getJSON
}); // onReady