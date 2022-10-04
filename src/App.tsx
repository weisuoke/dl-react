import * as React from 'react';
import 'reflect-metadata';
import { Routes, Route } from 'react-router-dom';
import UseEffectDemo from './pages/UseEffectDemo';
import DI from './pages/DI/DI';

const App = () => {
  console.log('process.env.TEST ===', process.env.REACT_APP_TEST);

  return (
    <div>
      <Routes>
        <Route path="/useEffect_demo" element={<UseEffectDemo />} />
        <Route path="/di" element={<DI />} />
      </Routes>
    </div>
  );
};

export default App;
