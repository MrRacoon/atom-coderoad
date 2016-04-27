"use strict";
var fs_1 = require('fs');
var exists_1 = require('../../services/exists');
var editor_1 = require('./editor');
function openFolder() {
    atom.open();
}
exports.openFolder = openFolder;
function save() {
    editor_1.getEditor().then(function (editor) { return editor.save(); });
}
exports.save = save;
function open(filePath, options) {
    if (options === void 0) { options = {}; }
    return new Promise(function (resolve, reject) {
        if (exists_1.fileExists(filePath)) {
            fs_1.unlink(filePath);
        }
        resolve(atom.workspace.open(filePath, options));
    });
}
exports.open = open;