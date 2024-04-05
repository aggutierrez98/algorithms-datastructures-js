// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) return cache[args];
        const result = fn.apply(this, args)
        cache[args] = result;
        return result;
    }
}

function fib(n) {

    // MY SOLUTION
    // if (n === 0) return 0;
    // if (n === 1) return 1;
    // return fib(n - 1) + fib(n - 2)

    // SOLUTION 1 (Iterative)
    // O(n) Complexity
    // const result = [0, 1];
    // for (let i = 2; i <= n; i++) {
    //     const a = result[i - 1]
    //     const b = result[i - 2]
    //     result.push(a + b);
    // }
    // return result[n];

    // SOLUTION 2 (Recursive)
    // O(2^n) Complexity
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2)

    // ANOTHER SOLUTION (Recursive + Memoization in function)
    // O(n) Complexity
    // memo = memo || {}
    // if (memo[n]) return memo[n]
    // if (n < 2) return n;
    // return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}

// SOLUTION 3 (Recursive + Memoization)
// O(n) Complexity
fib = memoize(fib);

module.exports = fib;


