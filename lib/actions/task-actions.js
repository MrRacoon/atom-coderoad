"use strict";
var Type = require('./actionTypes');
var store_1 = require('../store/store');
function showHint() {
    return { type: Type.SHOW_HINT };
}
exports.showHint = showHint;
function runTests() {
    return { type: Type.RUN_TESTS };
}
exports.runTests = runTests;
function testResult(result) {
    var actions = store_1.store.getState().editorActions;
    return { type: Type.TEST_RESULT, payload: { result: result, actions: actions } };
}
exports.testResult = testResult;
function testComplete() {
    return { type: Type.TEST_COMPLETE };
}
exports.testComplete = testComplete;
function setHintPosition(hintPosition) {
    return { type: Type.SET_HINT_POSITION, payload: { hintPosition: hintPosition } };
}
exports.setHintPosition = setHintPosition;