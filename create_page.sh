#!/usr/bin/env bash

if [ $# -lt 2 ]
  then
    printf "╭───────────────────────────────────────────────────────────────╮\n"
    printf "│ Usage: sh <script_name>.sh <page_name> <page_title>           │\n"
    printf "╰───────────────────────────────────────────────────────────────╯\n"
    exit 1
fi
page_name=$1
page_title=$2
page_dir=details/pages/${page_name}

printf "RUN: 'ng g c %s -m details'\n" "${page_dir}"
ng g c "${page_dir}" -m details

sh post_gen.sh articles "${page_title}" "Summary for ${page_title}"
