import React from 'react';
import type { PropsWithChildren } from 'react';

interface MyInputsProps {
 className?: string;
}

export function MyInputs(props: PropsWithChildren<MyInputsProps>) {
 const { className } = props;

 return (
<div>
    <input placeholder='add name'/>
</div>
 );
}