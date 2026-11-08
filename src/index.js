#!/usr/bin/env node

import { program } from 'commander';
import pkg from '../package.json' with { type: 'json' };
import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import 'mathjax-full/js/input/tex/ams/AmsConfiguration.js';

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX({
  packages: ['base', 'ams', 'autoload', 'require']
});

const svg = new SVG({
  fontCache: 'local'
});

const html = mathjax.document('', {
  InputJax: tex,
  OutputJax: svg
});

export function renderToSvg(input) {
  const node = html.convert(input, {
    display: true
  });

  const svg = adaptor.innerHTML(node);
  return svg;
}

program
  .description('Render MathJax to SVG')
  .version(pkg.version)
  .argument('<input>', 'MathJax formula to render to SVG')
  .action((input, options) => {
    try {
      const svg = renderToSvg(input);
      process.stdout.write(svg);
    } catch (err) {
      process.stderr.write(err.message + '\n');
      process.exit(1);
    }
  })
  .parse(process.argv);
