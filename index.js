'use strict';

const { declare } = require('@babel/helper-plugin-utils');

const defaultTargets = {
  android: 30,
  chrome: 35,
  edge: 14,
  explorer: 9,
  firefox: 52,
  safari: 8,
  ucandroid: 1,
};

function buildTargets({ additionalTargets }) {
  return Object.assign({}, defaultTargets, additionalTargets);
}

module.exports = declare((api, options) => {
  api.assertVersion(7);

  const {
    modules,
    targets = buildTargets(options),
    removePropTypes,
  } = options;

  if (typeof modules !== 'undefined' && typeof modules !== 'boolean' && modules !== 'auto') {
    throw new TypeError('babel-preset-liferay-react-preprocess only accepts `true`, `false`, or `"auto"` as the value of the "modules" option');
  }

  const debug = typeof options.debug === 'boolean' ? options.debug : false;

  const development = typeof options.development === 'boolean'
    ? options.development
    : api.cache.using(() => process.env.NODE_ENV === 'development');

  const presetEnvModules = (modules === false) ? false : 'auto';

  return {
    presets: [
      [require('@babel/preset-env'), {debug, targets, modules: presetEnvModules, useBuiltIns: "entry"}],
      [require('@babel/preset-flow'), {development}],
      [require('@babel/preset-react'), {development}],
    ],
    plugins: [
      [require('@babel/plugin-proposal-decorators'), {decoratorsBeforeExport: false}],
      [require('@babel/plugin-proposal-class-properties'), {loose: true }],
      [require('@babel/plugin-transform-template-literals'), {spec: true}],
      require('@babel/plugin-proposal-nullish-coalescing-operator'),
      require('@babel/plugin-proposal-optional-chaining'),
      require('@babel/plugin-transform-property-mutators'),
      require('@babel/plugin-transform-member-expression-literals'),
      require('@babel/plugin-transform-property-literals'),
      require('@babel/plugin-transform-jscript')
    ].filter(Boolean),
  };
});