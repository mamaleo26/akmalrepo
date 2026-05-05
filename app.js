$(document).ready(function(){

    function loadPage(page){
        $("#content").hide().load(page, function(){
            $("#content").fadeIn(300);
        });
    }

    // Default
    loadPage("home.html");

    $("#homeBtn").click(() => loadPage("home.html"));
    $("#aboutBtn").click(() => loadPage("about.html"));
    $("#contactBtn").click(() => loadPage("contact.html"));

});