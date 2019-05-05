Short description:

* `npm run build` - to build `src` folder files into `dist` folder.
* `npm run build:dev` - to make build after `npm run build` and skip copy `node_modules`
* `npm run start` - to start `dist` project after build.
* `npm run lint` - to check for linter problems (code style - airbnb)
* `npm run lint:fix` - to fix linter problems
* `npm run test` - to run tests for all `*.test.js` files

***

* use `Bootstrap 4` framework (`jQuery` as its dependency).
* use `Babel 7` to compile ES2015+ js code.
* use `Webpack 4` to make js bundle from source files
* use `rimraf` to remove `./dist` folder before every build
* use `copyfiles` to copy files to `./dist` folder
* use `jest` as test runner

***

To run this project - run this commands one by one: 

`npm install`,`npm run build`, `npm run start` 
