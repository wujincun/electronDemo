/**
 * Created by Administrator on 2017/4/1.
 */
'use strict';
const {ipcRenderer,} = require('electron');
var soundButtons = document.querySelectorAll('.button-sound');
var closeEl = document.querySelector('.close');

for (var i = 0; i < soundButtons.length; i++) {
    var soundButton = soundButtons[i];
    var soundName = soundButton.attributes['data-sound'].value;

    prepareButton(soundButton, soundName);
}

closeEl.addEventListener('click', function () {
    ipcRenderer.send('close-main-window');
 });
ipcRenderer.on('global-shortcut', function (events,arg) {
    var event = new MouseEvent('click');
    soundButtons[arg].dispatchEvent(event);
});

function prepareButton(buttonEl, soundName) {
    buttonEl.querySelector('span').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

    var audio = new Audio(__dirname + '/wav/' + soundName + '.wav');
    buttonEl.addEventListener('click', function () {
        audio.currentTime = 0;
        audio.play();
    });
}