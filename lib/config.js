'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var API_URL = 'https://api.spotify.com/v1';

var TOKEN_API = 'BQDGf_-r1fDb9f4I88etqi2pfoUsDuYivMBuSAHoI6WbuB21TKxtue8-3EnUWYK_M93tN18NExKOJomPJ5hrH_-6luPg9AmWb9pRTE_AK1Lvth-GPOt-mAHQUO7S7x5DpAMpm04';

var HEADERS = {
  headers: new Headers({
    Authorization: 'Bearer ' + TOKEN_API
  })
};

exports.API_URL = API_URL;
exports.HEADERS = HEADERS;