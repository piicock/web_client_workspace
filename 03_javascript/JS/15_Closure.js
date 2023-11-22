/**
 * 자유변수 Free Variable
 * - 함수 지역범위에서 선언되지 않은 변수
 */

const test1 = () => {
   say('길동');
;}

const hello = '안녕';

/**
 * - 지역변수(함수안에서만 사용되는 함수) : str1 str2, name(매개변수)
 * - 자유변수(함수안의 변수가 아니면 자유변수) : hello
 * - 전역변수() :           
 */
const say = (name) => {
    const str1 = `${hello}~ , ${name}`;
    const str2 = "밥 먹었니?";
    console.log(str1, str2);
};


/**
 * closure 함수
 * - 닫힘 함수. 자유변수를 참고하면서 외부로부터의 접근이 안되는 '닫힌' 함수이다. 
 * - 함수는 반환하는 과정에서 클로져함수를 생성할 수 있다.
 */
const test2  = () => {
   const n = 20;
   const foo2 = foo();
   console.log(foo2);  // () => console.log(n)출력/-> 안에 있는 N은 foo()안에 선언된 const n,임
   foo2();   //10출력
}

const foo = () => {
    const n = 10; // n은 자유변수.
    return () => console.log(n);
}

let cnt = 0;
/**
 * 3.전역 클로져
 */
  const test3 = () => {
    cnt++;
    document.querySelector('#global-counter').innerHTML = cnt;
  };

  /**
   * 4. 클로져 카운터
   */
  const counterMaker = () => {
      let cnt = 0;
      return () => {
          cnt++;
          document.querySelector('#closure-counter').innerHTML = cnt;
      };
  }
 
const test4 = counterMaker();