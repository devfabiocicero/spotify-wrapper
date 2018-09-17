
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify Wrapper', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch'); //Stub on fetch method
        promise = fetchedStub.resolves({
            json: () => ({ album: 'name' })
        });
    });

    afterEach(() => {
        fetchedStub.restore();
    });
    
    describe('smoke tests', () => {

        it('should exist the search method', () => {
            expect(search).to.exist;
        });

        it('should exist the searchAlbums method', () => {
            expect(searchAlbums).to.exist;
        });

        it('should exist the searchArtists method', () => {
            expect(searchArtists).to.exist;
        });

        it('should exist the searchTracks', () => {
            expect(searchTracks).to.exist;
        });

        it('should exist the searchPlaylists', () => {
            expect(searchPlaylists).to.exist;
        });
    });

    describe('Generic Search', () => {

        it('should call fetch function', () => {
            
            const artists = search();
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should receive the correct url to fetch', () => {

            context('passing one type', () => {
                const artists = search('Incubus', 'artist');
                    expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    
                const albums = search('Incubus', 'album');
                    expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
            });

            context('passing more than one type', () => {
                const artistsAndAlbums = search('Incubus', ['artist', 'album']);
                expect(fetchedStub).to.have.been
                    .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
            });
        }); 

        it('should return the JSON Data from the Promise', () => {
            const album = search('Incubus', 'album');

            album.then((data) => {
                expect(data).to.be.eql({ album: 'name' });
            });
        });
    });

    describe('Albums Search', () => {

        it('should call fetch function', () => {
            const albums = searchAlbums('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should receive the correct url to fetch', () => {
            const albums = searchAlbums('Incubus');
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

            const albums2 = searchAlbums('Muse');
            expect(fetchedStub).to.have.been
                .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
        });
    });

    describe('Artists Search', () => {
        it('should call fetch function', () => {
            const artists = searchArtists('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should receive the correct url to fetch', () => {
            const artists = searchArtists('Incubus');
            expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

            const artists2 = searchArtists('Muse');
            expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
        });
    });

    describe('Tracks Search', () => {
        
        it('should call fetch function', () => {
            const tracks = searchTracks('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should receive the correct url to fetch', () => {
            const tracks = searchTracks('Incubus');
            expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track')

            const tracks2 = searchTracks('Muse');
            expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
        });
    });

    describe('Playlists Search', () => {

        it('should call fetch function', () => {
            const playlists = searchPlaylists('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('should receive the correct url to fetch', () => {
            const playlists = searchPlaylists('Incubus');
            expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

            const playlists2 = searchPlaylists('Muse');
            expect(fetchedStub).to.have.been
            .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
        }); 
    });
}); 