$(document).ready(function(){
    $(".loader").fadeOut(4000);
});

//side bar 

function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function closesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// count timing start
$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});
// count timing end