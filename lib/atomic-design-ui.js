'use babel';
'use strict';
import { CompositeDisposable } from 'atom';

export var config = {

	useTabSyntaxColor: {
		title: 'Match Tabs to Syntax Colors',
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
		order: 2
	},
	compactTreeView: {
		title: 'Compact Tree View',
		description: 'Decrease tree-view font size and spacing',
		type: 'boolean',
		default: false,
		order: 3
	},
	customIcons: {
		title: 'Custom Icons',
		description: 'Disable this if you\'re using \'file-icons\' or similar icon packages',
		type: 'boolean',
		default: true,
		order: 4
	}
};

var disposable;

export function activate() {
	disposable = new CompositeDisposable(
		atom.config.observe('atomic-design-ui.useTabSyntaxColor', updateTabColor),
		atom.config.observe('atomic-design-ui.lightTreeView', updateTreeViewTheme),
		// atom.config.observe('atomic-design-ui.treeViewFontSize', updateTreeViewFont),
		atom.config.observe('atomic-design-ui.compactTreeView', updateTreeViewSize),
		atom.config.observe('atomic-design-ui.customIcons', updateIcons)
	);
}

export function deactivate() {
	disposable.dispose();
}

var workspaceView = atom.views.getView(atom.workspace);

function updateTabColor(useTabSyntaxColor) {
	workspaceView.setAttribute('data-atomic-design-ui-use-tab-syntax-colors', useTabSyntaxColor);
}

function updateTreeViewTheme(lightTreeView) {
	workspaceView.setAttribute('data-atomic-design-ui-light-tree-view', lightTreeView);
}

function updateTreeViewSize(compactTreeView) {
	workspaceView.setAttribute('data-atomic-design-ui-compact-tree-view', compactTreeView);
}

function updateIcons(customIcons) {
	workspaceView.setAttribute('data-atomic-design-ui-custom-icons', customIcons);
}
