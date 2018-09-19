
import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

const search = (query, type) => {
	return fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
		.then(toJSON)
};
const searchAlbums = (query) => {
	return search(query, 'album');
};
const searchArtists = (query) => {
	return search(query, 'artist');
};
const searchTracks = (query) => {
	return search(query, 'track');
};
const searchPlaylists = (query) => {
	return search(query, 'playlist');
};

export {
	search,
	searchAlbums,
	searchArtists,
	searchTracks,
	searchPlaylists,
};
