/* global fetch */

import { API_URL } from './config';
import { toJSON } from './utils';

const getAlbum = id => {
  return fetch(`${API_URL}/albums/${id}`).then(toJSON);
};

const getAlbums = ids => {
  return fetch(`${API_URL}/albums/?ids=${ids}`).then(toJSON);
};

const getAlbumTracks = id => {
  return fetch(`${API_URL}/albums/${id}/tracks`).then(toJSON);
};

export {
  getAlbum,
  getAlbums,
  getAlbumTracks
}
