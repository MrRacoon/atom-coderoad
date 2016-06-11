import {join} from 'path';
import {tutorialConfig} from './utils/config';
import {TUTORIAL_SET} from './types';
import configPaths from './utils/config-paths';

const _tutorial: CR.Tutorial = {
  name: null,
  info: null,
  pages: [],
  packageJson: null,
};

export default function tutorialReducer(
  t = _tutorial, action: Action
): CR.Tutorial {
  switch (action.type) {

    case TUTORIAL_SET:
      const {name, dir} = action.payload;

      // get tutorial package.json
      const packagePath: string = join(dir, 'node_modules', name);
      const packageJson: PackageJson = require(join(packagePath, 'package.json'));

      const config: Tutorial.Config = tutorialConfig(packageJson, dir);
      const coderoadJsonPath = join(packagePath, packageJson.main);
      let {info, pages} = require(coderoadJsonPath);

      // configure test paths to absolute paths
      pages = configPaths(dir, name, config, pages || []);

      // return tutorial (info, pages) & tutorial package.json
      return {
        name: packageJson.name,
        info,
        pages,
        packageJson,
        config,
      };

    default:
      return t;
  }
}
