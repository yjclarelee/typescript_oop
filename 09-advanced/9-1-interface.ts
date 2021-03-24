type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}

// object: both
const obj1: PositionType = {
    x: 1,
    y: 1
}

const obj2: PositionInterface = {
    x: 1,
    y: 1
}

// class: both
class Pos1 implements PositionType{
    x: number;
    y: number;
}

class Pos2 implements PositionInterface{
    x: number;
    y: number;
}

// Extends: both
interface ZPositionInterface extends PositionInterface{
    z: number;
}

type ZPositionType = PositionType & {z: number};

// type: computed properties
type Person = {
    name: string,
    age: number
}

type Name = Person['name'];