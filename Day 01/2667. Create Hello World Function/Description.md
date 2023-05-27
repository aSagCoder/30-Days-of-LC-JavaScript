# 2667. Create Hello World Function
<h3>Difficulty - </h3>
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 
<hr>
Example 1:
<br>
Input: args = []
<br>
Output: "Hello World"
<br>
<br>
Explanation:
<br>
const f = createHelloWorld();
<br>
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
<hr>
Example 2:
<br>
Input: args = [{},null,42]
<br>
Output: "Hello World"
<br>
<br>
Explanation:
<br>
const f = createHelloWorld();
<br>
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 
<hr>
Constraints:
<br>
- 0 <= args.length <= 10
