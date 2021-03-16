{

    // Array
    const fruits: string[] = ['🍎', '🍌'];
    const scores: number[] = [1, 2, 3];
    const scoreArray: Array<number> = [1, 2, 3];

    function printArray(fruits: readonly string[]){
        // readonly이므로 아래와 같이 변경이 되지 않음
        //fruits.push()
    }

    // readonly는 위에처럼 string[]은 되지만 Array<string>은 안 됨
    // function printArrays(fruits: readonly Array<string>){
    // }


    //Tuple
    // 서로 다른 타입이 들어갈 수 있음
    let student:[string, number];
    student = ["Clare", 25];
    student[0];
    student[1];
    const [name, age] = student;
}