# Pug Angular 2 HTML loader for webpack

This enables using [`pug-plugin-ng`](https://github.com/tycho01/pug-plugin-ng) through Webpack, see that repo for details. In short, this allows writing Pug as close to HTML as possible, making it terser and facilitating conversion between Pug and HTML. This is particularly desirable when using Angular 2, because its different non-standard uses of HTML attributes required workarounds polluting Pug with additional brackets/commas and `=''`.

## Why not just use [`pug-html-loader`](https://github.com/willyelm/pug-html-loader)?

Because you cannot pass `pug-plugin-ng` into its options; Webpack query JSON serialization kills functions, see [here](https://github.com/pugjs/pug-lexer/pull/69#issuecomment-241119765).

## Installation

```
npm i --saveDev pug-ng-html-loader@github:tycho01/pug-ng-html-loader
// future:
npm i --saveDev pug-ng-html-loader
```

## Usage

`myComp.pug`:
```
.items(
  *ngFor="#item of items"
  [ngClass]="{'active': isActive}"
)
  p {{item}}
```

`myComp.ts`:
```
@Component({
  template: require('./myComp.pug'),
})
```

In your `webpack.config.js` file, using `pug-ng-html-loader`:
```
module.exports = {
  // your config settings ...
  module: [
    //your modules...
    loaders: [
      { test: /\.pug$/, loader: 'pug-ng-html' },
    ]
  ]
};
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
