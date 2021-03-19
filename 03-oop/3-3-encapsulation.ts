{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }


    // public
    // private
    // protected
    class CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT: number = 7 // class level
        private coffeeBeans: number = 0; // instance level

        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        // makeMachine과 같이 오브젝트를 만들 수 있는 함수를 제공한다면 constructor은 private으로 하는 것이 좋음
        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
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

    // const maker = new CoffeeMaker(32);
    const maker = CoffeeMaker.makeMachine(32);
    // maker.coffeeBeans = -1  // invalid; encapsulation is needed
    maker.fillCoffeeBeans(32);

    class User{
        // fullName: string
        get fullName(): string{
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number{
            return this.internalAge;
        }
        set age(num: number){
            if(num < 0) throw new Error('Age cannot be less than 0');
            this.internalAge = num;
        }
        constructor(private firstName: string, private lastName: string){
            this.firstName = firstName;
            this.lastName = lastName;
            // this.fullName = `${firstName} ${lastName}`;
        }
        
    }

    const user = new User('Steve', 'Jobs');
    // console.log(user.fullName);
    // user.firstName = 'Ellie';
    // console.log(user.fullName); // fullName does not change
    user.age = 5;
}