// Import the `signal` function from Preact Signals for React
import { signal } from '@preact/signals-react';

// Retrieve the previously saved count value from localStorage (if any)
const saved = localStorage.getItem('count');

// Create a reactive signal `count`, initialized with the saved value or 0 if not found
export const count = signal(saved ? parseInt(saved) : 0);

// Subscribe to changes in the `count` signal
// Every time `count` changes, update the value in localStorage
count.subscribe((val) => {
  localStorage.setItem('count', val.toString());
});
