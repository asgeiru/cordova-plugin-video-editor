//
//  VideoEditor.js
//
//  Created by Josh Bavari on 01-14-2014
//  Modified by Ross Martin on 01-29-15
//	Modified by Ásgeir Úlfarsson on 04-06-2015
//

var exec = require('cordova/exec'),
    pluginName = 'VideoEditor';

function VideoEditor() {
}

VideoEditor.prototype.transcodeVideo = function(success, error, options) {
    exec(success, error, pluginName, 'transcodeVideo', [options]);
};

VideoEditor.prototype.createThumbnail = function(success, error, options) {
    exec(success, error, pluginName, 'createThumbnail', [options]);
};

//module.exports = new VideoEditor();
VideoEditor.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.videoEditor = new VideoEditor();
  return window.plugins.videoEditor;
};

cordova.addConstructor(VideoEditor.install);