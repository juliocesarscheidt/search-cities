#!/bin/bash

NPM_CMD=$(which npm)
# export SHA="$(git rev-parse HEAD)"
# cat ./.env | sed -r "s/SHA=.*/SHA=$SHA\n/gim"
# SHA=${SHA:0:7}

echo "$SHA"

sleep 15

VERSION=$SHA && "$NPM_CMD" run dev
