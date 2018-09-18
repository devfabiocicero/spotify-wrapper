
const getAlbum = id => {
  return fetch(`https://api.spotify.com/v1/albums/${id}`)
    .then(data => data.json());
};

const getAlbums = ids => {
  return fetch(`https://api.spotify.com/v1/albums/?ids=${ids}`)
    .then(data => data.json());
};

const getAlbumTracks = id => {
  return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`)
    .then(data => data.json());
};

export {
  getAlbum,
  getAlbums,
  getAlbumTracks
}
