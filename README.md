# cujo.js Quickstart

This is a starter kit for building [cujo.js](http://cujojs.com) apps.

## How to get started

1. `git clone https://github.com/cujojs/quickstart.git <project-name>`
1. `cd <project-name>`
1. `npm install`
1. `npm start`
1. Open http://localhost:8000/ in your browser
1. Open your editor and start coding

## Using the built-in server with another port

The included server, [serv](https://github.com/scothis/serv) is set to port 
8000 by default.  You can change it to 1337, for instance, with the following
steps:

1. Open "package.json".
1. Find the section "scripts".
1. Change the "start" item to use port 1337.
	1. It should look like this: `"start": "serv --port 1337"`.

[serv](https://github.com/scothis/serv) has other options, as well.
