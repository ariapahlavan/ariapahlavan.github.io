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
type="articles"

printf "RUN 'ng g c %s -m details'\n" "${page_dir}"
ng g c "${page_dir}" -m details

printf "RUN 'post_gen.sh %s %s %s'\n" "${type}" "${page_title}" "Summary for ${page_title}"
sh post_gen.sh articles "${page_title}" "Summary for ${page_title}"

printf "CREATE %s\n" "src/app/${page_dir}/sections"
mkdir "src/app/${page_dir}/sections"

printf "CREATE %s\n" "src/app/${page_dir}/sections/section-1.md"
echo "# ${page_title}" > "src/app/${page_dir}/sections/section-1.md"

printf "UPDATE %s\n" "src/app/${page_dir}/${page_name}.component.html"
echo "<markdown>{{section1}}</markdown>" > "src/app/${page_dir}/${page_name}.component.html"


componentPage="src/app/${page_dir}/${page_name}.component.ts"
printf "UPDATE %s\n" "${componentPage}"

oldPattern="OnInit {"
newPattern="OnInit {\\n  section1 = require('\!raw-loader\!.\/sections\/section-1.md').default;\\n"
sed -i "" "s/${oldPattern}/${newPattern}/g" "${componentPage}"

oldAssetPattern="ngOnInit(): void {"
newAssetPattern='ngOnInit(): void {\n    this.section1 = this.section1.replaceAll(/\\/assets/g, env.assetsPath);'
sed -i "" "s|${oldAssetPattern}|${newAssetPattern}|g" "${componentPage}"

oldEnvPattern="@Component({"
newEnvPattern="import { environment as env } from '../../../../environments/environment';\\n\\n@Component({"
sed -i "" "s|${oldEnvPattern}|${newEnvPattern}|g" "${componentPage}"


assets_dir=src/assets
post=$(printf "${page_title// /-}" | tr '[:upper:]' '[:lower:]')
details_filepath=${assets_dir}/${type}/${post}.json
printf "UPDATE %s\n" "${details_filepath}"

oldIdPattern='id": "?'
newIdPattern="id\": \"${page_name}"
sed -i "" "s|${oldIdPattern}|${newIdPattern}|g" "${details_filepath}"

details_template="src/app/details/details.component.html"
printf "UPDATE %s\n" "${details_template}"

oldPagePattern="<\!--PLACEHOLDER-->"
newPagePattern="<app-${page_name} *ngSwitchCase=\"'${page_name}'\"><\/app-${page_name}>\\n      <!--PLACEHOLDER-->"
sed -i "" "s|${oldPagePattern}|${newPagePattern}|g" "${details_template}"


