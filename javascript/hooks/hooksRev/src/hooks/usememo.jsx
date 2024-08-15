import React, { useState, memo } from 'react';

function Usememo() {
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
  
export default Usememo;