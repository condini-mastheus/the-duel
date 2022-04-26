# The Duel

<p align="center">
  <a href="https://opensource.org/licenses/MIT" title="License: MIT" >
    <img src="https://img.shields.io/badge/License-MIT-greenbright.svg?style=flat-square">
  </a>
  <a href="https://github.com/prettier/prettier" alt="code style: prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
</p>

---
## Getting Started

To clone and run this template, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/condini-mastheus/the-duel

# Go into the repository
$ cd the-duel

# Install dependencies
$ npm install

# Fire up the project
$ npm start
```

### Client
All your game code lies inside the **/src/client/scripts** folder. All assets need to be inside the **/src/client/assets** folder in order to get copied to `/dist/client` while creating the production build. Do not change the name of the `index.html` and `game.ts` files.

```bash
# Start the local development server (on port 8080)
$ npm run client:dev

# Ready for production?
# Build the production ready code to the /dist/client folder
$ npm run client:build

# Play your production ready game in the browser
$ npm run client:up
```

### Server

All your server code lies inside the **/src/server** folder. We are using [Colyseus](https://colyseus.io/) to handle multiplayer and monitor the application.


```bash
# Start the local colyseus server (on port 2567)
$ npm run server:dev

# Ready for production?
# Build the production ready code to the /dist/server folder
$ npm run server:build

# Serve your production ready colyseus local server
$ npm run server:up
```
## Custom Configurations

### TypeScript Compiler

Change the TypeScript compiler's settings in the tsconfig.json file.

If you are new to TypeScript, you maybe want to set **"noImplicitAny"** to **false**.

You'll find more information about the TypeScript compiler [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

### Typings

You can put your custom type definitions inside typings/**custom.d.ts**.

### Webpack

All webpack configs are in the **webpack** folder.

### Obfuscation

_Obfuscation is disabled by default._

We are using the [webpack-obfuscator](https://github.com/javascript-obfuscator/webpack-obfuscator). Change its settings in webpack/webpack.prod.js if needed. All available options are listed [here](https://github.com/javascript-obfuscator/javascript-obfuscator#javascript-obfuscator-options).

## Useful Links

- [Phaser Website](https://phaser.io/)
- [Phaser 3 Forum](https://phaser.discourse.group/)
- [Phaser 3 API Docs](https://photonstorm.github.io/phaser3-docs/)
- [Official Phaser 3 Examples](http://labs.phaser.io/)
- [Notes of Phaser 3](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/index.html)
- [Colyseus Docs](https://docs.colyseus.io/colyseus/)
- [Project Template](https://github.com/yandeu/phaser-project-template) 
- [Multiplayer with Physics](https://github.com/yandeu/phaser3-multiplayer-with-physics)

## Credits

- A huge thank you to Rich [@photonstorm](https://github.com/photonstorm) for creating Phaser

- A huge thank you to Yannick Deubel [@yandeu](https://github.com/yandeu) for creating this template

- A huge thank you to Endel Dreyer [@endel](https://github.com/endel) for creating Colyseus