/**
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* exported initSample */

if (CKEDITOR.env.ie && CKEDITOR.env.version < 9)
	CKEDITOR.tools.enableHtml5Elements(document);

var initSample = (function () {
	return function () {
		var editorElement = CKEDITOR.document.getById('editor');
		let config = {
			width: 'auto',
			height: '350'
		};
		CKEDITOR.inline(editorElement, config);
	};
})();
