import {join} from 'path';

import {isWindows} from './system';
import fileExists from 'node-file-exists';

export default function configRunner(name: string, runner: string, dir: string): () => any {
  // test runner dir
  let flatDep = join(
    dir, 'node_modules', runner, 'package.json'
  );
  let treeDep = join(
    dir, 'node_modules', name, 'node_modules', runner, 'package.json'
  );

  let runnerMain;
  let runnerRoot;
  if (fileExists(flatDep)) {
    runnerMain = require(flatDep).main;
    runnerRoot = flatDep;
  } else if (fileExists(treeDep)) {
    runnerMain = require(treeDep).main;
    runnerRoot = treeDep;
  } else {
    let message = 'Error loading test runner. Post an issue. https://github.com/coderoad/atom-coderoad/issues';
    console.log(message);
    throw message;
  }

  // fix main path for Windows
  let slash = isWindows ? '\\' : '/';
  runnerMain = join.apply(null, runnerMain.split(slash));
  // trim root path to folder
  runnerRoot = runnerRoot.substring(0, runnerRoot.lastIndexOf(slash));

  let pathToMain = join(runnerRoot, runnerMain);

  if (!!require(pathToMain).default) {
    return require(pathToMain).default;
  } else {
    return require(pathToMain);
  }
}
