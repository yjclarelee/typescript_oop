{
    // number, string 등 type별로 만들어야 할까?
    function checkNotNullBad(arg: number | null):number{
        if(arg == null){
            throw new Error('not valid number!');
        }
        return arg;
    }

    // type 보장이 안 됨
    function checkNotNullAnyBad(arg: any | null): any{
        if(arg == null){
            throw new Error('not valid number!');
        }
        return arg;
    }

    // generic: 코드를 쓸 때 type이 결정됨
    function checkNotNull<T>(arg: T | null): T{
        if(arg == null){
            throw new Error('not valid number!');
        }
        return arg;
    }

    const number: number = checkNotNull(123);
    const bool: boolean = checkNotNull(true);

}