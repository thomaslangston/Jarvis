var config = {
  server : "irc.freenode.net",
  botName : "JarvisBot",
};

var irc = require("irc");
var eliza = require("./eliza/eliza.js");

var jarvis = new irc.Client(config.server, config.botName, { 
  channels : config.channels
});

jarvis.addListener('pm', function (nick, text, message) {
  if(IsAllowedNick(nick)){
    Respond(nick, text, message);  
  }
});

var knowledge = {
  lastSpokeTo : undefined
};

function IsAllowedNick(nick){
  return nick === 'thomaslangston';
}

function Respond(nick, text, message) {
  var testEliza = true;
 
  if( testEliza ) {
    jarvis.say(nick, eliza.respond(text));
  }  
  else if(knowledge.lastSpokeTo) {
    console.log("Error - knowledge based response not implemented.");
  }
  else {
    jarvis.say(nick, "Hello, I don't remember if we've spoke to each other before.");
    jarvis.say(nick, "My name is Jarvis.");
    jarvis.say(nick, "I'm here to help.");
  }
}
