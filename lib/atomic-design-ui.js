'use babel';
'use strict';
import { CompositeDisposable } from 'atom';

export var config = {

	lightTreeView: {
		title: 'Light Tree View',
		description: 'Use light tree-view background',
		type: 'boolean',
		default: true,
		order: 1
	},
	useSyntaxColors: {
		title: 'Use Syntax Colors',
		description: 'Use colors from the active syntax theme (not recommended for light themes)',
		type: 'boolean',
		default: false,
		order: 2
	}
};

var disposable;

export function activate() {
	disposable = new CompositeDisposable(
		atom.config.observe('atomic-design-ui.useSyntaxColors', updateSyntaxColors),
		atom.config.observe('atomic-design-ui.lightTreeView', updateTreeView)
	);
}

export function deactivate() {
	disposable.dispose();
}

var workspaceView = atom.views.getView(atom.workspace);

function updateSyntaxColors(useSyntaxColors) {
	workspaceView.setAttribute('data-atomic-design-ui-use-syntax-colors', useSyntaxColors);
}

function updateTreeView(lightTreeView) {
	workspaceView.setAttribute('data-atomic-design-ui-light-tree-view', lightTreeView);
}
