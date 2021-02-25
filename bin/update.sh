#!/bin/bashx

#使い方 : $ bash ./bin/update.sh 1-0-0

#引数 : プラグインのバージョン
version=$1

#上の階層へ
cd ..

#zプラグインファイルをip化
zip -r lorem-ipsum-blocks.zip lorem-ipsum-blocks -x "*/__*" "*__MACOSX*" "*.DS_Store" "*.git*" "*.vscode*" "*/_nouse/*" "*/src/*" "*/bin/*" "*gulpfile.js" "*webpack.config.*" "*/node_modules/*" "*package.json" "*package-lock.json" "*composer*" "*README.md" "*postcss.config.js" "*/vendor/*" "*phpcs.xml"

#設定ファイル系削除
zip --delete lorem-ipsum-blocks.zip  "lorem-ipsum-blocks/.*"

#zipファイルを移動
mv lorem-ipsum-blocks.zip ./_versions/zip/lorem-ipsum-blocks-${version}.zip