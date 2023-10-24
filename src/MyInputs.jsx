import React from 'react';

export function MyInputs(props) {
 const { className } = props;

 return (
<div>
         <input placeholder='add name' />
         <input placeholder='add age' />
         <input placeholder='add city' />
</div>
 );
}