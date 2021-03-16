{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'Clare';
    type Student = {
        name: string;
        age: number;
    }

    const student: Student = {
        name: 'Clare',
        age: 25
    }

    /**
     * String Literal Types
     */
    // 값이 지정한 타입이어야 함..
    // 이게 뭐임
    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name';

}