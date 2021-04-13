const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.extend(
  'graphql',
  new class {
    dependencies() {
      return ['graphql', 'graphql-tag']
    }

    webpackRules() {
      return {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    }
  }()
);

mix.js('resources/js/app.js', 'public/js').vue();
mix.graphql();
mix.override(webpackConfig => {

  /*https://github.com/JeffreyWay/laravel-mix/issues/2756
  * BUG: vue-loader doesn't handle file-loader's default esModule:true setting properly causing
  * <img src="[object module]" /> to be output from vue templates.
  * WORKAROUND: Override mixs and turn off esModule support on images.
  * FIX: When vue-loader fixes their bug AND laravel-mix updates to the fixed version
  * this can be removed
  * */
  webpackConfig.module.rules.forEach(rule => {
    if (rule.test.toString() === '/(\\.(png|jpe?g|gif|webp)$|^((?!font).)*\\.svg$)/') {
      if (Array.isArray(rule.use)) {
        rule.use.forEach(ruleUse => {
          if (ruleUse.loader === 'file-loader') {
            ruleUse.options.esModule = false;
          }
        });
      }
    }
  });
});
