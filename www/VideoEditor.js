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
	console.log('reciving transcore request');
	/*console.log(success);
	console.log(error);
	console.log(options);*/
	try {
		exec(success, error, pluginName, 'transcodeVideo', [options]);
	}
	catch(err){
		console.log('error: '+err)
	}
	/*console.log('after transcode request');*/
};

VideoEditor.prototype.createThumbnail = function(success, error, options) {
    exec(success, error, pluginName, 'createThumbnail', [options]);
};

module.exports = new VideoEditor();
