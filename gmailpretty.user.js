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

    appendToggleMenu();
    //moveIntoNewParentDiv();
    addSideNavOverlay();
});

function replaceHangoutButtons() {
    var selector = '.J-KU-Jg.J-KU-Jg-Zc.aj5';
    $(selector).empty();
    $(selector).html("<button class='settingsButton'>Settings</button>");
    $('.settingsButton').css({
        'background-color': '#4cc4bc',
        'padding': '5px 10px',
        'font-size': '16px'
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

function moveIntoNewParentDiv() {
    //$('.aAX').append('<div id="newDiv"></div>');
    //while( $('.aAX').childNodes.length > 0) {
    //    $('.newDiv').appendChild($('.aAX').childNodes[0]);
    //}
    //$('.aAU').wrapAll('<div id="newDiv"></div>');
    //var div = document.createElement("div");
    //div.id = "wrap";
    //$('.aAU').wrapAll('<div id="newDiv"></div>');
    // Move the body's children into this wrapper
    //while (document.body.firstChild)
    //{
     //   div.appendChild(document.body.firstChild);
    //}

    // Append the wrapper to the body
    //document.body.appendChild(div);
}


/* Set the width of the side navigation to 250px */
function openNav() {
    $("mySidenav").css("style.width","250px");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    $("mySidenav").css("style.width","0px");
}

function addSideNavOverlay() {
    $('.aAX').append(htmlForSideNav);

    $('.sidenav').css({
    'height': '100%',
    'width': '0',
    'position': 'fixed',
    'z-index': '1',
    'top': '0',
    'left': '0',
    'background-color': '#111',
    'overflow-x': 'hidden',
    'padding-top': '60px',
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
    'right': '25px',
    'font-size': '36px',
    'margin-left': '50px'
    });
}

var htmlForSideNav = `
<div id="mySidenav" class="sidenav">
<a href="javascript:void(0)" class="closebtn"
onclick="closeNav()">&times;</a>
<a href="#">About</a>
<a href="#">Services</a>
<a href="#">Clients</a>
<a href="#">Contact</a> </div>
<span onclick="openNav()">open</span>`;

