# liferay-react-babel-preset-preprocess
Babel preset for preprocessing react javascript before running Liferay's NPM Bundler

Liferay's NPM Bundler uses Babel 6.X (at the time of this publication), however you can still
preprocess your files with Babel 7+ before using NPM Bundler, this preset aims to provide a default
set of plugins for Babel 7.X to do the preprocessing.

If you wish to ditch or customize this preset, those are the plugins/presets installed here:

"@babel/plugin-proposal-class-properties": "^7.1.0",

"@babel/plugin-proposal-decorators": "^7.1.2",

"@babel/plugin-proposal-nullish-coalescing-operator": "^7.0.0",

"@babel/plugin-proposal-optional-chaining": "^7.0.0",

"@babel/plugin-transform-jscript": "^7.0.0",

"@babel/plugin-transform-member-expression-literals": "^7.0.0",

"@babel/plugin-transform-property-literals": "^7.0.0",

"@babel/plugin-transform-property-mutators": "^7.1.0",

"@babel/preset-env": "^7.1.5",

"@babel/preset-flow": "^7.0.0",

"@babel/preset-react": "^7.0.0"

you can just "npm install" those :)