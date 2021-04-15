---
id: authenticate
title: Authenticate
---

## Authenticate

You will be asked to input your email & password. Choose your default project afterwards.

```js title="Login using Qore Cli"
npx @feedloop/qore-cli login
```

## Generate Project
After you can login using Email And password, you can generate your project with this comand

``` js title="Generate Your Project"
npx @feedloop/qore-cli create-project --template https://github.com/feedloop/qore-next-template.git <your-new-project-name>
```

If you start a new project, this is the recommended way to setup a qore project.

This command will create a new project for you, including a starter-kit project selected (in this case, [feedloop/qore-next-template](https://github.com/feedloop/qore-next-template.git)) on your current working directory. This starter project includes common SDK initialization that should get you started.

Once created, navigate to your project from your terminal to install the dependencies using `$ npm install`. Hit `$ npx next dev` to start running your project locally.

Open this url from your browser and you should see your email being printed `http://localhost:3000`. Browse the template code to see how it is done.

![Up the application](https://sdk-docs.qorebase.io/images/localhost-3000-7537c1e8.png)

## Project structure

Assuming you generate your comand and named your site `feedloop web`, you will see the following files generated under a new directory `feedloop web`:

```sh
feedloop web
├── qore-next-template
│   ├── _app.js
│   ├── index.js
├── .gitignore
├── README.md
├── package.json
├── qore-env.d.ts
├── qore.config.json
├── qore.schema.json
├── qoreContext.js
└── yarn.lock
```
