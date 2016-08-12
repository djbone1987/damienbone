$(function() {
    $.scrollify({
        section : ".page",
    });
});

$("#home-btn").click(function(){
    $.scrollify.move("#home");
});

$("#about-btn").click(function(){
    $.scrollify.move("#about");
});

$("#skills-btn").click(function(){
    $.scrollify.move("#skills");
});

$("#portfolio-btn").click(function(){
    $.scrollify.move("#portfolio");
});

$("#contact-btn").click(function(){
    $.scrollify.move("#contact");
});