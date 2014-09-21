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