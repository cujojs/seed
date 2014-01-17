# cujoJS seed

This is a starter kit for building [cujoJS](http://cujojs.com) apps.

## How to get started

### Fork/clone

1. `git clone https://github.com/cujojs/seed.git <project-name>`
1. `cd <project-name>`
1. `bower install`
1. `npm install`
1. `npm start`
1. Open http://localhost:8000/ in your browser
1. Open your editor and start coding

### Volo

Using volo 0.3

1. `volo create <project-name> cujojs/seed`
1. `cd <project-name>`
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

## I got a 404!

You may see a 404 error for bundle.js.  This is expected and normal during
development.  curl.js comma-separates the data-curl-run attribute.  A file
before the comma (or the only file if there is no comma) is used as the
primary run.js file.  You should think of this file as the "production run.js"
file.  If this file cannot be loaded, curl.js uses the file after the comma,
if any, as a secondary run.js, also known as the "development run.js".

This two-file strategy is useful when serving static content such as we're doing
in this ultra-simple starter project!  If you have the tools to rewrite or
generate index.html, you could inject the run.js file name into data-curl-run:

```
data-curl-run="${runjs_file}"
```

On the other hand, you could keep the HTML intact, but replace the run.js file
when moving files to your QA or production environments.

> *Note*: once you've created bundle.js, you can not use F5/Cmd-R to see your
code edits in the browser.  You must manually recreate bundle.js each time
you make a change.  If you have a file-watcher solution available, you could
use that to recreate bundle.js as needed.  Otherwise, you may want to delete
bundle.js and continue to use run.js until you're ready to deploy to QA
or production.

To create a bundle.js, keep reading.

## Using cram to serve the app as a single bundle

While developing an application, smaller modules make debugging easier.
However, many modules means many HTTP requests.  cram.js is designed to
use your curl.js configuration to package all of your app's modules into a
single bundle.  You don't want to deploy to production without bundling!

There are other bundling tools.  RequireJS uses r.js.  EmberJS has its own
bundler, too.  curl.js will load bundles created with r.js, but not EmberJS.

> *Note*: curl.js's plugins and RequireJS's plugins are compatible when used
as run-time loader plugins.  However, r.js does not understand curl.js's
plugins, and cram.js does not understand RequireJS's plugins.  In short,
you should choose plugins that are compatible with your bundling tool!

To use cram on this project, start by typing `npm install` (requires node 0.10
or higher) to install cram.  (You probably did this already when you first
installed this project.)  If you'd like to use cram from the command line
from anywhere, type `npm install -g cram`.

Once cram is installed, you may type `npm run cram` from the project root.
There is an npm script in package.json that tells cram.js to look at the
index.html to find curl.js configuration information.  Check out cram.js's
[online docs](https://github.com/cujojs/cram/tree/master/docs) for more
information about cram.js.
