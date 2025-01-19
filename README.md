# waifu-haven.ddns.net API

[waifu-haven.ddns.net](http://waifu-haven.ddns.net) API Client for JavaScript.

[![NPM](https://nodei.co/npm/waifuhaven-api.js.png)](https://nodei.co/npm/waifuhaven-api.js/)

## Install

* Requirement: Node.js v20 or higher

```sh
$ npm install waifuhaven-api.js
```

## APIKEY

Discord: [https://discord.gg/GhJHfDm4wb](https://discord.gg/GhJHfDm4wb)

Join discord server and get your apikey with **/apikey create** slash command for free!

## Usage

### SFW

```js
const { AttachmentBuilder } = require("discord.js");
const ImageApiClient = require('waifuhaven-api.js');
const imageClient = new ImageApiClient('Your-Api-Key');

imageClient.getImage('change-here-to-the-desired-category', 'sfw')
    .then(base64Image => {

        // Salva a imagem como um arquivo

        const buffer = Buffer.from(base64Image, 'base64');
        const attachment = new AttachmentBuilder(buffer, { name: 'image.jpg' });
        interaction.editReply({ files: [attachment] });

        console.log('Imagem salva com sucesso');
    })
    .catch(error => {
        console.error('Erro ao obter a imagem:', error.message);
    });
```

#### SFW Categories

- waifu
- oppai
- maid
- uniform
- marin-kitagawa
- mori-calliope
- raiden-shogun
- kamisato-ayaka
- rushia
- kurumi

### NSFW

```js
const { AttachmentBuilder } = require("discord.js");
const ImageApiClient = require('waifuhaven-api.js');
const imageClient = new ImageApiClient('Your-Api-Key');

imageClient.getImage('change-here-to-the-desired-category', 'nsfw')
    .then(base64Image => {

        // Salva a imagem como um arquivo

        const buffer = Buffer.from(base64Image, 'base64');
        const attachment = new AttachmentBuilder(buffer, { name: 'image.jpg' });
        interaction.editReply({ files: [attachment] });

        console.log('Imagem salva com sucesso');
    })
    .catch(error => {
        console.error('Erro ao obter a imagem:', error.message);
    });
```

#### NSFW Categories

- waifu
- hentai
- ass
- milf
- blowjob
- redo-of-healer