const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const srcDir = 'src/blocks';

let entries = {}; // ビルドするファイル群
entries.index = path.resolve(srcDir, 'index.js');

/**
 * CleanWebpackPlugin （ビルド先のほかのファイルを勝手に削除するやつ） はオフに。
 */
defaultConfig.plugins.shift();

// ↓ CleanWebpackPlugin が 先頭じゃなくなったとき用
// for (let i = 0; i < defaultConfig.plugins.length; i++) {
// 	const pluginInstance = defaultConfig.plugins[i];
// 	if ('CleanWebpackPlugin' === pluginInstance.constructor.name) {
// 		defaultConfig.plugins.splice(i, i);
// 	}
// }

module.exports = {
	...defaultConfig, //@wordpress/scriptを引き継ぐ

	//エントリーポイント
	entry: entries,

	//アウトプット先
	output: {
		path: path.resolve(__dirname, 'dist/blocks'),
		filename: '[name].js',
	},

	// resolve: {
	// 	alias: {
	// 		'@blocks': path.resolve(__dirname, 'src/blocks/'),
	// 	},
	// },
};
