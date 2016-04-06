import commandLine from '../command-line';

export function npmVersionThreeOrLater(): Promise<CR.SetupWarning> {
  const minVersion = 3;
  return new Promise((resolve, reject) => {
    let threeOrLater: Promise<boolean> = commandLine('npm', '-v').then((res: string) => parseInt(res, 10) >= minVersion);
    if (!threeOrLater) {
      reject({
        key: 'updateNpm',
        title: 'Please update to NPM version 3+',
        click: null,
        text: 'Open a terminal and run:\n `npm install npm -g`',
        button: 'Update NPM',
        verify: 'NPM updated to version 3 or later'
      });
    } else {
      resolve();
    }
  });
}
