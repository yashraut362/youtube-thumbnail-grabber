# youtube-thumbnail-grabber 

> Provides a link to all qualities of YouTube thumbnails (maximum, high quality, standard quality, default).

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i youtube-thumbnail-grabber
```

## Usage

There are two parameters required. The first is the YouTube link, and the second is the quality.

```js
const grabLink = require('youtube-thumbnail-grabber')

console.log(grabLink('https://www.youtube.com/watch?v=a3ICNMQW7Ok', 'max'))

//for maximum quality pass 'max'
//for high quality pass 'hq'
//for medium quality pass 'mq'
//for standard quality pass 'sd'
//for default quality pass 'default'
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>


### License
Released under the [MIT License](LICENSE).

***
