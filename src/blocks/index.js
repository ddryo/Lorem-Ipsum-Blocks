/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockVariation } from '@wordpress/blocks';

const loremVars = window.loremIpsumVars;
/**
 * Lorem カテゴリー
 */
const loremCategory = 'lorem-ipsum-blocks';

/**
 * ダミーテキスト
 * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 *
 * 参考 : https://yanohirota.com/lolem-ipsum-jp/
 *
 * ロレム・イプサムの嘆き、トマ好き学部のエリット、しかし時と活力、そのような労働と悲しみ、ブラインド行うにはいくつかの重要な事柄に座ります。長年にわたり、私は学区と長寿であれば、そのような刺激の取り組み、彼女のうち、運動の利点を分注を邪魔されたする人が来ます。クピダタットのつるの痛みになりたい宿題に、批判されてきたら痛み、マグナ逃亡しても結果の喜びを生成しません。先例クピダタットブラックは先例していない、つまり、彼らはあなたの悩みに責任がある人の、一般的な義務を捨て、魂を癒しています。
 */

/**
 * 段落
 */
registerBlockVariation('core/paragraph', [
	{
		name: 'lorem-paragraph',
		title: __('Lorem Paragraph (Short)', 'lorem-ipsum-blocks'),
		attributes: {
			content: loremVars.loremTextShort,
		},
		category: loremCategory,
		scope: ['transform'],
	},
]);
registerBlockVariation('core/paragraph', [
	{
		name: 'lorem-paragraph--short',
		title: __('Lorem Paragraph', 'lorem-ipsum-blocks'),
		attributes: {
			content: loremVars.loremText,
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
			content: loremVars.loremTextLong,
		},
		category: loremCategory,
		scope: ['transform'],
	},
]);

registerBlockVariation('core/paragraph', [
	{
		name: 'lorem-paragraph--full',
		title: __('Lorem Paragraph (Full)', 'lorem-ipsum-blocks'),
		attributes: {
			content: loremVars.loremTextFull,
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
			values: loremVars.loremList,
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
			content: loremVars.loremTextHeading,
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
			url: loremVars.loremImage,
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
		content: loremVars.loremText,
	},
];
const innerLoremImage = [
	'core/image',
	{
		url: loremVars.loremImage,
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
			mediaUrl: loremVars.loremMediaImage,
		},
		innerBlocks: [
			[
				'core/paragraph',
				{
					fontSize: 'large',
					content: loremVars.loremTitle,
				},
			],
			innerLoremParagraph,
		],
		category: loremCategory,
	},
]);
