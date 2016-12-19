'use babel';
'use strict';
import {
	CompositeDisposable
} from 'atom';

export var config = {
	fontSize: {
		title: 'Font Size',
		description: 'Set the UI font size between 9 and 20',
		type: 'integer',
		minimum: 9,
		maximum: 20,
        default: 12,
		order: 1
	},
	accentColor: {
		type: 'string',
		default: 'Blue',
		enum: ['Blue', 'Purple', 'Green', 'Magenta'],
		order: 2
	},
	lightTreeView: {
		description: 'Use Light Tree-View Background',
		type: 'boolean',
		default: false,
		order: 3
	}
};

var disposable;

export function activate() {
	disposable = new CompositeDisposable(
		atom.config.observe('atomic-design-ui.fontSize', updateFontSize),
		atom.config.observe('atomic-design-ui.accentColor', updateAccentColor),
		atom.config.observe('atomic-design-ui.lightTreeView', updateTreeView)
	);
}

export function deactivate() {
	disposable.dispose();
}

var workspaceView = atom.views.getView(atom.workspace);

function updateFontSize(fontSize) {
	workspaceView.setAttribute('data-atomic-design-ui-font-size', fontSize);
}

function updateAccentColor(accentColor) {
	workspaceView.setAttribute('data-atomic-design-ui-accent-color', accentColor);
}

function updateTreeView(lightTreeView) {
	workspaceView.setAttribute('data-atomic-design-ui-light-tree-view', lightTreeView);
}
