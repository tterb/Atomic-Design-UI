'use babel';
'use strict';
import { CompositeDisposable } from 'atom';

export var config = {
	// themeFontSize: {
	// 	title: 'Font Size',
	// 	description: 'Change the UI font size between 9 and 20',
	// 	type: 'integer',
	// 	default: 12,
	// 	minimum: 9,
	// 	maximum: 20,
	// 	order: 1
	// },
	lightTreeView: {
		title: 'Light Tree View',
		description: 'Use light tree-view background',
		type: 'boolean',
		default: false,
		order: 1
	}
};

var disposable;

export function activate() {
	disposable = new CompositeDisposable(
		// atom.config.observe('atomic-design-ui.themeFontSize', updateFontSize),
		atom.config.observe('atomic-design-ui.lightTreeView', updateTreeView)
	);
}

export function deactivate() {
	disposable.dispose();
}

var workspaceView = atom.views.getView(atom.workspace);

// function updateFontSize(themeFontSize) {
// 	workspaceView.setAttribute('data-atomic-design-ui-theme-font-size', themeFontSize);
// }

function updateTreeView(lightTreeView) {
	workspaceView.setAttribute('data-atomic-design-ui-light-tree-view', lightTreeView);
}
