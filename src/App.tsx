import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import UseEffectDemo from './pages/UseEffectDemo';

const App = () => {
  console.log('process.env.TEST ===', process.env.REACT_APP_TEST);

  return (
    <div>
      <Routes>
        <Route path="/useEffect_demo" element={<UseEffectDemo />} />
      </Routes>
    </div>
  );
};

export default App;
