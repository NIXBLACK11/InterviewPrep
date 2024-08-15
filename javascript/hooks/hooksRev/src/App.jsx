/*
When using simply useState all props of the child components rerender even though their values remaiun same
Use useMemo
*/

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }
import React, { useState, memo } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("Initial name");

  function updateTitle() {
    setTitle("New name is " + Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Click me</button>
      <Header title={title}></Header>
      <Header title="unchanged components1"></Header>
      <Header title="unchanged components2"></Header>
      <Header title="unchanged components2"></Header>
      <Header title="unchanged components2"></Header>
      <Header title="unchanged components3"></Header>
    </>
  );
}

const Header = memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;

