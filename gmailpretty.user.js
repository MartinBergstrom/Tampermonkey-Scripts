// ==UserScript==
// @name         GmailPrettify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mail.google.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==


$(document).ready(function() {
    $('.no #talk_roster').hide();
    replaceHangoutButtons();
    $('.no .nM .n6 span.CJ').click();

    //appendToggleMenu();
    //moveIntoNewParentDiv();
    addSideNavOverlay();
});

function replaceHangoutButtons() {
    var selector = '.J-KU-Jg.J-KU-Jg-Zc.aj5';
    $(selector).empty();
    $(selector).html("<button class='settingsButton'>Settings</button>");
    $('.settingsButton').css({
        'background-color': '#008CBA',
        'color' : 'white',
        'padding': '5px 10px',
        'font-size': '14px'
    });

    $('.settingsButton').click(function() {
        /*Set the width of the side navigation to 250px */
        $("#mySidenav").css("width","250px");
    });

    $('#mySidenav .closebn').click(function() {
        /* Set the width of the side navigation to 0 */
        $("#mySidenav").css("width","0px");
        alert('hello');
    });
}

function appendToggleMenu() {
    $('body').append(
        $('<div>', { id: 'settingsToggleBar' }).append(
            $('<div>', { id: 'panelToggleHandle', text: 'Customize look' }).click(function() {
                var panel = $('#settingsToggleBar');

                if(panel.hasClass('expanded')) {
                    panel.animate({'right':'-200px'}, 200);
                    panel.removeClass('expanded');
                } else {
                    panel.animate({'right':0}, 200);
                    panel.addClass('expanded');
                }
            })
        )
    );
}

function addSideNavOverlay() {
    $('.aAX').append(htmlForSideNav);

    $('.sidenav').css({
    'height': '100%',
    'width': '0',
    'position': 'fixed',
    'z-index': '5',
    'top': '0',
    'left': '0',
    'background-color': '#ccff33',
    'overflow-x': 'hidden',
    'padding-top': '90px',
    'transition': '0.5s'
    });

    $('.sidenav a').css({
    'padding': '8px 8px 8px 32px',
    'text-decoration': 'none',
    'font-size': '25px',
    'color': '#818181',
    'display': 'block',
    'transition': '0.3s'
    });

    $('.sidenav a:hover').css({
    'color': '#f1f1f1'
    });

    $('.sidenav .closebtn').css({
    'position': 'absolute',
    'top': '0',
    'cursor': 'pointer',
    'right': '25px',
    'font-size': '36px',
    'margin-left': '50px'
    });
}

var htmlForSideNav = `
<div id="mySidenav" class="sidenav">
<span class="closebtn">&times;</span>
<a href="#">About</a>
<a href="#">Services</a>
<a href="#">Clients</a>
<a href="#">Contact</a> </div>`;
