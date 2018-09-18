
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {
  getAlbum,
  getAlbums,
  getAlbumTracks
} from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {

  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.resolves({
      json: () => ({ album: 'name' })
    })
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {

    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch function', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });

    it('should receive the correct data from the promise', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      album.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {

    it('should call fetch function', () => {
      const albums = getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');

      const albums2 = getAlbums(['4aawyAB9vmqN3uQ7FjRGUa', '4aawyAB9vmqN3uQ7FjRGOp']);
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGUa,4aawyAB9vmqN3uQ7FjRGOp');
    });

    it('should receive the correct data from the promise', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      albums.then(data => expect(data).to.have.eql({ album: 'name' }));
    });
  });

  describe('getAlbumTracks', () => {

    it('should call fetch function', () => {
      const tracks = getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with correct URL', () => {
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');

      const tracks2 = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGOp');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGOp/tracks');
    });

    it('should receive the correct data from the promise', () => {
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGOp');

      tracks.then(data => expect(data).to.have.eql({ album: 'name' }));
    });
  });
});
