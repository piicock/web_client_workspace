       //전역
       let a = 10;
       console.log(a);

       function foo () {
        //지역1 : 지역변수는 함수밖에서 접근 불가능
        let b = 20;
        console.log(b);

        //전역변수 접근
        a = 30;
       }

       if(true) {
        //지역2: if 내부도 지역타입
        let c =99;
        console.log(c);
       }
    
       for(let i =0; i <5; i++) {
        //지역3 : for문 내부도 지역
        console.log(i);
       }
    
       //오류 구문이 하나 존재하면, 하위 코드들이 실행되지 않음
    //    console.log(i); -> 오류구문

       //예제
       let j;
       for(j = 0; j <5; j++){
        console.log(j);
       }


       /**
        *  변수선언시 사용하는 키워드
        *  - const : 블럭스코프 (상수선언 시 사용)
        *  - let : 블럭스코프 (변수선언시 사용)
        // * 사용X - var : 함수스코프 (변수선언시 사용)
        */
   function test () {
    //var 사용예제, 이렇게 동일한 변수를 2번이상 선언해도 문법적오류가 아님. 사용 지양할것
      var a = 10;
      var a = 20;
    console.log(a);

    const b = 123;
    // b = 456;  // 오류 발생"07_scope.js:48 Uncaught TypeError: Assignment to constant variable.
  
     let c = 1;
     c = 2;
     console.log(c);
    //  let c = 'zzzz';
    // Cannot redeclare block-scoped variable 'c'.ts(2451) let변수도 새로 선언하는건 불가능.
}    


