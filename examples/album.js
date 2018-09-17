global.fetch = require('node-fetch');

import { searchAlbums } from '../src/main';

const albums = searchAlbums('Incubus');
// console.log(albums);
albums.then(data => console.log(data));
