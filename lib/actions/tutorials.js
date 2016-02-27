function loadTutorials(){var e=[];if(global.coderoad.dir){var a=loadRootPackageJson();if(a)e=[].concat(searchForTutorials(a.dependencies)).concat(searchForTutorials(a.devDependencies));else{global.coderoad["package"]=null;var o='No package.json file available. Try running "npm init --y" in terminal';console.log(o),_base_1.store.dispatch(Action.toggleAlert({message:o,action:"tip",duration:6e3}))}}return{type:Type.LOAD_TUTORIALS,payload:{tutorials:e}}}function loadRootPackageJson(){var e=path.join(global.coderoad.dir,"package.json");return exists_1.fileExists(e)?JSON.parse(fs.readFileSync(e,"utf8")):!1}function isTutorial(e){var a=path.join(global.coderoad.dir,"node_modules",e,"package.json");if(exists_1.fileExists(a)){var o=JSON.parse(fs.readFileSync(a,"utf8"));if(o.main&&o.main.match(/coderoad.json$/)){var r=path.join(global.coderoad.dir,"node_modules",e,o.main);if(exists_1.fileExists(r))return!0}}return!1}function searchForTutorials(e){return e&&Object.keys(e).length>0?Object.keys(e).filter(function(e){return isTutorial(e)}):[]}var _base_1=require("../_base"),Action=require("./actions"),path=require("path"),fs=require("fs"),Type=require("./actionTypes"),exists_1=require("../services/exists");exports.loadTutorials=loadTutorials;