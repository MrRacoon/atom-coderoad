"use strict";
function openTerminal() {
    if (atom.packages.isPackageActive('terminal-plus')) {
        if (!document.getElementsByClassName('xterm')[0]) {
            atom.commands.dispatch(document.getElementsByTagName('atom-workspace')[0], 'terminal-plus:toggle');
        }
        return true;
    }
    return false;
}
exports.openTerminal = openTerminal;