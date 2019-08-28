import React from 'react';

type searchWrapperProps = {
    bubbleUpSearchString : (e: React.FormEvent<HTMLInputElement>) => void
}

const SearchWrapper : React.SFC<searchWrapperProps>= (props) => {
    return (
    <div style={{height:"20vh",width:"100%",backgroundColor:"#674070", margin:".5em", borderRadius:"1em"}}>
    <span style={{color:"white"}}>
        Search a thing or whatever
        </span>    <input style={{margin:"1em"}} onChange ={e => props.bubbleUpSearchString(e)}></input>
    </div>
    )
}

export default SearchWrapper
