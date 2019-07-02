#!/bin/bash

NPM_CMD=$(which npm)
echo "$SHA"
sleep 15

VERSION=$SHA && "$NPM_CMD" run dev
