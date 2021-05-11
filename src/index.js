import { union as juntaTudo, uniq } from 'ramda';

import soma, { sub, mult as multiplicar } from './utils';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5];
const arr2 = [3, 3, 4, 5, 6, 7, 7, 8, 9];

const arr3 = juntaTudo(arr1, arr2);
const arr4 = uniq(arr1);

console.log(arr3);
console.log(arr4);

console.log(soma(11, 12));
console.log(sub(10, 4));
console.log(multiplicar(10, 4));