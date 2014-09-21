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