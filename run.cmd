@echo off
color 2
echo desc precompile str/*.js output dist/*.js
title compile ES6

node   node_modules\gulp\bin\gulp.js
echo done!
pause & exit