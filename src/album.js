/* global fetch */

import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

const getAlbum = id => {
  return fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON);
};

const getAlbums = ids => {
  return fetch(`${API_URL}/albums/?ids=${ids}`, HEADERS).then(toJSON);
};

const getAlbumTracks = id => {
  return fetch(`${API_URL}/albums/${id}/tracks`, HEADERS).then(toJSON);
};

export {
  getAlbum,
  getAlbums,
  getAlbumTracks
}
