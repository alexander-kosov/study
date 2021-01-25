
import React from 'react';
import {getValue} from '../utils/react/pickFromSyntheticEvent';
import { preventDefault } from '../utils/react/preventDefault';
import { stopPropagation } from '../utils/react/stopPropagation';

function InputExample({value, onChange}: any) {
    return (
        <input 
            value={value}
            // onChange={preventDefault(stopPropagation(getValue(onChange)))}
            onChange={compose(onChange,getValue,stopPropagation, preventDefault)}
            //onChange={pipe(preventDefault, stopPropagation,  getValue, onChange)}
            />
    )
}

function compose<U>(...fns: Function[]) {
    return <E, >(initialValue: any):U =>
        fns.reduceRight((previousValue, fn) => fn(previousValue),initialValue);
}

function pipe<U>(...fns: Function[]) {
    return <E, >(initialValue: any):U =>
        fns.reduce((previousValue, fn) => fn(previousValue),initialValue);
}

function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop]
}

const some = pick('value')({value: 1})//=1

function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right;
}


const comments = [{id: 22, text: 'text one'}, {id: 33, text: 'text two'}];

const filteredComments = comments.filter(({id}) => id !== 22);
//или можно вот так:
const filteredComments2 = comments.filter(pipe(pick('id'), isEqual(22), cond));

function cond(b: boolean){
    return !b
}

const filterWithId = (id: number) => pipe(pick('id'), isEqual(id), cond);
const filteredComments3 = comments.filter(filterWithId(22));
//-----------------









