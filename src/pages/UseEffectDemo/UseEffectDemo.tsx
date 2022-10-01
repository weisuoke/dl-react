import React, { useState, useEffect } from 'react';

// https://javascript.plainenglish.io/react-hooks-useeffect-and-its-different-use-cases-master-in-2-minutes-a71f4af212bb

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [effectType, setEffectType] = useState('');

  useEffect(() => {
    console.log('On Component Mount');
    setEffectType('Only one time on Component Mount (On First Render of this component)');
  }, []);

  useEffect(() => {
    console.log('On Component Mount / On Count Update');
    setEffectType('On Component Mount (On first render of this component) / On Count Update');
  }, [count]);

  useEffect(() => {
    console.log('On Component Mount / Update anything in this component');
    setEffectType(
      'On Component Mount (On first render of this component) / Update anything in this component'
    );
  });

  useEffect(
    () => () => {
      console.log('On Component Mount / On count update / On component Unmount');
      setEffectType(
        'On Component Mount (On first render of this component) / On count update / On component Unmount'
      );
    },
    [count]
  );
  useEffect(
    () => () => {
      console.log('On Component Mount / Unmount');
      setEffectType('On Component Mount (On first render of this component) / Unmount');
    },
    []
  );

  return (
    <div>
      <p>COUNTER: {count}</p>
      <p>EFFECT TYPE: {effectType}</p>
      {/* Here, 'effectType' is our state variable */}
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
};

export default UseEffectDemo;
