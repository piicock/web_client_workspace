/**
 * 산술연산시 주의할 형변환
 *  1. number + string = string
 *  2. number - string = number | NnA
 *  3. number * string = number | NnA
 *  3. number / string = number | NnA
 *  3. number % string = number | NnA
 * +
 * -
  * %
  * /
 */

function test1 (){
   console.log(3 + "3"); // "33"
   console.log(3 - "3"); //  0
   console.log(3 * "3"); //  9
   console.log(3 / "3"); //  1
   console.log(3 % "3"); //  0
   

   console.log(3 - "a"); // NnA(Not a number)
   console.log(3 * "a"); // NnA(Not a number)
   console.log(3 / "a"); // NnA(Not a number)
   console.log(3 % "a"); // NnA(Not a number)
   console.log(typeof NaN);//number ????

}

/**
 *  1.비교연산자
 *  - == : 타입이 달라도, 값이(형변환후 ) 같으면 true 반환한다
 *  - != :  값이(형변환후 ) 다르면 true 반환한다
 * 
 * 2. 엄격비교연산자
 * - '===' 값과 타입이 모두 같아야 true 반환
 * - '!=='  값 또는 타입이 다르면 false 반환
 * 
 *  3. 크기비교연산자
 *  > 
 *  <
 *  >=
 *  <=
 * 
 */
function test2 () {
  //1. 비교연산자
  console.log(3 == "3") //true : 자동형변환이 일어나서  true.
  console.log(3 != "3") //false 

  //2. 엄격비교연산자
  console.log(3 === "3") //false
  console.log(3 !== "3")  //ture

  //3. 크기비교연산자: 사전등재순을 기준으로 크고 작음을 판독.
  // a는 b보다 작다.
  console.log("a" > "b");
  console.log("a" >= "b");
  console.log("a" < "b");
  console.log("a" <= "b");

}

/**
 * 숫자형반환
 *  - Number () : 숫자로 변환/변환불가한 문자가 한개라도 있으면 NaN반환
 *  - parseInt () : 정수로 변환/변환불가한 문자가 있기 전까지 반환
 *  - paresefloat () : 실수로 변환/변환불가한 문자가 있기 전까지 반환
 */
function test3 () {
  //문자형을 숫자로 변환
   const num = '123.456';  
   console.log(Number(num));  //123.456
   console.log( parseInt(num)); //123
   console.log(parseFloat(num)); //123.456

   //
   const num2 = '123.456원';
   console.log(Number(num2)); //NaN - num2에 '원'이라는 변환불가능한 문자가 존재해서NAA반환
   console.log( parseInt(num2)); //123
   console.log(parseFloat(num2)); //123.456

   const num3 = '$123.456';
   console.log(Number(num3)); // NaN - num3에 '$'이라는 변환불가능한 문자가 존재해서NAA반환
   console.log( parseInt(num3)); //NaN
   console.log(parseFloat(num3)); // NaN


   //point : 숫자가 아닌 문자열을 제거하는 방법
   const _num3 = num3.replace(/[^0-9.]/g, '');
   console.log(_num3); //123.456
      //숫자가 아닌 문자열이 제거된 후라, NaN없이 숫자로 잘 변환된 모습을 확인할수 이;ㅆ다.
   console.log(Number(_num3)); 
   console.log( parseInt(_num3));
   console.log(parseFloat(_num3));
}

// 예제1. 사용자입력값 더하기
// input으로 들어오는 value는 다 string으로 처리됨.
function sum () {

     // 숫자1과 숫자2의 값을 가져옴
     const num1 = document.getElementById('num1').value.replace(/[^0-9.]/g, '');
     const num2 = document.getElementById('num2').value.replace(/[^0-9.]/g, '');
 
    

     // 입력값이 숫자인지 확인
     if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
           alert('올바른 숫자를 입력하세요.');
           return;
        } else {

            alert(parseFloat(num1) + parseFloat(num2));
     }

}
/**
 * Infinity 무한수
 * - number 타입이다.
 */
function test4 () {
   console.log(10/0);  //Infinity number 타입.!
   console.log(10 / 0 === Infinity); //true
}

/**
 * 논리형으로 자동형변환
 *  - 모든 자료형은 boolean으로 평가될수 있다.
 *  - true(값이 있는것) 123, 45.67, -100, "abc",[],{}," ",Infinity
 *  - falese(값이 없는것) 0, 0.0,"", undefined, null , NaN
 */
function test5 () {

    // true : 값이 없어도 true
    console.log(Boolean(123));
    console.log(Boolean(45.67));
    console.log(Boolean(-100));
    console.log(Boolean("abc"));
    console.log(Boolean(" ")); //공백값이라도 들어가 있으면 true
    console.log(Boolean([]));
    console.log(Boolean({}));
    console.log(Boolean(10/0));

    //false
    console.log(Boolean(0));
    console.log(Boolean(0.0));
    console.log(Boolean(""));
    console.log(Boolean(undefined));
    console.log(Boolean(null));
    console.log(Boolean(Number("abc")));
}