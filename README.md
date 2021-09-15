Erdapfel lite
=============

An experiment to lighten Erdapfel (Qwant Maps Front-end) and ease its installation and build

Current progress:

- use node >= 12.18 
- open a terminal (powershell or cygwin on windows)
- yarn add --dev parcel
- npm install --save-dev parcel
- create src/index.html, src/style.css, src/style.js
- yarn parcel src/index.html
- visit localhost:1234
- add license, classnames, mapbox-gl, svgr, react, react-dom, transformer-yaml to package.json
- npm install
- use scss/jsx instead of css/js
- render a map
- create .gitignore file
- create Github repo
- npm install -D parcel-plugin-ejs-template
- create a ejs.config.js file and a .parcelrc file to handle .ejs code
- rename index index.ejs
- reference local vars from .ejsrc inside index.ejs


To do:

- introduce Erdapfel's components and features in this project 
- qwant-ponents

Get back to the project after a while:

- yarn parcel src/index.ejs
- visit localhost:1234