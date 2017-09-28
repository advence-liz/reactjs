
@echo off
color 2
echo webpack-dev-server 
title webpack-dev-server
REM node ..\..\node_modules\webpack-dev-server\bin\webpack-dev-server.js --inline --hot
..\..\node_modules\.bin\webpack-dev-server --inline --hot
REM pause & exit