## How to add a React App on GitHub

* Install gh-pages. 
```
npm install gh-pages --save-dev
```
* Add the lines ```"homepage": "https://{git-name}.github.io/{repository-name}",```, ```"deploy": "gh-pages -d build",``` in their respective locations:
```diff
{
  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://{git-name}.github.io/{repository-name}",
```
```diff
"scripts": {
+ "deploy-page": "gh-pages -d build",
```
* Deploy withe npm.
```
npm run deploy-page
```
