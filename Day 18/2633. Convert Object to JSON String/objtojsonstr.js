var jsonStringify = function(object) {
  if (object === null) {
    return 'null';
  } if (typeof object === 'boolean') {
    return object ? 'true' : 'false';
  } else if (typeof object === 'number') {
    return '' + object;
  } else if (typeof object === 'string') {
    return '"' + object.replace(/"/g, '\\"') + '"';
  } else if (Array.isArray(object)) {
    var items = object.map(function(item) {
      return jsonStringify(item);
    });
    return '[' + items.join(',') + ']';
  } else if (typeof object === 'object') {
    var keys = Object.keys(object);
    var pairs = keys.map(function(key) {
      var value = jsonStringify(object[key]);
      return '"' + key + '":' + value;
    });
    return '{' + pairs.join(',') + '}';
  } else {
    return '';
  }
};
