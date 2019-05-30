import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Container 
import Container from './components/AppContainer/AppContainer';

function App() {
  return (
    <Provider store={store}> 
      <Container />
    </Provider>
  );
}

export default App;
