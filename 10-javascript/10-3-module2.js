// export 'default'로 하면 이름 바꿀 수 있음
import sum, {print as printMessage} from './10-3-module.js';

// import * as calculator from ~
// calculator.add이런 식으로 사용

console.log(sum(1,2));
printMessage();