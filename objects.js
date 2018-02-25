var playlist = { tool: "undertow" };

function updatePlaylist(playlistName, artist, song) {
  return Object.assign(playlistName, { [artist]: song })
}

function removeFromPlaylist(playlistName, artist) {
  delete playlistName.artist
  return playlistName
}
