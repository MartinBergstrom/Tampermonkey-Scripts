// ==UserScript==
// @name         Chrome Tabber Extreme Edition
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  tab like crazy my dude
// @author       MonsterMartin
// @match        https://www.google.se/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var index = 0;
var maxIndex = 0;
var results;

$(document).ready(function() {
    index = 0;
    results = $('#ires .g h3 a').toArray();
    maxIndex = results.length -1;
    $(results[0]).focus();
});

$(document).keydown(function(e) {
    console.log('index is' + index);
    var code = e.keyCode || e.which;
    if ((e.shiftKey && code === 9) || code === 38) {
        e.preventDefault();
        tabPressBackward();
    } else if (code === 9 || code === 40) {
        e.preventDefault();
        tabPressForward();
    }
});

function tabPressForward() {
   if(index < maxIndex) {
       index ++;
       $(results[index]).focus();
   }
}

function tabPressBackward() {
    if(index > 0) {
        index --;
        $(results[index]).focus();
    }
}
