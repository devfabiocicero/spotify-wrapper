
const search = (query, type) => {
	return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
		.then(data => data.json())
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
