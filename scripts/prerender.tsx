import React, { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { readFile, writeFile } from 'node:fs/promises';
import App from '../src/App';

const output = new URL('../dist/index.html', import.meta.url);
const template = await readFile(output, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error('Expected an empty root in the Vite build before prerendering.');
}
const html = renderToString(<StrictMode><App /></StrictMode>);
await writeFile(output, template.replace(marker, () => `<div id="root">${html}</div>`));
console.log('Prerendered the complete page into dist/index.html.');
