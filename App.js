import React from 'react';
import {AuthProvider} from './src/Navigation/AuthProvider';
import Root from './src/Navigation/Root';

const App = () => {
  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  );
};

export default App;
