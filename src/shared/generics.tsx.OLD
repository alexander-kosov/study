//generics

const myArray: MyArray<number> = [1,2,4,5,6];

interface MyArray<T> {
    [N: number]: T

    map<U>(fn:(el:T, index:number, arr: MyArray<T>)=>U): MyArray<U>
}

let one = myArray.map((f)=>f+1);
let two = myArray.map((f)=>`f+${f}`);
let three = [1,2,3,4,5].map((f)=>`f+${f}`);

//------------------

function identity<T>(arg:T):T{
    return arg
}

let result = identity(12);

function getLen<T extends Array<any>>(arr: T): number {
    return arr.length
}
let res = getLen(['1','2','3']);

//--------------------------------

interface IValueWithType<T> {
    type: string;
    value: T
}

function withType<U>(arg:U): IValueWithType<U> {
    return {
        type: typeof arg,
        value: arg
    }
}

const result2 = withType(123);
//------------  встроенные generics   ------------------------------

interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}
//Вспомогательный тип Omit позволяет создавать новые типы 
//на основе существующих методом исключения некоторых свойств из исходного типа
const omittedObject: Omit<IExample<string>,'isEmpty'|'value'> = {
    type: 'asd'
};

const picked: Pick<IExample<number>, 'isEmpty'|'value'> = {
    isEmpty: true,
    value: 123,
};

const partial: Partial<IExample<object>> = {

}

//----------------------------------------------------------------------
import * as React from 'react';

class MyComponent extends React.Component<{prop1: number},{state1:string}> {
    constructor(props:{prop1: number}){
        super(props);
        this.state = {
            state1: 'тратата'
        }
    }

    public render (){
        return (
            <div>{this.props.prop1}</div>
        )
    }
}

//******************************************************************************** */

const mistake  = [] as Array<number>;
mistake.push(1);
mistake.push('2');//ошибка!!!
//...-------------

let bigObject = {   //большой объект
    "one":{
        "id":"2134rcr45tvrfc234v",
        "name":"My Island",
        "author":"John Silver",
        "created_at":"2013-02-23",
    },
    "two":{
        "id":"5e3rtaerfwcv546b465b",
        "name":"Treasures",
        "author":"Billy Bonce",
        "created_at":"2016-02-23",
    },
    "three":[{
        "one":1,
        "two":"два",
        "three":true
    }],
};

type TMyBigObject = typeof bigObject; //получаем ТИП объекта

const typedBigObject: Readonly<TMyBigObject> = bigObject;
typedBigObject.two.author = 'James';//readonly работает только со внешними ключами. внутренние можно менять.

//сделать весь объект Readonly

//получаем все ключи объекта:
type TObjKeys  = keyof TMyBigObject; //type TObjKeys = "one" | "two" | "three"
type TConcrete = TMyBigObject['one'];   //type TConcrete = {
                                        //     "id": string;
                                        //     "name": string;
                                        //     "author": string;
                                        //     "created_at": string;
                                        // }

type MyReadonly = {
    readonly [N in keyof TMyBigObject]: TMyBigObject[N]
}
//Результат:
// type MyReadonly = {
//     readonly "one": {
//         "id": string;
//         "name": string;
//         "author": string;
//         "created_at": string;
//     };
//     readonly "two": {
//         "id": string;
//         "name": string;
//         "author": string;
//         "created_at": string;
//     };
//     readonly "three": {
//         "one": number;
//         "two": string;
//         "three": boolean;
//     }[];
// }

type MyReadonly2<T> = {
    //mapped types
    readonly [N in keyof T]: T[N]
}
const some: MyReadonly2<TMyBigObject> = {
    --------
};

//???????????
type MyPartial<T> = {
    [N in keyof T]?: T[N];
}

type MyPick<T, K extends keyof T> = {
    [N in K]: T[N];
}
type picked = Pick<TMyBigObject, 'two'>;
//type picked2 = MyPick<TMyBigObject, 'two' | 'bebee'>;
type picked2 = MyPick<TMyBigObject, 'one'|'two'>;

//тип, работающий по всей глубине
type MyReadonlyDeep<T> = {
    readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
};

const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;


typedBigObjectDeep.one.id = '1'; // Не удается задать значение для "id", так как это свойство, доступное только для чтения.
typedBigObjectDeep.three.two = 'false';

//убираем Readonly
type TSomeType = MyReadonlyDeep<TMyBigObject>;
//type inference           infer - вычислить аргумент дженерика
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>; //

// ***************       **************************
function greaterThanZero(a: number) {
    return a>0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;
type FnParameters<T> = T extends ((...args: infer R) => any) ? R : never;

type TReturnType = FnReturnType<typeof greaterThanZero>;
type TArgsType = FnParameters<typeof greaterThanZero>;
//такие типы уже описаны в typescript
type TReturnType_ = ReturnType<typeof greaterThanZero>;
type TArgsType_ = Parameters<typeof greaterThanZero>;




//-----------------------------------------------------------------

//*********-----------------------------------------
//Сложные примеры
//5*. Работа с Generic, Mapped Types, Type inference №1
//Это React Functional Component 

function HomeComponent(props: { firstProp: string }) {
    return (
        <div>
            { props.firstProp }
        </div>
    )
}
//Напишите такой тип, который извлечет тип props из этого или любого другого React компонента. 
//Подсказка: любой реакт компонент расширяет React.ComponentType<Props>
const props: IProps;

interface IProps {
   firstProp: string
};
//const t = TMyType<typeof HomeComponent>;

type TMyType<T> = T extends React.ComponentType<infer P> ? P : never;
type t = TMyType<typeof HomeComponent>;
//результат:
// type t = {
//     firstProp: string;
// }

//____________________________________________________________________________________________
// 6*. Работа с Generic, Mapped Types, Type inference №2
// Дан namespace JSX. Получить к нему доступ можно после установки пакета @types/react. 
// Мы проделывали это в одном из первых уроков.
// Среди JSX IntrinsicElements есть Элемент DIV, получить доступ к нему можно так: 

type TDivElement = JSX.IntrinsicElements['div'];

//Этот тип описывает все свойства, доступные для HTMLDivElement. Напишите такой тип TGetJSXPropsProp, 
//который извлекает все HTML свойства, доступные для любого jsx элемента.
//Пример:

type TDivProps = TGetJSXPropsProp<'div'>

const props_: TDivProps = {
    some: '1233' // throw error потому что не содержится в атрибутах div
    className: 'handler' // не выкидывает ошибку так как валидно для div элемента
}
//>>
type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer P, any> ? P : never
