var throttle = function(fn, t) {
    let timeoutId = null, restTime = 0;
    return function(...args) {
        const currentTime = Date.now();
        const delay = Math.max(0, restTime - currentTime);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => { 
            fn(...args);
            restTime = Date.now() + t;
        }, delay);
    }
};
