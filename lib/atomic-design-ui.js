'use babel';
'use strict';
import { CompositeDisposable } from 'atom';

export var config = {

	useSyntaxColors: {
		title: 'Use Syntax Colors',
		description: 'Use colors from the active syntax theme (not recommended for light themes)',
		type: 'boolean',
		default: false,
		order: 1
	},
	lightTreeView: {
		title: 'Light Tree View',
		description: 'Use light tree-view background',
		type: 'boolean',
		default: true,
		order: 2
	},
	disableFileIcons: {
		title: 'Default File icons',
		description: 'Disables the themes custom file icons',
		type: 'boolean',
		default: false,
		order: 3
	}
};

var disposable;

export function activate() {
	disposable = new CompositeDisposable(
		atom.config.observe('atomic-design-ui.useSyntaxColors', updateSyntaxColors),
		atom.config.observe('atomic-design-ui.lightTreeView', updateTreeView),
		atom.config.observe('atomic-design-ui.disableFileIcons', updateIcons)
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

function updateIcons(disableFileIcons) {
	workspaceView.setAttribute('data-atomic-design-ui-default-file-icons', disableFileIcons);
}
