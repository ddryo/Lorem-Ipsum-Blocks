<?php
namespace Lorem_Ipsum_Blocks;

defined( 'ABSPATH' ) || exit;


/**
 * Gutenberg用ファイル
 */
add_action( 'enqueue_block_editor_assets', '\Lorem_Ipsum_Blocks\hook_enqueue_block_editor_assets', 20 );
function hook_enqueue_block_editor_assets( $hook_suffix ) {

	// ブロック用CSS
	// wp_enqueue_style( 'lorem-ipsum-blocks-style',  LOREM_BLKS_URL . 'dist/css/blocks.css', [], LOREM_BLKS_VERSION );

	// その他基本的なスクリプト
	$asset = include LOREM_BLKS_PATH . 'dist/blocks/index.asset.php';
	wp_enqueue_script( 'lorem-ipsum-blocks-script', LOREM_BLKS_URL . 'dist/blocks/index.js', $asset['dependencies'], $asset['version'], true );

	wp_localize_script( 'lorem-ipsum-blocks-script', 'loremIpsumVars', [
		'imgDirUrl' => LOREM_BLKS_URL . 'assets/img/',
	] );

	// JS用翻訳ファイルの読み込み
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'lorem-ipsum-blocks-script', 'lorem-ipsum-blocks', LOREM_BLKS_PATH . 'languages' );
	}

}
