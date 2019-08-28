import React from 'react';

interface SidebarPros {
    menuItems: string[],
   }

const Sidebar: React.SFC<SidebarPros> = (props) => {
    return (
    <div style={{width:"100%",height:"80vh",backgroundColor:"#FFFFFF", margin:".5em", borderRadius:"1em", padding:"3em"}}>
    {props.menuItems.map(
        item =>{return <h3>{item}</h3>})}
    </div>
    )
}

export default Sidebar
