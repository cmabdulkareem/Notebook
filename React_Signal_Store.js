import { signal } from '@preact/signals-react';

const saved = localStorage.getItem('count');
export const count = signal(saved ? parseInt(saved) : 0);

count.subscribe((val) => {
  localStorage.setItem('count', val.toString());
});