var boxopened = "";
var imgopened = "";
var found =  0;

function randomize(first, last){
    return Math.floor(Math.random() * (last - first + 1) + first);
}

function shuffle() {
    var children = $("#grid").children();
    var child = $("#grid div:first-child");

    var array_img = new Array();

    for (i=0; i<children.length; i++) {
        array_img[i] = $("#"+child.attr("id")+" img").attr("src");
        child = child.next();
    }

    var child = $("#grid div:first-child");

    for (z=0; z<children.length; z++) {
        randIndex = randomize(0, array_img.length - 1);

        // set new image
        $("#"+child.attr("id")+" img").attr("src", array_img[randIndex]);
        array_img.splice(randIndex, 1);

        child = child.next();
    }
}

function resetGame() {
    shuffle();
	var solved_div = document.getElementById('solved_game');
	solved_div.style.visibility = 'hidden';
    $("img").hide();
    $("img").removeClass("opacity");
    boxopened = "";
    imgopened = "";
    found = 0;
    return false;
}

$(document).ready(function() {
    $("img").hide();
    $("#grid div").click(openCard);

    shuffle();

    function openCard() {

        id = $(this).attr("id");

        if ($("#"+id+" img").is(":hidden")) {
            $("#grid div").unbind("click", openCard);

            $("#"+id+" img").fadeIn('fast');

            if (imgopened == "") {
                boxopened = id;
                imgopened = $("#"+id+" img").attr("src");
                setTimeout(function() {
                    $("#grid div").bind("click", openCard)
                }, 300);
            } else {
                currentopened = $("#"+id+" img").attr("src");
                if (imgopened != currentopened) {
                    // close again
                    setTimeout(function() {
                        $("#"+id+" img").fadeOut('fast');
                        $("#"+boxopened+" img").fadeOut('fast');
                        boxopened = "";
                        imgopened = "";
                    }, 400);
                } else {
                    // found
                    $("#"+id+" img").addClass("opacity");
                    $("#"+boxopened+" img").addClass("opacity");
                    found++;
                    boxopened = "";
                    imgopened = "";
                }
                
                setTimeout(function() {
                    $("#grid div").bind("click", openCard)
                }, 400);
            }
			
            if (found == 8) {
				var solved_div = document.getElementById('solved_game');
				solved_div.style.visibility = 'visible';
            }
        }
    }
});