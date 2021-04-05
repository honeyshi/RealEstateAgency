import { resolve as _resolve } from 'path';

export const resolve = {
  extensions: ['.tsx', '.ts', '.js', '.svg'],
  alias: {
    root: _resolve(__dirname, 'src'),
    app: 'root/app',
    core: 'root/core',
    data: 'root/data',
    icons: 'root/icons',
    pageParts: 'root/pageParts',
    shared: 'root/shared',
  },
};
