var xPos;
var yPos;
var pageWidth;
var firstThird;
var secondThird;

$(document).ready(function(){

    $("#grid-space").on("mousemove" , function(event){
        xPos = event.pageX;
        yPos = event.pageY;
        pageWidth =$(window).width();
        firstThird = pageWidth / 3;
        secondThird = (pageWidth / 3) * 2;

        if(xPos <= firstThird){
            $(".speaker1").css("top", yPos - 370)
            $(".speaker1").css("left", xPos - 60)
        }

        else{
            $(".speaker1").css("top", "0")
            $(".speaker1").css("left", "0")
        }

        if (xPos > firstThird && xPos < secondThird){
            $(".speaker2").css("top", yPos - 370)
            $(".speaker2").css("left", xPos - 560)
        }

        else{
            $(".speaker2").css("top", "0")
            $(".speaker2").css("left", "0")
        }

        if (xPos > secondThird && xPos < pageWidth){
            $(".speaker3").css("top", yPos - 363)
            $(".speaker3").css("left", xPos - 1060)
        }

        else{
            $(".speaker3").css("top", "0")
            $(".speaker3").css("left", "0")
        }
        // console.log("horizontal position: " + xPos)
        // console.log("vertical position: " + yPos)

        // $("#speaker1").css("left", xPos)
        // $("#speaker1").css("top", yPos)
        // $("#speaker1").css("margin", "-25px")
        // $("#speaker1").css("margin-top", "-12%")

        // $(".speaker1").css("left", xPos)
    })
})
