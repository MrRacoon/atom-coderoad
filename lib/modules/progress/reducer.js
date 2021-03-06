"use strict";
var types_1 = require('./types');
var local_storage_1 = require('./utils/local-storage');
var _progress = {
    completed: false,
    pages: []
};
function progress(progress, action) {
    if (progress === void 0) { progress = _progress; }
    switch (action.type) {
        case types_1.PROGRESS_LOAD:
            var saved = local_storage_1.loadProgressFromLocalStorage(action.payload.tutorial);
            if (saved) {
                return saved;
            }
            return {
                completed: false,
                pages: action.payload.tutorial.pages.map(function () { return false; })
            };
        case types_1.PROGRESS_COMPLETE_PAGE:
            var _a = action.payload, tutorial = _a.tutorial, pagePosition = _a.pagePosition, completed = _a.completed;
            progress.pages[pagePosition] = completed;
            local_storage_1.saveToLocalStorage(tutorial, progress);
            return progress;
        case types_1.PROGRESS_COMPLETE_TUTORIAL:
            progress.completed = action.payload.completed;
            local_storage_1.saveToLocalStorage(action.payload.tutorial, progress);
            return progress;
        default:
            return progress;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = progress;
