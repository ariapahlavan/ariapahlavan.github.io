#!/usr/bin/env bash

if [ $# -lt 4 ]
  then
    echo "Usage:"
    echo "sh <script_name>.sh <post_type> <post_name> <title> <subtitle>"
    exit 1
fi

assets_dir=./src/assets
type=$1
post=$2
title=$3
subtitle=$4
listing_filepath=${assets_dir}/${type}.json
listing_item=",{\"id\": \"${type}-?\",\"type\": \"card\",\"title\": \"${title}\",\"subTitle\": \"${subtitle}\",\"description\": \"\",\"actions\": [{\"text\": \"see more\",\"url\": \"/details?filepath=/${type}/${post}.json\"}],\"images\": [{\"text\": \"${post}\",\"url\": \"/${type}/images/doge.jpg\"}],\"thumbnails\":[]}]"

details_filepath=${assets_dir}/${type}/${post}.json
details_content="[{\"type\": \"header\",\"title\": \"${title}\",\"subTitle\": \"${subtitle}\",\"startDate\": \"\",\"endDate\": \"\"},{\"type\": \"markdown\",\"url\": \"/${type}/markdowns/${post}.md\"},{\"type\":\"teaser\",\"images\":[{\"text\":\"Doge\",\"url\": \"/${type}/images/doge.jpg\"}]}]"

markdown_filepath=${assets_dir}/${type}/markdowns/${post}.md
markdown_content="# ${post}"

echo "creating a new item for '${post}' in ${listing_filepath}"

echo "creating a new details file: ${details_filepath}"
touch $details_filepath
echo "$details_content" >$details_filepath

echo "creating a new markdown file: ${markdown_filepath}"
touch $markdown_filepath
echo "$markdown_content" >$markdown_filepath

cur_listing_content=$(cat $listing_filepath)
echo "${cur_listing_content%?}${listing_item}" > $listing_filepath
