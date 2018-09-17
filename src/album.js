
const getAlbum = id => {
  return fetch(`https://api.spotify.com/v1/albums/${id}`)
    .then(data => data.json());
};
const getAlbumTracks = () => {};

export {
  getAlbum,
  getAlbumTracks
}
