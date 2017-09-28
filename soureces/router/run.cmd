
@echo off
color 2
echo webpack-dev-server 
title webpack-dev-server
node ..\..\node_modules\webpack-dev-server\bin\webpack-dev-server.js --inline --hot
REM pause & exit