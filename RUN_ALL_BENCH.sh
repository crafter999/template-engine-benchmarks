#!/bin/sh

tsc
echo "Running Edge..."
node ./edge/main.mjs
echo ""
echo "Running EJS..."
node ./dist/ejs/main.js
echo ""
echo "Running ETA..."
node ./dist/eta/main.js
echo ""
echo "Running Handlebars..."
node ./dist/handlebars/main.js
echo ""
echo "Running Liquid..."
node ./dist/liquid/main.js
echo ""
echo "Running Nunjucks..."
node ./dist/nunjucks/main.js
echo ""