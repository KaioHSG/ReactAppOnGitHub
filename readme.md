## How to add a React App on GitHub

* Install gh-pages. 
```console
npm install gh-pages
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
* Deploy withe gh-pages.
```console
npm run deploy-page
```
