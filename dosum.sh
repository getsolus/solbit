#!/bin/bash

sum=$(cat build/solbit.min.js | md5sum | awk '{ print $1 }')
mv build/solbit.min.js build/solbit-${sum}.min.js