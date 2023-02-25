# Text Editor as a Progressive Web App
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This app is a simple in-broswer text editor, bundled using Webpack and a number of other plugins to make it a 'PWA'. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Comments/Flaws](#commentsflaws)
- [License](#license)

## Installation

Root/server packages: 'express', 'if-env' and 'concurrently' (dev) for running scripts.  
Client packages: 'idb' (IndexedDB) and 'root-mirror-themes'  
Client _dev_ packages (many): '@babel + /core, /plugin-transofrm-runtime, /preset-env, /runtime', 'babel-loader', 'css-loader', 'html-webpack-plugin', 'http-server', 'style-loader', 'webpack' and 'webpack + -cli, -dev-server, -pwa-manifest' and 'workbox-webpack-plugin'

## Usage

If in dev mode, a simple 'npm (run) start' will execute the app. Otherwise you can simply go to the livesite URL. Once the app begins, you will see a simple text editor that you can make additions/deletions to. Local storage will take a snapshot of the current data upon every change, and IndexedDB will then save upon either reloading or simply just navigating to another tab/app (going out of focus). It functions similarly to notepad, however there is an element of coding acknowledgement, as some coding keywords are rendered if different colors. At the top there is an option to install this onto your local machine, and when confirmed, you'll see a shortcut appear on your desktop called 'My Text Editor'. It works offline exactly the same way as it works at its online URL. 

Screenshot(s):

Link to Heroku app: https://desolate-everglades-93424.herokuapp.com/  

## Credits

Shout out to the practice exercises which laid a good groundwork for a very configuration-heavy project.

## Comments/Flaws

The problem with this is one of the highest order. The IndexedDB implementation isn't quite right, so the data persistence is completely nonfunctional at the moment. ALl of the configuration, bundling, plugins, manifest, etc. seem to work fine, but as it currently stands, there is effectively no UI.

## License

Covered under the MIT license.
