import { useState } from 'react';

function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            Current Count: {count}
        </p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(0)}>Reset</button>
       </div>
     );
   }
   
   export default Counter;
