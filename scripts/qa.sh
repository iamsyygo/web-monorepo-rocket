#!/bin/bash

# Define the version number
version="1.0.0"

# Update the version number in ver.sh
sed -i '' "s/VERSION=.*/VERSION=\"$version\"/" ver.sh


# 表示通过jq命令获取package.json中的version字段的值，jq是一个命令行下的json解析器
version = $(jq -r '.version' package.json)
