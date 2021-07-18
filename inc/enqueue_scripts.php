<?php
namespace LOOS_Inc\Lorem_Ipsum_Blocks;

defined( 'ABSPATH' ) || exit;


/**
 * Gutenberg用ファイル
 */
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\hook_enqueue_block_editor_assets', 20 );
function hook_enqueue_block_editor_assets( $hook_suffix ) {

	// ブロックスクリプト
	$asset = include LOREM_BLKS_PATH . 'dist/blocks/index.asset.php';
	wp_enqueue_script( 'lorem-ipsum-blocks-script', LOREM_BLKS_URL . 'dist/blocks/index.js', $asset['dependencies'], $asset['version'], true );

	$lorem_text_short = __(
		'Lorem ipsum dolor sit amet.',
		'lorem-ipsum-blocks'
	);
	$lorem_text       = __(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'lorem-ipsum-blocks'
	);
	$lorem_text_long  = __(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		'lorem-ipsum-blocks'
	);
	$lorem_text_full  = __(
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		'lorem-ipsum-blocks'
	);
	$lorem_list       = '<li>' . $lorem_text_short . '</li><li>' . __( 'Consectetur adipiscing elit.', 'lorem-ipsum-blocks' ) . '</li><li>' . __( 'Sed do eiusmod tempor incididunt ut.', 'lorem-ipsum-blocks' ) . '</li>';

	$lorem_vars = [
		'loremImage'       => LOREM_BLKS_URL . 'assets/img/lorem-image.jpg',
		'loremMediaImage'  => LOREM_BLKS_URL . 'assets/img/lorem-media-image.jpg',
		'loremTitle'       => __( 'Lorem ipsum', 'lorem-ipsum-blocks' ),
		'loremTextShort'   => $lorem_text_short,
		'loremText'        => $lorem_text,
		'loremTextLong'    => $lorem_text_long,
		'loremTextFull'    => $lorem_text_full,
		'loremList'        => $lorem_list,
		'loremTextHeading' => __( 'Lorem Ipsum Heading', 'lorem-ipsum-blocks' ),
	];
	$lorem_vars = apply_filters( 'lorem_ipsum_blocks_vars', $lorem_vars );

	wp_localize_script( 'lorem-ipsum-blocks-script', 'loremIpsumVars', $lorem_vars );

	// JS用翻訳ファイルの読み込み
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'lorem-ipsum-blocks-script', 'lorem-ipsum-blocks', LOREM_BLKS_PATH . 'languages' );
	}

}
