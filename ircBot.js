var config = {
  server : "irc.freenode.net",
  botName : "JarvisBot",
};

var irc = require("irc");

var jarvis = new irc.Client(config.server, config.botName, { 
  channels : config.channels
});

jarvis.addListener('pm', function (nick, text, message) {
  if(nick === 'thomaslangston'){
    jarvis.say(nick, 'Hello');
  }
});
//Provide talk therapy
