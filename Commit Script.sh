#!/bin/bash

# To give excute permissions use 'chmod +x PATH/FILE_NAME.s'

read -p "Enter your commit message: " msg

if [ -z "$msg" ]; then
    msg="Some Changes"
fi

git add ./*

git commit -m "$msg"

git push origin main
