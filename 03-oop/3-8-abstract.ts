{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker{
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7 // class level
        private coffeeBeans: number = 0; // instance level

        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
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

        protected abstract extract(shots: number): CoffeeCup;

        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeeLatteMachine extends CoffeeMachine{
        constructor(beans: number){
            super(beans);
        }
        private steamMilk(): void{
            console.log('Steaming some milk... 🥛')
        }
        protected extract(shots: number):CoffeeCup{
            this.steamMilk();
                return {
                shots, 
                hasMilk: true
            };
        }
        
    }

    class SweetCoffeeMaker extends CoffeeMachine{
        protected extract(shots: number):CoffeeCup{
                return {
                shots, 
                hasSugar: true
            };
        }
    }

    const machines = [
        new CaffeeLatteMachine(16),
        new SweetCoffeeMaker(16),
        new CaffeeLatteMachine(16),
        new SweetCoffeeMaker(16)
    ]
    machines.forEach(machine => {
        console.log('-----------------')
        machine.makeCoffee(1);
    })
}