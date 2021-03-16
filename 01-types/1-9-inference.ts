{
    /**
     * Type Inference
     */
    let text = 'hello';
    // text = 1 (오류가 남)

    // 회색 쩜쩜쩜 있음
    function print(message){
        console.log(message);
    }

    function add(x: number, y: number){
        return x+y;
    }

    const result = add(1, 2);
}