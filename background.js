// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// chrome.webNavigation.onDOMContentLoaded.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     code: 'hide-merge-commits.js'
//   });
// });

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    file: 'hide-merge-commits.js'
  });
});
