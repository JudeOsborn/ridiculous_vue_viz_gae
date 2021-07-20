# Ridiculously Simple Vue 2 + GAE + Spreadsheet Backend

A ridiculously simple boiletplate for Vue 2, hosted on App Engine, using a spreadsheet as a backend.

Includes very basic auth so spreadsheets do not have to be public.

The /dist folder is deployed to App Engine, which requires a build (see below).

## Setup

	npm install


### Compiles and hot-reloads for development

	npm run serve


### Compiles and minifies for production

	npm run build


### Lints and fixes files

	npm run lint

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Spreadsheet

Add the spreadsheet id in HelloWorld.vue.

### Google Dev Console

Enable the Sheets API.

Create a client id and add it to HelloWorld.vue.

## Deploying

Replace [app id] with your very own App Engine id. 

Make sure to build first.

	gcloud app deploy dist/app.yaml --project cl-syd-general --version 1

## Why did I do this?

This is part of a series of ridiculously simple, executable code examples. 

Sometimes we need to cut through the documentation jungle and start making stuff.

## Credits

Jude Osborn
