var boxopened = "";
var imgopened = "";
var found =  0;

// function that randomly chooses a number within the size of the array
function randomize(first, last){
    return Math.floor(Math.random() * (last - first + 1) + first);
}

function shuffle() {
    var children = $("#grid").children();
    var child = $("#grid div:first-child"); 

    var array_img = new Array();

    // go through every cell of the grid and give the 'img' id to the cells
    for (i=0; i<children.length; i++) {
        array_img[i] = $("#"+child.attr("id")+" img").attr("src");
        child = child.next();
    }

    var child = $("#grid div:first-child");

    // attribute a random index to each cell of the grid which corresponds to the image id
    for (z=0; z<children.length; z++) {
        randIndex = randomize(0, array_img.length - 1);

        // set new image
        $("#"+child.attr("id")+" img").attr("src", array_img[randIndex]);
        array_img.splice(randIndex, 1);

        child = child.next();
    }
}

// resets all global variables, shuffles the game board and 
// hides images 
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
    // hides all images in the beginnign of the game and
    // opens cards on click 
    $("img").hide();
    $("#grid div").click(openCard);

    shuffle();

    function openCard() {

        id = $(this).attr("id");
        // all images are hidden initially, 
        // if they want to be opened, fade in the image
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
                    // close opened cards if they don't match (fade out)
                    setTimeout(function() {
                        $("#"+id+" img").fadeOut('fast');
                        $("#"+boxopened+" img").fadeOut('fast');
                        boxopened = "";
                        imgopened = "";
                    }, 400);
                } else {
                    // keep cards opened if they match (take out opacity)
                    $("#"+id+" img").addClass("opacity");
                    $("#"+boxopened+" img").addClass("opacity");
                    // increase the found counter by 1
                    found++;
                    boxopened = "";
                    imgopened = "";
                }
                
                setTimeout(function() {
                    $("#grid div").bind("click", openCard)
                }, 400);
            }
			// if all cards are found, display the congratulations message
            // by making the solved div visible
            if (found == 8) {
				var solved_div = document.getElementById('solved_game');
				solved_div.style.visibility = 'visible';
            }
        }
    }
});