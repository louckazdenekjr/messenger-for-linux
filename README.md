# Messenger for Linux

## based on
JavaScript/Node.JS/Electron

## getting the app
**AppImage builds available under Releases**

![screenshot](https://github.com/louckazdenekjr/messenger-for-linux/blob/master/build/screenshot.png)

## build process
install dependencies:
npm install

run and test the application:
temporarily comment out line "icon: path.join(process.env.APPDIR, "whatsapp.png")," in main.js to run in node.js, then: 
npm start

build the application: 
npm run build-linux

optionally build the application for windows or mac (please don't open issues for these builds):
npm run build-win / npm run build-mac
