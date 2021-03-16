{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // BEANS_GRAM_PER_SHOT는 class가 만들어질 때 계속 만들어지면 낭비이므로 static
    // static인 경우 this가 아닌 Class명을 사용

    class CoffeeMaker{
        static BEANS_GRAM_PER_SHOT: number = 7 // class level
        coffeeBeans: number = 0; // instance level

        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        // 클래스를 만들지 않고 사용 가능
        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans)
        }

        makeCoffee(shots: number): CoffeeCup{
        if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT)
            throw new Error('Not enought coffee beans!');
        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots, 
                hasMilk: false
            };
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);

    // static이라서 가능
    CoffeeMaker.makeMachine(3);
    // 그렇지 않으면 new해서 접근해야 함


    // static의 예시: Math
    // Math를 만들지 않았음에도 불구하고 Math.abs() 사용 가능
}

