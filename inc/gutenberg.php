<?php
namespace LOOS_Inc\Lorem_Ipsum_Blocks;

defined( 'ABSPATH' ) || exit;

/**
 * ブロックカテゴリー追加
 */
global $wp_version;
$hookname = ( version_compare( $wp_version, '5.8-beta' ) >= 0 ) ? 'block_categories_all' : 'block_categories';
add_filter( $hookname, __NAMESPACE__ . '\add_block_categories' );
function add_block_categories( $categories ) {

	$my_category = [
		[
			'slug'  => 'lorem-ipsum-blocks',
			'title' => __( 'Lorem Ipsum Blocks', 'lorem-ipsum-blocks' ),
			'icon'  => null,
		],
	];

	// ウィジェットの前にカテゴリーを追加する
	foreach ( $categories as $index => $data ) {
		$slug = $data['slug'] ?? '';
		if ( 'widgets' === $slug ) {
			array_splice( $categories, $index, 0, $my_category );
			break;
		}
	}

	return $categories;
}
