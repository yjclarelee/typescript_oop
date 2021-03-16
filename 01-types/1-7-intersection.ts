{
    /**
     * Intersection Types: &
     * 둘 다 가지는 경우
     */

    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function internWork(person: Student & Worker){
        console.log(person.name, person.employeeId, person.work())
    }

    internWork({
        name: 'ellie',
        score: 1,
        employeeId: 13,
        work: () => {}
    })
}
