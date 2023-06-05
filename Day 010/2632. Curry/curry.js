var curry = function(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      // If the number of arguments is equal to or greater than the original function's arity,
      // we invoke the original function with the provided arguments and return the result.
      return fn(...args);
    } else {
      // If the number of arguments is less than the original function's arity,
      // we return a new curried function that will accept the remaining arguments.
      return function(...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
};
