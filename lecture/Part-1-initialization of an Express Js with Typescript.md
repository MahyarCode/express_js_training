# Initializing of an ExpressJs with Typescript

In this lecture, we are going to learn the application of **Typescript** with the help of **Express Js**.

**TypeScript** is a strongly typed, object-oriented programming language developed by Microsoft. It is a superset of JavaScript, meaning that all valid JavaScript code is also valid TypeScript code.

**Express.js**, often referred to simply as Express, is a minimal and flexible back-end web application framework for Node.js. It is designed to simplify the process of building web applications and APIs by providing a robust set of features for handling HTTP requests and responses, routing, middleware, and more.

## Initializing package.json

In the beginning, inside the folder that you've created its repository, open git bash and run:

```bash
npm init
```

it will ask you question about `package name`, `version` (recommended 0.0.1), `description`, `main` (e.g: `file_name.ts`), and etc.

After the command is executed, it will create `package.json` file in your directory.

After that, create a `.gitignore` file and add the following codes:

```
# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-store/

# TypeScript
# Compiled JavaScript files
dist/
build/
*.js
*.d.ts
*.tsbuildinfo

# Environment variables
.env
.env.local
.env.*.local

# IDE and editor specific files
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Logs
logs/
*.log

# Test coverage
coverage/

# Misc
.DS_Store
Thumbs.db
```

## Adding `Express` Packages

You can install **Dependencies** (will be explained in the following) packages by writing the following command:

```bash
npm install package_name --save
```

`--save` is optional.

Right after the creation of `package.json` you'll need install the packages of **Express Js** for your project. in [ExpressJs](https://expressjs.com/) website there is a command line which you will run in your git bash:

```bash
npm install express --save
```

After running the above command, `package-lock.json` is created which contains all the packages needed to implement the project.

## Dependencies

_Dependencies_ refer to external packages or modules that the project relies on to function correctly. These are typically managed using a package manager like npm and are defined in the package.json file.

we have two different types of dependencies:

### Dependencies (runtime dependencies):

- These are packages essential for the application to run in a production environment.

- When an application is deployed, these dependencies are installed to ensure the application can execute all its intended functionality.

### DevDependencies (development dependencies):

- These are packages required only during the development process and are not necessary for the application to run in production.

- In a TypeScript project, `typescript` itself is a common `devDependency` because it's used to transpile TypeScript code into JavaScript, which is then executed.

- These dependencies facilitate development, enhance code quality, and aid in testing but are not included in the final production build.

In conclusion of dependencies, `express` is a type of `Dependencies`, and `typescript` is a type of `devDependencies`.

`typescript` used to run the program in local computer and `express` packages translates **Typescript** code into readable version for applications and web softwares like Chrome or Firefox.

## Adding devDependencies

You can install **devDependencies** packages by writing the following command:

```bash
npm install --save -dev package_name
```

or

```bash
npm i -D package_name
```

Now, it's time to start adding the `typescript` _devDependencies_ in express type. In the [NPM](https://www.npmjs.com/package/@types/express/v/5.0.2) website when you look for `@types/express`, you will see that there is `express` package for `typescript`. (Note: if the package is not in the website, it is either old or there is no package for this operation)

In the following command you will add `typescript` **devDependencies** in **express** type:

```bash
npm i -D typescript @types/express
```

Immediately after this command, in `package.json` file, in the last object, `devDependencies` is added. it has `@types/express` and `typescript` versions.

It will translate the development into Js which will be run in the production.

**Note: Please be careful about the exact spelling of the package names and command. there is a possibility of installing virus using wrong spelling (e.g: expres instead of express)**

## `npx` Command

In the packages we've installed for typescript so far, they have their own specific commands. For example, if you write the following command on git bash:

```bash
tsc ---version
```

you will face `bash: tsc: command not found`

now let's give the following command a try

```bash
npx tsc --init
```

(`tsc` is for the **Typescript Compiler**. Above command will create `tsconfig.json` file in your directory)

- what `npx` exactly does?
  - it takes the `package.json` and look through **Dependencies** and **devDependencies**, then it finds the command you wrote and it will run it.

## Importing Package in Node.js

Node.js supports two primary module systems for importing packages: CommonJS and ECMAScript Modules (ESM). The method of importing depends on the module system being used.

1. **CommonJS Modules (CJS)** using `require`:
   This is the traditional and default module system in `Node.js`.

   - **Importing Local Modules**: For modules you create within your project.

   ```
   const myModule = require('./path/to/myModule.js');
   ```

   - **Importing Core Modules**: For built-in Node.js modules like fs (file system), http, etc.

   ```
   const fs = require('fs');
   ```

   - **Importing Third-Party Modules**: For packages installed via npm.

   ```
   const express = require('express');
   ```

2. **ECMAScript Modules (ESM)** using `import`:
   This is the modern standard for JavaScript modules and uses import statements. To use ESM, you typically need to set "type": "module" in your package.json file or use the .mjs file extension.

   **Note**: before you `import` packages in this way, you should add `"type": "module"` to your `package.json` file. All `.js` files will then be treated as ESM.

   - **Named Imports**: To import specific named exports from a module.

   ```
    import { myFunction, myVariable } from './path/to/myModule.js';
   ```

   - **Default Imports**: To import the default export from a module.

   ```
   import defaultExport from './path/to/myModule.js';
   ```

   - **Namespace Imports**: To import all exports from a module as a single object.

   ```
   import * as myModule from './path/to/myModule.js';
   ```

   - **Side-Effect Imports**: To execute the code in a module without importing any specific exports.

   ```
   import './path/to/myModule.js';
   ```

## Adding tsconfig

There is this [repository](https://github.com/tsconfig/bases) of tsconfigs which wrote about all the configs you can add its `devDependencies`. For example, you want to add `node22` config:

```bash
npm i -D @tsconfig/node22
```

Right after executing the command, you should add `"extends": "@tsconfig/node22/tsconfig.json"` as the first key in `tsconfig.json` file.

In the github, in front of **Node 22** title, there is `tsconfig.json` written in blue color font. Click on it.
In the new page, you will see what **Node 22** has. In `compilerOptions` there are defined keys.

**Note**: In `tsconfig.json` in `compilerOptions` object, similar keys are defined compare to what you saw in **Node 22 tsconfig.json on Github**, just delete all of them. Because there are already exist in `@tsconfig/node22`.

Additionally, delete the `jsx` from `compilerOptions` in `tsconfig.json`; after that, take a look at `lib` key. Just add `"ES6"` and `"DOM"` as its elements. It will help your **.ts file** to be executed.

Next, you should uncomment (Ctrl + K + U) `"rootDir": "./src"` and `"outDir" : "./dist"` in `tsconfig.json`. (To comment a line: Ctrl + K + C)

Lastly, in `tsconfig.json` add these two **keys** after `extends` and `compilerOptions` keys:

1. `"include": ["**/*.tx"]`
2. `"exclude": ["dist"]`

We also need another package as we are working with `node.js` which is called `node`:

```bash
npm i -D @types/node
```

it introduces all the built-in methods in **Javascript** to **Typescript**.

## Last Thing to do

In previous we uncommented our **Root Directory** as `"rootDir": "./src"`. Therefore, in the directory create a new folder called `src`, after that, create a **.ts file** like `file_name.ts` in it.

In the file, try to log something like the following:

```
const firstConfig = 'Our first config is configured! Congrats!'
console.log(firstConfig)
```

In git bash, run the following command

```bash
npx tsc
```

A new folder is created called `dist`. In the folder, there is `file_name.js` file with exact name which is the Javascript translated version of your typescript code in `file_name.ts`.

**Note**: Do not touch `.js` file in `dist` folder.

To run your code in bash, type:

```bash
node ./dist/file_name.js
```

## Additional tips

Instead of writing above command, there is a runner for typescript called [ts-node](https://nodejs.org/en/learn/typescript/run). It runs our code in a very simpler and faster way. But first we need to install its package first:

```bash
npm i -D ts-node
```

After you installed the package, open `package.json`. in `scripts` object, add `"dev": "ts-node ./src/file_name.ts"`

Now, if you only write this command:

```bash
npm run dev
```

It will execute the **.ts** file you specified in the `dev` key.

Additionally, you can also execute the Javascript version `file_name.js` in `dist` using this technique. Again, in `scripts` object, add `"prod": "tsc && node ./dist/file_name.js"`.

Then run:

```bash
npm run prod
```

## Final Hints For Part-1:

So far, we Initialized our first Express Js with Typescript project. Like a pro programmer we want to push our project in the repository on Github.

You may or may not face this error:

```bashe
warning: in the working copy of 'package-lock.json' LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json' LF will be replaced by CRLF the next time Git touches it

```

This is a **Line Feed** error; but what exactly is it?

- **LF (Line Feed)**: Represented by the single character sequence `\n`, LF is the **Standard Line Ending** used in Unix-based systems like _Linux_ and _macOS_

- **CRLF (Carriage Return Line Feed)**: Represented by the two-character sequence `\r\n`, CRLF is the **Standard Line Ending** used in _Windows_

Now, in our directory we will create a new file called `.gitattributes`. This file, placed in the project's root, allows for more granular control over line endings for specific file types within a repository.

In the `.gitattributes` file:

- add `text eol = lf` if you are using _Linux_ or _macOS_.
- add `text eol = crlf` if you are using _Windows_.

  (**Note**: as some programmers who love Linux and work with Windows, you can add `text eol = lf` if you are working with windows :D )
