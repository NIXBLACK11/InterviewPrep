import React, { useState } from 'react';

function Usestate() {
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
  
  function Header({title}) {
    return <div>
      {title}
    </div>
  }
  
  export default Usestate;