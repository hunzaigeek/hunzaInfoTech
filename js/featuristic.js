console.log("hellow");
// $(document).ready(function() {
//     $('#abi').hover(function(){
//         console.log("hovered");
//     });

//     $('#abi').click(function(){
//         console.log('asdf');
//     })
// })

$(document).ready(function() { 
        $('.team_detail_inner').click(function(){
            console.log("Log");
            var url = './hunzaInfoTech/templates/details.html';
      // $('#abidModal').modal();
            console.log("Log1");
            $('.thisResult').load(url, function() {
                
                $('#abidModal').modal();
                alert("loaded");
            });
    });
    // $("#abi").hover(function() { 
    //     // $(this).css("background-color", "green"); 
    //     console.log("A checkoed");
    // }, function() { 
    //     // $(this).css("background-color", "yellow"); 
    //     console.log('B');
    // }); 
}); 