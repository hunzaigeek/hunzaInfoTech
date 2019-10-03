console.log("hellow");
$(document).ready(function() {
    $('#abi').hover(function(){
        console.log("hovered");
    });

    $('#abi').click(function(){
        console.log('asdf');
    })
})

$(document).ready(function() { 
    $(".default_small_heading").hover(function() { 
        // $(this).css("background-color", "green"); 
        console.log("A");
    }, function() { 
        // $(this).css("background-color", "yellow"); 
        console.log('B');
    }); 
}); 