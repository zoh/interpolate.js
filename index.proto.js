
(function (module, window) {

  if (module) {
    module.exports = interpolate;
  } else {
    window.interpolate = interpolate;
  }

  function interpolate(string, data) {
    if (typeof string !== 'string') {
      throw "first params must be string.";
    }
    if (typeof data === "object") {
      var regExpRes = string.match(/\${(.*?)}/g);
      (regExpRes || []).forEach(function (r) {
        var expr = r.slice(2, -1);
        with (data) {
          string = string.replace(r, eval(expr));
        }
      });
    } else {
      data = Array.prototype.slice.call(arguments, 1);
      data.forEach(function (param) {
        string = string.replace(/\?(?!\/)/, param);
      });
      string = string.replace('?/', '?');
    }
    return string;
  }

  String.prototype.format = function (/*params*/) {
    var data = Array.prototype.slice.call(arguments);
    return interpolate.apply(null, [this.toString()].concat(data))
  };
})((typeof module !== "undefined" && module) || window);