import { resolve as _resolve } from 'path';

export const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
  alias: {
    root: _resolve(__dirname, 'src'),
    app: 'root/app',
    core: 'root/core',
    data: 'root/data',
    pageParts: 'root/pageParts',
    shared: 'root/shared',
  },
};
