import React from 'react';
import { useSelector } from 'react-redux';

export default function selector(
    stateSelector: string[]
) {
    return (Target: any) => {
        let v = {}
        stateSelector.map(i => 
            {
                v[i] = useSelector(data => data)
            })
        return <Target props={v}/>
    };
}