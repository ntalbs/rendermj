# Rendermj

Render MathJax formula to SVG.

```console
rendermj --help
Usage: index [options] <input>

Render MathJax to SVG.

Arguments:
  input          MathJax formula to render to SVG

Options:
  -V, --version  output the version number
  -h, --help     display help for command
```

Example usage:
```console
rendermj "f(x) = frac{1}{x}"
<svg style="vertical-align: -0.566ex;" xmlns=...
...
</svg>
```

This package is intended for use with Emacs'
[MathJax-Preview](https://github.com/ntalbs/mathjax-preview). If you
are looking for a batch renderer, please refer to
[render-math](https://www.npmjs.com/package/render-math).
