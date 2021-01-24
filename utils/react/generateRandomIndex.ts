
import {assoc} from '../js/assoc';
//nanoid
export const generateRandomString = () => Math.random().toString(36).substring(2,15);

export const assignId = assoc('id', generateRandomString());//generate... вызывается всего 1 раз когда мы вызываем модуль

export const generateId = <O extends object>(obj: O) => assignId(obj); //вызывается каждый раз когда мы вызываем функцию

/* а лучше всего использовать nanoid */

// import { nanoid } from 'nanoid'

// export const nanoId = nanoid();