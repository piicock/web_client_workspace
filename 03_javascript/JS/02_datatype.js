// 전역 영역


/**
 * 자바스크립트의 자료형 !
  - 자바스크립트이 자료형의 특징:
     - 변수의 자료형이 값에 따라 지정된다. (dynamic typing)
     - 변수를 선언할떄 자료형을 선언하지 않음   
     - 변수에 값이 담기는 순간, 그 값의 자료형에 따라 변수의 자료형이 결정된다!
  1. undefined
  2. string
  3. number
  4. boolean
  5. array
  6. object
  7. function
 */
function testype() {
//지역 영역

//변수선언 키워드 let | const

let a; //undefined
console.log(a, typeof a);  //undefined 'undefined'

a = 100;
console.log(a, typeof a); //100 'number'

a = 'hi'
console.log(a, typeof a);

const name = '홍길동';
console.log(name, typeof name); //홍길동 string
const age = 33;
console.log(age, typeof age); //33 'number'
const married = true;
console.log(married, typeof married); //true 'boolean'
const arr = [1,2,3,4,5];
console.log(arr, typeof arr); // [1, 2, 3, 4, 5] 'object'
const obj = {
    username : 'honggd',
    password : '1234'
            }
console.log(obj, typeof obj); //{username: 'honggd', password: '1234'} 'object'


//함수도 하나의 '자료형' 으로 처리된다.
function foo () {
    console.log('🌮🌮🌮')
                }
console.log(foo, typeof foo); //자료형타입: ƒ foo () { console.log('🌮🌮🌮') } 'function'


}
testype ();