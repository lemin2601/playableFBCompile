'use strict';

module.exports = {
  load () {
    // execute when package loaded
  },

  unload () {
    // execute when package unloaded
  },

  // register your ipc messages here
  messages: {
    'open-main' () {
      // open entry panel registered in package.json
      Editor.Panel.open('build_playable_ads_fb');
    },
    'build-main' () {
      Editor.log('Hello World!');
      // send ipc message to panel
      Editor.Ipc.sendToPanel('build_playable_ads_fb', 'build_playable_ads_fb:hello');
    },
    'clicked' () {
      Editor.log('Button clicked!');
    }
  },
};