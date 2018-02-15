var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
    for (var i in library.playlists) {
      var playlists = library.playlists[i];
      var id = playlists.id;
      var name = playlists.name;
      var trackCount = playlists.tracks.length;
    
      console.log(`${id}: ${name} - ${trackCount} tracks`);
      }
    }
printPlaylists(library)

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
    for (var key in library.tracks){
        var track = library.tracks[key];
        var id = track.id;
        var name = track.name;
        var artist = track.artist;
        var album = track.album;
        console.log (`${id}: ${name} by ${artist} (${album})`)
    }
}
printTracks(library)

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model Vi    ew Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) { 
    var playlist = library.playlists[playlistId];
    if (!playlist) {
        console.log(`Playlist ${playlistId} doesn't exist`);
        return;
    }
    var name = playlist.name;
    var trackCount = playlist.tracks.length;

    console.log(`${playlistId}: ${name} - ${trackCount} tracks`);
    
    for (var key in playlist.tracks){
        var tracks = playlist.tracks[key];
        var tracker = library.tracks[tracks];
        var id = tracker.id;
        var name = tracker.name;
        var artist = tracker.artist;
        var album = tracker.album;
        console.log (`${id}: ${name} by ${artist} (${album})`)
    }
}
printPlaylist("p03")


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
    var addTrack = library.playlists[playlistId].tracks;
    addTrack.push(trackId);
    var playlist = library.playlists[playlistId];
    var id = playlist.id;
    var name = playlist.name;
    var trackCount = playlist.tracks.length;

    console.log(`${id}: ${name} - ${trackCount} tracks`);

    for (var key in playlist.tracks) {
        var tracks = playlist.tracks[key];
        var tracker = library.tracks[tracks];
        var id = tracker.id;
        var name = tracker.name;
        var artist = tracker.artist;
        var album = tracker.album;

        console.log(`${id}: ${name} by ${artist} (${album})`);
    }
}
addTrackToPlaylist("t03", "p01")

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
    var add = library.tracks
    add.t04 = { id: uid(),
                name: name,
                artist: artist,
                album: album
            }
}
addTrack("Tina", "Jorge", "Lighthouse")

// adds a playlist to the library

var addPlaylist = function (name) {
    var add = library.playlists
    add.p03 = { id: uid(),
                name: name,
                tracks:[]
            }
}
addPlaylist("Tina");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}