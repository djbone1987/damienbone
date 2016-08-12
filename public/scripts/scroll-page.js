$(function() {
    $.scrollify({
        section : ".page",
    });
});

$("#about-btn").click(function(){
    $.scrollify.move("#about");
});

$("#projects-btn").click(function(){
    $.scrollify.move("#projects");
});

$("#contact-btn").click(function(){
    $.scrollify.move("#contact");
});