 /*	==========================================
        Filter 
    ========================================== */
$(document).ready(function(){
    $(".button").click(function(){
        var value = $(this).attr("data-filter");
        if (value == "all")
        {
            $(".filter").show("200");
        }
        else 
        {
            $(".filter").not("."+value).hide("200");
            $(".filter").filter("."+value).show("200");
        }
    // Add active class on click
    $("ul .button").click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    })
    })
})

/* Filter Search List */
//indexOf() method returns the position of the first occurence of a specified value in a string. 
//returns to original if you remove the input
// > -1, means it will not return a -1 (blank page) 
function filter() {
    var value,
        name,
        profile,
        i;
    value = document.getElementById("searchboxInput").value.toLowerCase();
        profile = document.getElementsByClassName("project");

    for (i=0;i<profile.length;i++){
        name = profile[i].getElementsByClassName("project-name");
        if (name[0].innerHTML.toLowerCase().indexOf(value) > -1) {
            profile[i].style.display = "flex";
        } else {
            profile[i].style.display = "none";
        }
    }
} 
