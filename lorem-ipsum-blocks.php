<?php
/**
 * Plugin Name: Lorem Ipsum Blocks
 * Plugin URI: https://github.com/ddryo/Lorem-Ipusum-Blocks
 * Description: A plugin that makes it easy to use blocks with dummy text.
 * Version: 1.0.0
 * Author: LOOS,Inc.
 * Author URI: https://loos.co.jp/
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: lorem-ipsum-blocks
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * バージョン情報
 */
define( 'LOREM_BLKS_VERSION', ( defined( 'WP_DEBUG' ) && WP_DEBUG ) ? wp_date( 'mdGis' ) : '1.0.0' );

/**
 * 翻訳用のテキストドメインを定義
 */
define( 'LOREM_BLKS_DOMAIN', 'useful-blocks' );

/**
 * 定数宣言
 */
define( 'LOREM_BLKS_URL', plugins_url( '/', __FILE__ ) );
define( 'LOREM_BLKS_PATH', plugin_dir_path( __FILE__ ) );
// define( 'LOREM_BLKS_BASENAME', plugin_basename( __FILE__ ) );


/**
 * プラグイン実行クラス
 */
if ( ! class_exists( 'Lorem_Ipsum_Blocks' ) ) {
	class Lorem_Ipsum_Blocks {

		public function __construct() {

			// 翻訳ファイルを登録
			load_plugin_textdomain( 'lorem-ipsum-blocks' );
			// if ( 'ja' === determine_locale() ) {
			// 	load_textdomain( 'lorem-ipsum-blocks', LOREM_BLKS_PATH . 'languages/lorem-ipsum-blocks-ja.mo' );
			// } else {
			// 	load_plugin_textdomain( 'lorem-ipsum-blocks' );
			// }

			// ファイル読み込み
			require_once LOREM_BLKS_PATH . 'inc/enqueue_scripts.php';
			require_once LOREM_BLKS_PATH . 'inc/gutenberg.php';

		}
	}
}

/**
 * プラグインファイルの実行
 */
add_action( 'plugins_loaded', function() {

	// 5.7以降でしか読み込まない
	global $wp_version;
	if ( version_compare( $wp_version, '5.7.RC1' ) >= 0 ) {
		new Lorem_Ipsum_Blocks();
	}
} );
