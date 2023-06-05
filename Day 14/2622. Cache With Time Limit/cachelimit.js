var TimeLimitedCache = function() {
  this.cache = {};
  this.expirationTimes = {};
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  const currentTime = Date.now();
  const expirationTime = currentTime + duration;

  const hasKey = this.expirationTimes.hasOwnProperty(key);
  const isExpired = hasKey && this.expirationTimes[key] < currentTime;

  this.cache[key] = value;
  this.expirationTimes[key] = expirationTime;

  return hasKey && !isExpired;
};

TimeLimitedCache.prototype.get = function(key) {
  const currentTime = Date.now();
  const expirationTime = this.expirationTimes[key];

  if (!expirationTime || expirationTime < currentTime) {
    return -1;
  }

  return this.cache[key];
};

TimeLimitedCache.prototype.count = function() {
  const currentTime = Date.now();
  let count = 0;

  for (const key in this.expirationTimes) {
    if (this.expirationTimes[key] >= currentTime) {
      count++;
    }
  }

  return count;
};
