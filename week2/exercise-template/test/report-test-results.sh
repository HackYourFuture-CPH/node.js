#!/usr/bin/env bash

GIT_USERNAME="$(git config user.name)"
echo "git username is $GIT_USERNAME"

curl \
    -sfSX POST https://google.com \
    -H "Content-Type: application/json" -d @./results.json

