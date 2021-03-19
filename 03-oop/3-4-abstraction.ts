{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker{
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker{
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7 // class level
        private coffeeBeans: number = 0; // instance level

        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        // makeMachine과 같이 오브젝트를 만들 수 있는 함수를 제공한다면 constructor은 private으로 하는 것이 좋음
        static makeMachine(coffeeBeans: number): CoffeeMachine{
            return new CoffeeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean(){
            console.log('cleaning the machine...🧼');
        }

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT)
                throw new Error('Not enought coffee beans!');
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(){
            console.log('heating up... 🔥')
        }

        private extract(shots: number): CoffeeCup{
            console.log(`Pulling ${shots} shots... ☕️`);
                return {
                shots, 
                hasMilk: false
            };
        }

        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class AmateurUser{
        constructor(private machine: CoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista{
        constructor(private machine: CommercialCoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

        // const maker = new CoffeeMaker(32);
        const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
        // maker.coffeeBeans = -1  // invalid; encapsulation is needed
        // maker.makeCoffee(2);
    
        // const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
        // maker2.fillCoffeeBeans(32);
        // maker2.makeCoffee(2);
        // maker2.clean();

        const amateur = new AmateurUser(maker);
        const pro = new ProBarista(maker);
        pro.makeCoffee();
}

// abstraction
// 1) use private
// 2) use interface