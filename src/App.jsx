import React from 'react';
import useFilterName from './components/useFilterName';

const App = () => {
  const names = ['ESTHER', 'JOHN', 'GIFT', 'DAVID'];
  const nameToFind = 'GIFT';
  const filteredName = useFilterName(names, nameToFind);

  return (
    <div>
      {filteredName ? (
        <p>Found name: {filteredName}</p>
      ) : (
        <p>Name not found</p>
      )}
    </div>
  );
};

export default App;
