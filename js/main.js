$(document).ready(function(){

    $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll > 1){
        $(".navbar").addClass("sticky-on");
    }else{
        $(".navbar").removeClass("sticky-on");
    }
    })
    $(".nav-link").click(function(){
        $("#navbarSupportedContent").removeClass('show');
    })
    $(".braselats .like i").click(function(){
        $(this).toggleClass("fa-solid")
    })
});