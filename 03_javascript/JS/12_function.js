// 1.--------------------------------
//  test1();
 //함수선언식일때는 실행 o 
 // 함수표현식은 X : 오류!! Uncaught ReferenceError: Cannot access 'test1' before initialization

/**
 * 1.함수 선언식 
 * - hoisting 처리됨
 *    -> <script>태그와, js파일을 처리시, 함수가 먼저 끌어올려져서 우선적 등록된다. 
 */
// function test1 () {
//    console.log("🎃🥎👑");
// }

/**
 * 2. 함수 표현식
 *  - hoisting 처리 안됨.(hoisting? 기중기같은 역할)
 *  - 선언식이랑 표현식 동시에 사용 X 그 같은 함수명으로 ㅇㅇ;;
 *  - 변수에 함수라는 값을 대입하는 문법
 *  - 익명함수 전달법임 (함수의 이름이 없으니까여)
 *       ->함수를 값으로 써 전달할수 있다!!
 *  - 값을 전달하는거라 ; 찍기
 */
const test1 = function() {
    console.log("🎃🥎👑");
};

/**
 * 3. IIFE
 * - Immediately Invoked Function Expression
 * - 함수선언과  호출을 동시에 처리 (일회용)
 * - 변수를 지역변수로 처리하기 위한 용도로 사용된다. 외부(전역으로)로 노출되면 안되는 변수가 있을경우
 */

// iife 문법: 익명함수를 ()로 감쌈
//  (function() {})();

(function() {
    console.log('🍕🍔🍟');
}) ();

//매개변수(parameter) (선언부) : 실제 매개인자가 담길 공간.
//매개인자(arguemnt) (호출부) : 함수에 전달할 값.
(function(text) {
    console.log(text);
})('🥞🥞🥞');


/**
 * 자바스크립트 매개변수 선언과 다르게 매개인자를 전달해도,오류가 발생하지 않는다.(근본없어서)
 * - arguments : 함수의 모든 매개인자를 관리하는 숨은 참조배열(자동적으로 생성되어서, 콘솔창에 찍으면 확인할수 있다)
 */

//함수표현식
const test2 =  function () {
       foo(10,20);
       foo(10,20, 30); //30은 무시되고 오류 X
       foo(10); // 10 undefined  :  오류 X
       foo(); //undefined undefined  : 오류 X
 };

 // JS는 동적자료형이라, 매개변수에 자료형 선언 불필요
 const foo = function(m, n) {
     console.log(m,n )
     console.log(arguments);
 };

 /**
  * 모든 자바스크립트의 함수에는 리턴값이 있다.
  * - 명시 하지 않은 경우 undefined가 반환된다
  */

 const test3 = function() {
    console.log(bar()); //undefined
 }

 const bar = function() {};



 /**
  * 4. 화살표 함수.
  * - 익명함수를 간결하는 작성하는 문법
  * - 문법: (매개변수) => { 함수실행부 }
  * 
  * - 주의
  *     - 생성자 함수로 사용불가능.
  *     - 함수제차 this가 없고 , 부모의  this를 가져와서 사용한다.
  */

 const test4 = function () {
    console.log (koo(1,2,3));    // 6
 };

 
//  const koo =  (a,b,c,) => {
//      console.log(a,b,c,)
//  };

// const koo =  (a,b,c,) => {
//     return a + b + c;
// }

//-------화살표의 문법----------------------------------------------------------
// return 구문이 한줄일때, { return} 생략가능.
const koo =  (a,b,c,) =>  a + b + c;

//실행구문이 한줄뿐일떄도 {} 생략가능.
const boo = (b) => console.log(b);


//매개변수가 하나뿐일때 () 생략가능.
const hoo = h => { 
    console.log(h);
    console.log(typeof h);
}



/**
 *  나머지 파라미터 (Rest Parameter)
 *  - 매개인자 여러개를 배열로 처리한다
 *  - 전개연산자와 동일한 모양이지만, 변수 자리에만 사용가능.
 *  - 일반매개변수랑 혼용시, 나머지파라미터는 끝자리에다가 한번만 사용가능하다
 */

const test5 = () => {
    //zoo('홍길동', '신사임당', '세종대왕')

  const names = ['홍길동', '신사임당', '세종대왕'];
  zoo(...names); //전개연산자(값을 쓸수 있는곳에 사용가능한게 전개연산자.)

  zoo('캡틴아메리카','헐크') //['캡틴아메리카', '헐크'] 출력
};

const zoo = (captain, ...names) => {  //나머지 파라미터(공간(변수)을 제공하는 곳에 사용하는 게 나머지파라미터.)
    console.log(captain, names);  
}

const test6 = () => {
    console.log (calc('plus', 10 , 20));  // 30
    console.log (calc('minus', 30 , 20));  // 10
    console.log (calc('multiply', 10 , 20, 30));  //60
    console.log (calc('divide', 30 , 6));  //5
    console.log (calc('remain', 10 , 3));  //1
}

// const calc = (operator,...nums) => {
//     switch(operator) {
//      case 'plus' : return nums.reduce((acc, num) => acc + num, 0);
//      case 'minus' :  return nums.reduce((acc, num) => acc - num);
//      case 'multiply': return nums.reduce((acc, num) => acc * num, 1);
//      case 'divide': return nums.reduce((acc, num) => acc / num);
//      case 'remain': return nums.reduce((acc, num) => acc % num);
//      default:
//         console.log('유효하지 않은 연산자');
//         return undefined;
//     }
// };


// 간단화 버전
const calc = (tpye,...nums) => 
            nums.reduce((agg,n) => {
                    switch(type) {
                        case 'plus' : return agg + n;
                        case 'minus' : return agg - n;
                        case 'multiply': return  agg * n;
                        case 'divide': return  agg / n;
                        case 'remain': return agg % n;
                    }
            });


/**
 * 7. 자바스크립트에서 함수는 1급 객체임.
 *   - 즉 함수는 값이다.
 *   - 변수에 대입 가능/함수호출시 전달 가능/함수 리턴값이 될 수 있음.
 */            
const test7 = () => {
    const k = () => console.log('🥩🥩🥩');
    // k ();
    //k에 담겼던 함수코드자체가, 리턴됨
    // console.log(k); // () => console.log('🥩🥩🥩')
    const m = k;

    //m안에는 k에 담겼던 함수가 담겨서,, 리턴됨
    // console.log(m); // () => console.log('🥩🥩🥩')
    // m(); //🥩🥩🥩


    //함수를 매개인자로 사용가능
    // runner(k);
    // runner(() => console.log('🍕🍕🍕') ); //피자 10번찍힘
    runner((n) => console.log( '🍔 ${n} ')); //햄버거 10번찍힘

    //2. 실습문제: 계산기예제
    console.log(calc2((a,b) => a + b, 10, 20)); // 30
    console.log(calc2((a,b) => a - b, 10, 20)); //  -10
    console.log(calc2((a,b) => a * b, 10, 20)); //  200
    console.log(calc2((a,b) => a / b, 10, 20)); //  0.5
    console.log(calc2((a,b) => a % b, 10, 20)); //  10
    
};

// const runner = (f) => f();
const runner = (f) => {
    for(let i = 0; i <10; i++) {
        f();  //고기가 10번 찍힘.
    }
};

//2.실습문제 : 계산기 예제
  const calc2 = (f, a, b) => {
    console.log(f,a,b);
    return f(a,b);
  };


  /**
   * 함수를 리턴값으로 사용하기
   */

  const test8 = () => {
    const k = getFunction();
    // const k = () => console.log('🍰🍰🍰');
    k('길동', '디저트 먹어');

    const friends = ['길동','철수','영희','혁'];
    friends.forEach((name) => {
        k(name,'디저트 먹어');
    })

      const sayHello = getFunction2('Hello');
      //const sayHello = (name) => {console.log('Hello~ ${name}')}
      console.log(sayHello);
      sayHello('길동');
      
      const sayGoodbye = getFunction2('Goodbye');
      //const sayGoodbye = (name) => {console.log('Goodbye~ ${name}')}
      console.log(sayHello);
      sayGoodbye('길동')
   
       //돈좀 꿔조 길동
      const resell = getFunction2('돈좀 꿔줘');
      resell('길동');
  
  
    };
  
  const getFunction = () => {
      return (name,text) => console.log(`${name}${text}🍰🍰🍰`);
    }

    
    // const getFunction2 = (greeting) => {
    //    return (name) => console.log(`${greeting}~${name}`);
    // }


    //(name) => console.log(`${greeting}~${name}`); -> 반한되는 값(함수 형식)
    const getFunction2 = (greeting) => (name) => console.log(`${greeting}~${name}`);
  
    
/**
 * 실습문제 ! tagMaker 함수 만들기
 *  - 특정태그를 만드는 함수 반환
 *  - 반환된 함수의 태그의 내용 전달해서 호출
 *  - div#result에 요소를 추가.
 */    
const test9 = () => {
   const writeP = tagMaker('P');
   const writeMark = tagMaker('mark');
   const writeButton = tagMaker('button');

   const result = document.querySelector("#result");
   result.innerHTML = writeP('안녕');
   result.innerHTML += writeMark('감자 먹었니');
   result.innerHTML += writeButton('클릭');
};

const tagMaker = (tag) => (content) => `<${tag}>${content}</${tag}>`;


