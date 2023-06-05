var timeLimit = function(fn, t) {
  return async function(...args) {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    try {
      // Race the original function's promise against the timeout promise
      return await Promise.race([fn(...args), timeoutPromise]);
    } catch (error) {
      throw error;
    }
  };
};
