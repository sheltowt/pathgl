# PathGL [![Build Status](https://travis-ci.org/adnan-wahab/pathgl.png?branch=master)](https://travis-ci.org/adnan-wahab/pathgl) [![dependency Status](https://david-dm.org/adnan-wahab/pathgl/status.png?theme=shields.io)](https://david-dm.org/adnan-wahab/pathgl#info=dependencies) [![devDependency Status](https://david-dm.org/adnan-wahab/pathgl/dev-status.png?theme=shields.io)](https://david-dm.org/adnan-wahab/pathgl#info=devDependencies)
Pathgl sits between d3 and the dom and lets you draw to webgl instead of svg.

## Getting Started
Download the [latest version](http://adnanwahab.org/pathgl/dist/pathgl.zip) and include in your html.

Or link directly to the latest release, copy this snippet: 
```html
<script src="http://adnanwahab.com/pathgl/dist/pathgl.min.js" charset="utf-8"></script>
```

or Using npm and running `npm install pathgl --save`

## Usage

If webgl is available then your circles will be WEBGL, if not, fallback to svg.
```html
<script src="http://adnanwahab.com/pathgl/dist/pathgl.min.js" charset="utf-8"></script>
<script>
d3.select('canvas').call(pathgl)
.append('circle')
.attr('r', 100)
.attr('cx', 50)
.attr('cy', 50)
</script>
```
