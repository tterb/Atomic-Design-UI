'use babel';
import { CompositeDisposable } from 'atom';

export var config = {
  accentColor: {
    type: 'string',
    default: 'Blue',
    enum: [ 'Blue', 'Purple', 'Green', 'Magenta' ],
    order: 1
  },
  treeViewColor: {
    description: 'Use Light Tree-View Background',
    type: 'boolean',
    default: false,
    order: 2
  }
};

var disposable;

export function activate() {
  disposable = new CompositeDisposable(
    atom.config.observe('atomic-design-ui.accentColor', updateAccentColor),
    atom.config.observe('atomic-design-ui.treeViewColor', updateTreeViewColor)
  );
}

export function deactivate() {
  disposable.dispose();
}

var workspaceView = atom.views.getView(atom.workspace);

function updateAccentColor(accentColor) {
  workspaceView.setAttribute('data-atomic-design-ui-accent-color', accentColor);
}

function updateTreeViewColor(treeViewColor) {
  workspaceView.setAttribute('data-atomic-design-ui-light-tree-view', treeViewColor);
}
