'use babel';
'use strict';
import { CompositeDisposable } from 'atom';

export var config = {

	adaptiveTabs: {
		title: 'Adaptive Tabs',
		description: 'Use colors from the syntax theme to color tabs (not recommended for light themes)',
		type: 'boolean',
		default: true,
		order: 1
	},
	lightTreeView: {
		title: 'Light Tree View',
		description: 'Use light tree-view background',
		type: 'boolean',
		default: true,
		order: 3
	},
	customIcons: {
		title: 'Custom Icons',
		description: 'Disable this if you\'re using \`file-icons\` or similar icon packages',
		type: 'boolean',
		default: true,
		order: 5
	}
};

var disposable;
export function activate() {
	disposable = new CompositeDisposable(
		atom.config.observe('atomic-design-ui.adaptiveTabs', updateTabColor),
		atom.config.observe('atomic-design-ui.lightTreeView', updateTreeViewTheme),
		atom.config.observe('atomic-design-ui.customIcons', updateIcons)
	);
}

export function deactivate() {
	disposable.dispose();
}

var workspaceView = atom.views.getView(atom.workspace);

function updateTabColor(adaptiveTabs) {
	workspaceView.setAttribute('data-atomic-design-ui-adaptive-tabs', adaptiveTabs);
}

function updateTreeViewTheme(lightTreeView) {
	workspaceView.setAttribute('data-atomic-design-ui-light-tree-view', lightTreeView);
}

function updateIcons(customIcons) {
	workspaceView.setAttribute('data-atomic-design-ui-custom-icons', customIcons);
}
