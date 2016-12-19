'use babel';
'use strict';
import { CompositeDisposable } from 'atom';

export var config = {
	themeFontSize: {
		title: 'Font Size',
		description: 'Change the UI font size between 9 and 20',
		type: 'integer',
		default: 12,
		minimum: 9,
		maximum: 20,
		order: 1
	},
	// accentColor: {
	// 	title: 'Accent Color',
	// 	type: 'string',
	// 	default: 'Blue',
	// 	enum: ['Blue', 'Purple', 'Green', 'Magenta'],
	// 	order: 2
	// },
	lightTreeView: {
		title: 'Light Tree View',
		description: 'Use light tree view background',
		type: 'boolean',
		default: false,
		order: 2
	}
};

var disposable;

export function activate() {
	disposable = new CompositeDisposable(
		atom.config.observe('atomic-design-ui.themeFontSize', updateThemeFontSize),
		// atom.config.observe('atomic-design-ui.accentColor', updateAccentColor),
		atom.config.observe('atomic-design-ui.lightTreeView', updateTreeView)
	);
}

export function deactivate() {
	disposable.dispose();
}

var workspaceView = atom.views.getView(atom.workspace);

function updateThemeFontSize(themeFontSize) {
	workspaceView.setAttribute('data-atomic-design-ui-theme-font-size', themeFontSize);
}

// function updateAccentColor(accentColor) {
// 	workspaceView.setAttribute('data-atomic-design-ui-accent-color', accentColor);
// }

function updateTreeView(lightTreeView) {
	workspaceView.setAttribute('data-atomic-design-ui-light-tree-view', lightTreeView);
}
