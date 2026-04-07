var xPos;
var yPos;

$(document).ready(function(){

    $(document).on("mousemove" , function(event){
        yPos = event.pageY;
        xPos = event.pageX;

        console.log("horizontal position: " + xPos)
        console.log("vertical position: " + yPos)

        $("#speaker1").css("left", xPos)
        $("#speaker1").css("top", yPos)
        $("#speaker1").css("margin", "-25px")
        $("#speaker1").css("margin-top", "-12%")

        $(".speaker1").css("left", xPos)
        

    })
})

