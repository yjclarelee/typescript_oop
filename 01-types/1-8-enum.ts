{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MONDAY = 0;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "Tuesday": 1});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    enum Days{
        Monday,// 값 지정하지 않으면 자동으로 0부터, 또는
        Tuesday = 2,// 이렇게 지정할 수 있음
        Wednesday = 'wednesday'// 문자열도 지정할 수 있음
    }
    const day = Days.Wednesday;
    console.log(day);

    // 쓰지 않는 것이 좋음 Days type 변수가 타입이 여러가지임
    // union type를 쓰는 것이 좋음
    
}