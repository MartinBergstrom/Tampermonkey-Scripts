// ==UserScript==
// @name         GmailPrettify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  gmail v2
// @author       You
// @match        https://mail.google.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var hangOutLoginIdentifier = '#talk_roster';
var hangOutButtonsBar = '.no .nM .n6 span.CJ';
var notifClock = 'div.gb_Pf.gb_Og div.gb_Hc.gb_Og.gb_R div.gb_Pc.gb_bd.gb_R.gb_Qc div.gb_Sc';
var dragElementDiv = 'div.ajl.aib.aZ6.aji';

$(document).ready(function() {
    hideShit();
    animateDragBar();
    replaceHangoutButtons();
    addSideNavOverlay();
});

function hideShit() {
    $(hangOutLoginIdentifier).hide();
    $(hangOutButtonsBar).click();
    $(notifClock).hide();
}

function animateDragBar() {
     $(dragElementDiv).animate({
         height:'800px'
     }, 2500);
}

function showHiddenShit() {
    $(hangOutLoginIdentifier).show();
    $(hangOutButtonsBar).click();
    $(notifClock).show();
}

function replaceHangoutButtons() {
    var selector = '.J-KU-Jg.J-KU-Jg-Zc.aj5';
    $(selector).empty();
    $(selector).html("<button class='settingsButton'>Settings</button>");
    $('.settingsButton').css({
        'background-color': '#d14836',
        'color' : 'white',
        'padding': '5px 10px',
        'font-size': '14px'
    });

    $('.settingsButton').click(function() {
        $("#mySidenav").css("width","260px");
    });
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
    'background-color': '#d14836',
    'overflow-x': 'hidden',
    'padding-top': '90px',
    'transition': '0.5s'
    });

    $('.sidenav a, button.textBtn').css({
    'padding': '8px 8px 8px 32px',
    'text-decoration': 'none',
    'font-size': '22px',
    'color': '#eae8e8',
    'display': 'block',
    'transition': '0.3s'
    });

    $('.sidenav a:hover').css({
    'color': '#f1f1f1'
    });

    $('.sidenav button.textBtn').css({
    'background': 'none',
    'border': 'none',
    'font-size': '20px'
    });

    $('.sidenav button.textBtn#toggleHideBtn').css({
    'color': '#eae8e8'
    });

    $('.sidenav .closebtn').css({
    'position': 'absolute',
    'top': '0',
    'cursor': 'pointer',
    'right': '25px',
    'font-size': '36px',
    'margin-left': '50px'
    });

    $('.sidenav .closebtn').click(function() {
       $("#mySidenav").css("width","0px");
    });

    $('.sidenav button.textBtn#toggleHideBtn').click(function() {
        if($(notifClock).is(":visible")) {
            hideShit();
            $('.sidenav button.textBtn#toggleHideBtn').text('Show elements');
        } else {
            showHiddenShit();
            $('.sidenav button.textBtn#toggleHideBtn').text('Hide elements');
        }
    });
}

var htmlForSideNav = `
<div id="mySidenav" class="sidenav">
<span class="closebtn">&times;</span>
<button class="textBtn" id="toggleHideBtn">Show elements</button>
</div>`;