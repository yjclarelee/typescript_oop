{

    // Array
    const fruits: string[] = ['π', 'π'];
    const scores: number[] = [1, 2, 3];
    const scoreArray: Array<number> = [1, 2, 3];

    function printArray(fruits: readonly string[]){
        // readonlyμ΄λ―λ‘ μλμ κ°μ΄ λ³κ²½μ΄ λμ§ μμ
        //fruits.push()
    }

    // readonlyλ μμμ²λΌ string[]μ λμ§λ§ Array<string>μ μ λ¨
    // function printArrays(fruits: readonly Array<string>){
    // }


    //Tuple
    // μλ‘ λ€λ₯Έ νμμ΄ λ€μ΄κ° μ μμ
    let student:[string, number];
    student = ["Clare", 25];
    student[0];
    student[1];
    const [name, age] = student;
}