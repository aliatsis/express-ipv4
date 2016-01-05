var ipaddr = require('ipaddr.js');

module.exports = function() {
  return function(req, res, next) {
    var ip = req.ip;

    Object.defineProperty(req, 'ip', {
      get: function() {
        return ip;
      },
      set: function(val) {
        ip = ipaddr.process(val).toString();
      }
    });

    req.ip = req.ip;
    next();
  };
}