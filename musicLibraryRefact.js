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
             },

    printPlaylists: function () {
                        for (var i in this.playlists) {
                            var playlists = this.playlists[i];
                            var id = playlists.id;
                            var name = playlists.name;
                            var trackCount = playlists.tracks.length;
                            console.log(`${id}: ${name} - ${trackCount} tracks`);
                        }
                    },
    printTracks: function () {
                        for (var key in this.tracks){
                            var track = this.tracks[key];
                            var id = track.id;
                            var name = track.name;
                            var artist = track.artist;
                            var album = track.album;
                            console.log (`${id}: ${name} by ${artist} (${album})`)
                        }
                    },
                    
    printPlaylist: function (playlistId) { 
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
                    },
    addTrackToPlaylist: function (trackId, playlistId) {
                            var addTrack = this.playlists[playlistId].tracks;
                            addTrack.push(trackId);
                            var playlist = this.playlists[playlistId];
                            var id = playlist.id;
                            var name = playlist.name;
                            var trackCount = playlist.tracks.length;
                            console.log(`${id}: ${name} - ${trackCount} tracks`);

                            for (var key in playlist.tracks) {
                                var tracks = playlist.tracks[key];
                                var tracker = this.tracks[tracks];
                                var id = tracker.id;
                                var name = tracker.name;
                                var artist = tracker.artist;
                                var album = tracker.album;
                                console.log(`${id}: ${name} by ${artist} (${album})`);
                            }
                        },
    uid: function() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            },

    addTrack: function (name, artist, album) {
                var add = this.tracks
                add[this.uid()] = { 
                    id: this.uid(),
                    name: name,
                    artist: artist,
                    album: album
                }
            },

    addPlaylist: function (name) {
                    var add = this.playlists
                    add[this.uid()] = { 
                        id: this.uid(),
                        name: name,
                        tracks:[]
                    }
                }
}

library.printPlaylists();
library.printTracks()
library.printPlaylist("p01")
library.addTrackToPlaylist("t03", "p01")
library.addTrack("Tina", "Jorge", "Lighthouse")
library.addPlaylist("Tina");