{
    // //JS
    // function jsAdd(num1, num2){
    //     return num1 + num2;
    // }

    // function tsAdd(num1: number, num2: number): number{
    //     return num1 + num2;
    // }

    // function jsfetchNum(id){
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // function tsfetchNum(id: string): Promise<number>{
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }

    // Optional parameter
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }

    function printName2(firstName: string, lastName: string | undefined){
        console.log(firstName);
        console.log(lastName);
    }

    printName('ellie')

    // Default parameter
    function printMessage(message: string = 'default'){
        console.log(message);
    }
    printMessage();

    // Rest parameter
    // 원하는만큼의 인자를 전할 수 있음
    function addNumbers(...numbers: number[]) : number{
        return numbers.reduce((a, b) => a + b);
    }

    console.log(addNumbers(1, 2, 4));


}