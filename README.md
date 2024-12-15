# Web Extension Boiler Plate

This repository is a boiler plate for a web extension, which includes testing, and other features already implemented.

## Services Implemented

-   [x] Boilerplate for a web extension

## How to get started

On this guide you can get to know how can you adapt this template to your own project.

Check the docummentation to know how to set it up correctly
https://developer.chrome.com/docs/extensions/mv3/manifest/

### Manifest JSON

Go to `manifest.json` and change the following:

-   `name`: To your extension name
-   `version`: To your extension version
-   `description`: To your extension description
-   `author`: To your name/company name

### Content.js

This file gets injected automatically when the page is loaded, so here we can do some pre-work automatizations and add all the incomming message events.
From this file we can work with the target page DOM.

### Service Worker.js

This file works on the background, we can do some useful stuffs here, inject code to the target website, etc.

### Pop-Up.js

This file works on the extension context, from here we can work with the extension interface DOM.
We can handle communication events, and this can work as the "server" on all the communications with all the contexts.

### Pop-Up.html

This is the interface of the extension, it activates when the extension icon is clicked, we can import other files like popup.js or other scripts and styles from here.
# Web-extension
