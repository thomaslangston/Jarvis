//Eliza bot

var keywords;

var rank;

var rules;

var transform;

var input;

var output;

var log = [];

var start = function(){

};

var respond = function(input){
  log[log.length] = input;

  return log;
}

var end = function(){

};

exports.respond = respond;
