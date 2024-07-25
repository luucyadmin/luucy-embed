// enable fullscreen mode
// this will hide all the luucy ui stuff
// requires ui (luucy add ui)
ui.fullscreen.enable();
console.log('sample-embed-plugin is running');

// connect to your application
// warning: this will fail (fo ro catch below) when luucy is not beeing embedded
embed
  .connect('sample-embed-plugin')
  .then((app) => {
    // send location changes of the map to your webpage
    // requires map.location (luucy add map.location)
    map.location.onCenterChange.subscribe((center) => {
      const message = { position: { lat: center.latitude, lng: center.longitude, height: center.height } };
      console.log('[onCenterChange] sending update', message);
      app.sendMessage(message);
    });

    // wait for messages from your page ()eg. when you click the button
    app.onMessage.subscribe((message) => {
      // create a global position (WGS84) from the supplied positions
      console.log('[onMessage] received update', message);
      const position = new GlobalPosition(message.latitude, message.longitude);

      // create a marker at the specified location
      // requires map (luucy add map)
      const marker = new map.Marker(position);

      // focus the marker (moves the map to the marker)
      marker.focus();
    });
  })
  .catch((error) => {
    // show notification when the plugion could not connect!
    console.error('Not running in an embedded context:', error);
    // new ui.Notification(ui.danger, error + '').show(false);
  });
