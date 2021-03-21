{
    interface Employee{
        pay(): void;
    }

    class FullTimeEmployee implements Employee{
        pay(){
            console.log('full time!');
        }
        workFullTime(){

        }
    }

    class PartTimeEmployee implements Employee{
        pay(){
            console.log('part time!');
        }
        workPartTime(){

        }
    }

    // ellieAfterPay workFullTime이라는 함수 없어짐
    // return 할 때 그냥 employee로 return 되서 full인지 part인지 정보 없어짐
    // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 x
    function payBad(employee: Employee): Employee{
        employee.pay();
        return employee;
    }

    function pay<E extends Employee>(employee: E): E{
        employee.pay();
        return employee;
    }

    const ellie = new FullTimeEmployee();
    const bob = new PartTimeEmployee();
    ellie.workFullTime();
    bob.workPartTime();

    const ellieAfterPay = pay(ellie);
    const bobAfterPay = pay(bob);

    const obj = {
        name: 'ellie',
        age: 20
    }

    function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
        return obj[key];
    }

    console.log(getValue(obj, 'name'));

}