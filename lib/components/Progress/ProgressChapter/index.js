"use strict";
var React = require('react');
var List_1 = require('material-ui/List');
var ProgressPage_1 = require('../ProgressPage');
var index_1 = require('../../index');
var styles = {
    marginBottom: '0px'
};
var descriptionStyles = {
    fontSize: '14px'
};
exports.ProgressChapter = function (_a) {
    var progress = _a.progress, chapter = _a.chapter, chapterIndex = _a.chapterIndex, position = _a.position;
    var isActive = chapterIndex === position.chapter;
    return (React.createElement(List_1.ListItem, {key: chapterIndex, className: isActive ? 'isActive' : null, style: styles, initiallyOpen: chapterIndex === 0, primaryTogglesNestedList: chapterIndex === position.chapter && !progress.chapters[chapterIndex].completed, nestedItems: chapter.pages.map(function (page, pageIndex) { return (React.createElement(ProgressPage_1.ProgressPage, {key: pageIndex, pageIndex: pageIndex, page: page, chapterIndex: chapterIndex, position: position, progress: progress})); })}, React.createElement("h3", null, chapterIndex + 1, ". ", chapter.title), React.createElement("span", {style: descriptionStyles}, React.createElement(index_1.Markdown, null, chapter.description))));
};