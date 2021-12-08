const lambda = () => '123';
const obj = {id: 1, title: 'test'};
const arrTest = [1, 2, 3];
const arrTest2 = [1, 2, 3];

const array = [NaN, null, undefined, 123, 'test', true, lambda, obj, arrTest];

debugger;

const value = NaN;

const includes = array.includes(value, 1);
const indexOf = array.indexOf(value);
