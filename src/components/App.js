import React from 'react';
import TopBar from './TopBar';
import InstructionsPanel from './InstructionsPanel';
import PicturesPanel from './PicturesPanel';

const App = () => {
  return (
    <div>
      <TopBar />
      <InstructionsPanel />
      <PicturesPanel />
    </div>
  );
};

export default App;
