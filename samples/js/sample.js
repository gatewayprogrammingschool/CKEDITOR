﻿/**
 * Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* exported initSample */

if (CKEDITOR.env.ie && CKEDITOR.env.version < 9)
	CKEDITOR.tools.enableHtml5Elements(document);

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 350;
CKEDITOR.config.width = 'auto';

var initSample = (function () {
	return function () {
		var editorElement = CKEDITOR.document.getById('editor');

		CKEDITOR.replace('editor');
	};
})();
