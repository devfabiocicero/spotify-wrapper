
const search = (query, type) => {
	fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
		.then(data => data.json())
};
const searchAlbums = () => {};
const searchArtists = () => {};
const searchTracks = () => {};
const searchPlaylists = () => {};

export {
	search,
	searchAlbums,
	searchArtists,
	searchTracks,
	searchPlaylists,
};
