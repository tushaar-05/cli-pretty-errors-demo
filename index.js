
import { prettyError, formatError } from 'cli-pretty-errors';

console.log('\n--- Demo 1: Basic Error Formatting ---');

try {
  throw new TypeError('Cannot read properties of undefined');
} catch (error) {
  prettyError(error);
}

console.log('\n--- Demo 2: Node.js System Error ---');

try {
  throw Object.assign(
    new Error("File doesn't exist"),
    {
      code: 'ENOENT',
      syscall: 'open',
      path: './missing-file.txt'
    }
  );
} catch (error) {
  console.log(formatError(error, { color: false }));
}

console.log('\n--- Demo 3: Custom Error ---');

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DatabaseError';
    this.code = 'DB_CONNECTION_FAILED';
  }
}

const customError = new DatabaseError('Unable to connect to database');

console.log(formatError(customError, {
  color: false,
  hints: true,
  maxFrames: 5
}));

console.log('\n--- Demo 4: Unknown Error ---');

console.log(formatError(
  'Something unexpected happened',
  { color: false }
));
