

const error = new TypeError(
  "Cannot read properties of undefined (reading 'name')"
);

console.log('\n========== BEFORE: Native Node.js Error ==========\n');

// Default Node.js error formatting
console.error(error);

console.log('\n========== AFTER: cli-pretty-errors ==========\n');

// Your package's formatting and diagnostic suggestions
prettyError(error);
