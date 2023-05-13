## How to add a React App on GitHub

* Add the lines ```"homepage": "https://gitname.github.io/repositoryname",``` ```"deploy": "gh-pages -d build",``` in their respective locations:
```json
{
  "name": "my-app",
  "version": "0.1.0",
  "homepage": "https://gitname.github.io/repositoryname",
```
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
```
* Deply withe npm.
```shell
npm run deploy
```
