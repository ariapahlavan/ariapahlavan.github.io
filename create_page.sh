#!/usr/bin/env bash

if [ $# -lt 1 ]
  then
    printf "╭───────────────────────────────────────────────────────────────╮\n"
    printf "│ Usage: sh <script_name>.sh <post_name>                        │\n"
    printf "╰───────────────────────────────────────────────────────────────╯\n"
    exit 1
fi
page_name=$1
page_dir=details/pages/${page_name}

printf "RUN: 'ng g c %s -m details'\n" "${page_dir}"
ng g c "${page_dir}" -m details
