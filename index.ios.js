/**
 * @providesModule RCTBrowser
 * @flow
 */
'use strict';

import React from 'react';
import { NativeModules } from 'react-native';
var Browser = NativeModules.Browser;

var RCTBrowserExport = {
  open: function(url, options={}) {
    Browser.presentUrl(url, options, function(err) {
      if (options.modalCompletionHandler) {
        options.modalCompletionHandler();
      }
    });
  },
};

module.exports = RCTBrowserExport;
