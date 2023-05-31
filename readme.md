## How to add a React App on GitHub

* Create a file called `index.html` in the root of the project and paste the line:

```html
<meta http-equiv="refresh" content="0; url=https://{your-name}.github.io/{repository-name}/build/index.html">
```

(Don't forget to change the `https://{your-name}.github.io/{repository-name}/build/index.html` to your repository link.)

* Inside `package.json` add the line:

```json
"homepage": "https://{your-name}.github.io/{repository-name}/build/",
```

```diff
{
  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://{your-name}.github.io/{repository-name}/build/",
```

(Note that `https://{your-name}.github.io/{repository-name}/build/` is not the same as `index.html`, and don't forget to change it to your repository link.)

* Make a build.

```console
npm run build
```

* Push the files to the repository.
* In the repository go to `Settings > Pages` and in the `Branch` part select the your main branch and save.

Now every time you want to update the page, just create a build and push it to the repository.
