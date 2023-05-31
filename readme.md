## How to add a [React App](https://create-react-app.dev) on GitHub

* Install [gh-pages](https://www.npmjs.com/package/gh-pages).

```console
npm install gh-pages
```

* Inside `package.json` add the lines `"homepage": "https://your-name.github.io/repository-name",`, `"deploy": "gh-pages -d build",` in their respective locations:

(Don't forget to change the `https://your-name.github.io/repository-name` to your repository link.)

```diff
{
  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://your-name.github.io/repository-name",
```

```diff
"scripts": {
+ "deploy-page": "gh-pages -d build",
```

* Make a build.

```console
npm run build
```

* Deploy withe gh-pages.

```console
npm run deploy-page
```

* In the repository go to `Settings > Pages` and in the `Branch` part select the `gh-pages` and save.
