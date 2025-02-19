```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Cleanup function to ensure the effect runs only once
    const cleanup = () => {
      console.log('About page unmounted'); 
    };
    console.log('About page rendered');
    return cleanup;
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```