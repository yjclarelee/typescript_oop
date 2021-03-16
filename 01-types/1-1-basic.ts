{
    /**
     * Javascript
     * Primitive: number, string, boolean, null, undefined, symbol
     * Object: function, array ...
     */

    // number
    const num: number = 0;

    // string
    const str: string = 'Hi';
    
    // boolean
    const bool: boolean = false;

    // undefined
    let age: undefined; // 이렇게 쓰면 의미없음
    let age1: number | undefined; // 이렇게 써야 의미있음
    age = undefined;

    // null
    let person: null; // null도 마찬가지
    person = null;

    // unknown
    let notSure: unknown = 0; // 최대한 쓰지 않을
    
    // any
    let anything: any = 0; // 쓰지 않기로 노력

    // void
    // 함수에 반환을 하지 않을 때 
    function print(): void{
        console.log('hello');
    }

    // never
    function throwError(message: string): never{
        throw new Error(message);
    }

    // object
    let obj: object; // 아무 오브젝트나 담을 수 있으니 좋지 않음

}