<?php
namespace Lorem_Ipsum_Blocks;

defined( 'ABSPATH' ) || exit;

// add_action( 'init', '\Lorem_Ipsum_Blocks\register_blocks' );

/**
 * ブロックカテゴリー追加
 */
add_filter( 'block_categories', '\Lorem_Ipsum_Blocks\add_block_categories', 5 );
function add_block_categories( $categories ) {
	$my_category = [
		[
			'slug'  => 'lorem-ipsum-blocks',
			'title' => __( 'Lorem Ipsum Blocks', 'lorem-ipsum-blocks' ),
			'icon'  => null,
		],
	];
	array_splice( $categories, 3, 0, $my_category );
	return $categories;
}
