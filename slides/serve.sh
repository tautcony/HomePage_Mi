#!/bin/bash
#
# Starts a basic web server on the port specified.
# 
# ./serve.sh 3000 -> http://localhost:3000
#
# Copyright 2012 Eric Bidelman <ebidel@gmail.com>

port=$1
if [ $#  -ne  1 ]
then
  port=8000
fi
cd scripts/md/
python "render.py"
cd ../../
if [ $(uname -s) == "Darwin" ]
then
  open=open
else
  if [ $(uname -s) == "MINGW64_NT-10.0" ]
  then
    open=start
  else
    open=xdg-open
  fi
fi

$open http://localhost:$port/index.html && python -m http.server $port;
