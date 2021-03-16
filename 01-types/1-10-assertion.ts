{
    /**
     * Type Assertions
     */
    function jsStrFunc(): any{
        return 'hello';
    }

    // 여기에서 result는 any라서 string 관련 function을 못 쓰지만,
    const result = jsStrFunc();

    // 여기에서 억지로 assertion함
    (result as string).length;
    (<string> result)

    function findNumbers(): number[] | undefined{
        return undefined;
    }

    const numbers = findNumbers();
    
    // 자동으로 ?가 생김
    numbers?.push(2);

    // 반드시 된다는 뜻: !
    // const numbers = findNumbers()!;
    // numbers!.push(2)
}