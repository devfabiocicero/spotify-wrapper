
//getAlbum
//getAlbumTracks

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {
  getAlbum,
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

    //verify the receive data from the promise
    it('should receive the correct data from the promise', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      album.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
});
