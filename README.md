# dependencies-version
[![version](https://img.shields.io/npm/v/dependencies-version.svg?style=flat-square)](http://npm.im/tsachis/dependencies-version)
[![downloads](https://img.shields.io/npm/dm/dependencies-version.svg?style=flat-square)](http://npm-stat.com/charts.html?package=dependencies-version&from=2018-08-01)
[![MIT License](https://img.shields.io/npm/l/dependencies-version.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Get a list of your runtime dependencies and their versions

## Installation
<code>dependencies-version</code> is available via npm:

<code>$ npm install dependencies-version --save</code>

## Usage
<pre><code>const dependenciesVersion = require('dependencies-version');
// ...
console.log(dependenciesVersion.list());
</code></pre>
