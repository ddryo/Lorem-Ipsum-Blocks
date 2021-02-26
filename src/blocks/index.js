/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockVariation } from '@wordpress/blocks';

/**
 * Lorem カテゴリー
 */
const loremCategory = 'lorem-ipsum-blocks';

/**
 * ダミーテキスト
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 */
const loremText = __(
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	'lorem-ipsum-blocks'
);
const loremTextLong = __(
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	'lorem-ipsum-blocks'
);

/**
 * 段落
 */
registerBlockVariation('core/paragraph', [
	{
		name: 'lorem-paragraph',
		title: __('Lorem Paragraph', 'lorem-ipsum-blocks'),
		attributes: {
			content: loremText,
		},
		category: loremCategory,
		scope: ['inserter', 'transform'],
	},
]);
registerBlockVariation('core/paragraph', [
	{
		name: 'lorem-paragraph--long',
		title: __('Lorem Paragraph (Long)', 'lorem-ipsum-blocks'),
		attributes: {
			content: loremTextLong,
		},
		category: loremCategory,
		scope: ['transform'],
	},
]);

/**
 * リスト
 */
registerBlockVariation('core/list', [
	{
		name: 'lorem-list',
		title: __('Lorem List', 'lorem-ipsum-blocks'),
		attributes: {
			values: '<li>Lorem ipsum list.</li><li>Lorem ipsum list.</li><li>Lorem ipsum list.</li>',
		},
		category: loremCategory,
	},
]);

/**
 * 見出し
 */
registerBlockVariation('core/heading', [
	{
		name: 'lorem-heading',
		title: __('Lorem Heading', 'lorem-ipsum-blocks'),
		attributes: {
			content: __('Lorem Ipsum Heading', 'lorem-ipsum-blocks'),
			level: 2,
		},
		category: loremCategory,
	},
]);

/**
 * 画像
 */
registerBlockVariation('core/image', [
	{
		name: 'lorem-image',
		title: __('Lorem Image', 'lorem-ipsum-blocks'),
		attributes: {
			url: window.loremIpsumVars.imgDirUrl + 'lorem-image.jpg',
			// 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
		},
		category: loremCategory,
	},
]);

/**
 * ボタン
 */
const innerLoremButton = [
	'core/button',
	{
		text: __('Lorem Button', 'lorem-ipsum-blocks'),
	},
];
registerBlockVariation('core/buttons', [
	{
		name: 'lorem-buttons',
		title: __('Lorem Buttons', 'lorem-ipsum-blocks'),
		attributes: {
			contentJustification: 'center',
		},
		innerBlocks: [innerLoremButton],
		category: loremCategory,
	},
]);

/**
 * カラム
 */
const innerLoremParagraph = [
	'core/paragraph',
	{
		content: loremText,
	},
];
const innerLoremImage = [
	'core/image',
	{
		url: window.loremIpsumVars.imgDirUrl + 'lorem-image.jpg',
	},
];
registerBlockVariation('core/columns', [
	{
		name: 'lorem-columns',
		title: __('Lorem Columns', 'lorem-ipsum-blocks'),
		innerBlocks: [
			['core/column', {}, [innerLoremImage, innerLoremParagraph]],
			['core/column', {}, [innerLoremImage, innerLoremParagraph]],
		],
		category: loremCategory,
	},
]);

/**
 * メディアとテキスト
 */
registerBlockVariation('core/media-text', [
	{
		name: 'lorem-media-text',
		title: __('Lorem Media & Text', 'lorem-ipsum-blocks'),
		attributes: {
			mediaType: 'image',
			mediaUrl: window.loremIpsumVars.imgDirUrl + 'lorem-media-image.jpg',
		},
		innerBlocks: [
			[
				'core/paragraph',
				{
					fontSize: 'large',
					content: __('Lorem ipsum.', 'lorem-ipsum-blocks'),
				},
			],
			innerLoremParagraph,
		],
		category: loremCategory,
	},
]);
