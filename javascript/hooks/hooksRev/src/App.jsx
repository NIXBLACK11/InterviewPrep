/*
When using simply useState all props of the child components rerender even though their values remaiun same
Use useMemo
1.35
*/

import './App.css';
import Usememo from './hooks/usememo';
import Usestate from './hooks/usestate';

function App() {
  return (
    <>
      <Usestate/>
      <Usememo/>
    </>
  );
}

export default App;

