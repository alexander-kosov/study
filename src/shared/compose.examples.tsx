
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

//функцию Pipe лучше брать с ramdajs.com, там она правильно типизирована
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

const filteredComments1 = comments.filter(({id}) => id !== 22);
//или можно вот так:
const filteredComments2 = comments.filter(pipe(pick('id'), isEqual(22), cond));

function cond(b: boolean){
    return !b
}

const filterWithId_ = (id: number) => pipe(pick('id'), isEqual(id), cond);
const filteredComments3 = comments.filter(filterWithId_(22));
//-----------------

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);

const filterWithId = createFilterBy('id');
const filterWithValue = createFilterBy('text');
const filteredComments = comments.filter(filterWithId(22));

//-----------------------------------------------------
const createBy = <O extends object>(prop: string) => (V: any) => pipe(pick(prop), isEqual(V), cond);
const filterWithId1 = createFilterBy('id');
const filterWithValue1 = createFilterBy('text');
const filteredComments_ = comments.filter(filterWithValue1('text one'));
