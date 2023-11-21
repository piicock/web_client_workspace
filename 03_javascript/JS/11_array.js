/**
 *  Array
 *  - js배열은 타입지정이 없고, 크기의 제한이 없다.
 *  - java의 ArrayList<Object>와 비슷. 
 */
function test1() {
   const arr1 = [1,2,3]; //리터럴로 생성.
   const arr2 = new Array(1,2,3); //new 연성자로 생성

   const arr3 = [1,2,3]; //리터럴로 생성.
   const arr4 = new Array(1,2,3); //new 연성자로 생성


   console.log(arr1);
   console.log(arr2);
   console.log(arr1 == arr2); // 값이 같아도, 다른 객체의 배열이라 false
   console.log(arr1 == arr3);  //false
   console.log(arr1 == arr3);   //false

   //존재하지 않는 요소 참조시 오류 X, 대신 undefined 반환.
   console.log(arr1[0], arr1[1], arr1[2], arr1[3] ) //1 2 3 undefined
//    arr1[100].abcdef() ;  오류발생!
   
   arr1[0] *= 100;
   arr1[1] *= 100;
   arr1[2] *= 100;
   console.log(arr1);  //(3) [100, 200, 300]

   const student = ['홍길동' , [100, 90 , 50], [90,80,90]];


  for(let i =0; i<student.length; i++){
    for(let j =0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
   }


}


/**
 * 반복문
 *  - for
 *  - for in문 : 각 속성명(= index)을 매턴마다 반환.
 *  - for of문 : 각 속성값(value)을 반환.
 */
function test2 () {
    const arr = ['a','b','c','d','e'];

    ///for ..in
    for(const index in arr) {
        console.log(index, arr[index]);
        
    }
    console.log('----------')
   //  for ..of : 인덱스값이 없다면 for of가 가장 간단.
     for(const value of arr) {
        console.log(value)
     }
}

/**
 * 전개 연산자 Spread Operator
 */
function test3 () {
   const arr1 = [1,2,3];
   const arr2 = ['가','나','다'];
   const arr3 = [...arr1, ...arr2];
   console.log(arr3) ;
}


/**
 * 유사배열(가짜배열)
 * - Array객체를 상속하지 않은,, 배열 모영만 흉내낸 객체(index, length 속성만 존재)
 * - Array객체가 제공하느 다른 메소드 사용불가능.
 * - getElementsByTagName, getElementsByTagClassName, querySekertorAll,  
 */
function test4 () {
   const arr = [1,2,3];
   // console.log(arr);
   const buttons = document.getElementsByTagName("button");
   // console.log(buttons);
   // HTMLCollection(10) [button, button, button, button, button, button, button, button, button, button]


   //map(): arr의 요소를 하나씩 순회함.
    arr.map((n) => {console.log(n); }); 
   // buttons.map(function (n) { console.log(n); }); 
   // 오류:nodelist라, map사용 불가능! Uncaught TypeError: buttons.map is not a function

   
   //진짜 배열로 반환하기.

   // 1. 전개연산자 사용
    console.log([...buttons]);
    //(10) [button, button, button, button, button, button, button, button, button, button]

    [...buttons].map(function(b) { console.log(b); });
   
    // 2. Array.from
    Array.from(buttons).map(function(b) { console.log(b); });
  }






/**
 * - indexOf
 * - lastIndexOf
 *  - find
 * - findIndex
 * - concat
 *  - join
 *  - reverse
 *  - sort

  */


function test5()   {
   //indexOf 헤당 요소의 인덱쇼ㅡ를 반환, 존재하지 않ㅇ면 -1반환
   const arr = ['사과', '딸기', '귤' , '멜론','사과', '아보카도'];
   console.log(arr.indexOf('멜론')); //3[index]
   console.log(arr.indexOf('바나나'));  
   console.log(arr.indexOf('사과'));  //0
   console.log(arr.indexOf('아보카도')); // 5
   console.log(arr.lastIndexOf('사과'));  //4(뒤에서 가장 먼저 사과가 나오는 인덱스 위치)
   console.log(arr.lastIndexOf('아보카도')); //5


     //find
     console.log(arr.find
                        (function(fruit) {
                           // return fruit === '귤'
                           //   return fruit.length === 2
                          return fruit.startsWith('딸');
          
                        }));

   //findIndex 조건에 만족하느 최초의 요소의 인덱스를 반환한다.
  console.log(arr.findIndex(function(fruit) {
    // return fruit === '귤'
    //    return fruit.length === 4
       return fruit.startsWith('딸');
      
   } ));


   //concat : 두배열을 연결, immutabel이라서 원본은 훼손되지 않는다.
   const veg = ['고구마' ,'감자', '오이'];
   const vef = arr.concat(veg);
   
   console.log(arr);
   console.log(veg);
   console.log(vef);

   //join
   console.log(vef.join('/'));

   // revers (mutable : 원본이 변경됨)
   console.log(vef.reverse());

   //sort :오름차순 정렬 (mutable)
   const nums = [3,2,1,5,4]
   console.log(nums.sort());
   
   const names = ['홍길동', '고길동' , '박길동'];
   console.log(names.sort());

   // [point]  숫자 내리차순 정렬/커스텀 정렬?  -> 정렬기준함수를 전달해야함.
   console.log(nums.sort(function(a,b){return b - a;}));


   console.log('홍길동' - '고길동');  //NaN ('-'연산자를 사용한 순간, 프로그램이 number로 생각하고 계산하기때문에 NaN이 반환.)
   console.log('홍길동' > '고길동');  //ture;
   //문자열 내림차순 정렬
   console.log(names.sort(function(a,b){
   if(a > b) return -1 ;   
   if(b > a) return 1 ;
   return 0; }));  


}

/**
  *  - push | pop | unshift | shift
 *  - slice
 *  - splice
 */
function test6() {
    //push : 마지막에 요소추가
    //pop : 마지막 요소제거+ (반환)
    //unshift 0번지의 요소추가
    //shift 0번지의 요소제거+(반환)
    const arr = ['강남', '역삼', '선릉'];
    arr.push('삼성');
    console.log(arr.pop());

    //0번지에 요소추가 
    arr.unshift('교대')
    console.log(arr.shift());
   
   //한개의 요소를 삭제와 추가를 동시에 하는 방법, 이렇게 연속적으로 사용가능.
    arr.push(arr.shift());
    console.log(arr);

     //slice (start, end) (immntalbe) : 요소를 잘라서새로운 문자열로 만들어줌
     // [point]tart값과 end값을 기입하지 않으면 처음부터 끝까지 복제된 문자열을 생성해줌. 
     const langs = ['html' ,'css', 'javascript', 'typescript' ,'java']
     console.log(langs.slice(2,4));
     console.log(langs.slice(3));
     console.log(langs.slice());


     //splice ; mutable (start, delCnt, newItem1, newItem2, ...)
     //start부터 delCnt개를 삭제하고 , 새 요소를 추가, 삭제된 요소는 배열로 반환된다

     const alpha = ['a', 'b','c','d','e'];
     console.log(alpha.splice(1,1 ,'x', 'y'))
     console.log(alpha)  //['a', 'x', 'y', 'c', 'd', 'e']


    //삭제 하지 않고 요소 추가만 하기? delCnt를 0으로 하면 된다.
    console.log(alpha.splice(1,0 ,'k', 'l','m'))
    console.log(alpha)  //['a', 'x', 'y', 'c', 'd', 'e'] // ['a', 'k', 'l', 'm', 'x', 'y', 'c', 'd', 'e']

    //tostring :text값만 따와서 반환해줌.
    console.log(alpha.toString()); //a,k,l,m,x,y,c,d,e
       
    }

        //  11.21 수업시작
/**
 * For Each(callback Function)
 * - callback Function?? 함수를 함수에 전달하면 내부적으로, 함수가 함수를 호출해서 사용
 * 
 * - for each란, 단순반복 처리를 함
 * - 요소 별로 callback Function 호출한다!
 */

    function test7 () {
      const arr = ['a', 'b' ,'c','d','e']
      arr.forEach(function(ch , index, _arr){
         console.log(ch , index, _arr);  // 5번, arr배열을 출력해줌.
      });

     const brr = [1,2,'가', 3 ,'홍길동', 'ABC', 500, 'ㅋㅋㅋ'];
     const nums = [];
     const strs = [];
   //   brr.forEach(function(elem, index){
   //    if(typeof elem === 'number')
   //    nums.push(elem);
   // if(typeof elem === 'string')
   //    strs.push(elem);

   brr.forEach(function(elem){

      //typeof는 요소의 자료형을 string으로 반환해준다.
      // 자료형에 따라 분기처리+ and연산자이용함(조건문1이 true면 조건문2  실행.)
   (typeof elem === 'number') && nums.push(elem);
   (typeof elem === 'string') && strs.push(elem);
     });
      console.log(nums); // [1, 2, 3, 500] 숫자만 담긴모습.
      console.log(strs);  //

    }

    /**
     * filter(cbFunc)
     * - boolean반환하는 콜백함수를 전달
     * - true를 반환하는 요소만 새배열에 담아서 반환한다.
     * - immutable
     */
    function test8 () {
       const arr = [1,2,3,4,5,6,7,8,9,10];

       const evens = arr.filter(function(n, i, _arr){
           console.log(n, i, _arr);
           return n % 2 == 0;
       });
      
         console.log(evens); //(5) [2, 4, 6, 8, 10] 짝수만 출력된 모습 확인.
    }

/**
 * MAP (cbfunction) 
 *  - 요서ㅗ변 연산결과를 새배열에 담아서 반환
 * - immutabel
 */
    function test9 () {
      const arr = [1,2,3];
      // const arr2 = [1,4,9]; 이런결과를 원함
      const arr2 = arr.map(function(n){
          return n * n;
      });
          console.log(arr2); //(3) [1, 4, 9] return 결과값만 arr2에 담김.

//1 . 실습문제
//    페이지내의 버튼 속 글자를 배열에 담기
//     1. button 배열생성 (진짜배열로 반환하는 과정 필요)
//     2. map함수를 이용해서 button태그안의 innerHTML 속성값을 배열에 담아 반환
       const buttons = [...document.querySelectorAll("button")];
       console.log(buttons);
       const contents = buttons.map(function(button){
         return button.innerText;
       });
       console.log(contents);
    }


   /**
    * reduce(callback Func[, initValue])  // initValue: 초기값
    * - 모든 요소를 순회해서 -하나의 값(리터럴, 배열)-을 반환.!
    * - 초기값을 지정하지 않으면, 첫번쨰 요소가 초기값으로 사용된다.
    * 
    * - agg: 누적값
    */

    function test10 () {
      const arr = [1,2,3,4,5,6,7,8,9,10];
      const sum = arr.reduce(function(agg, n, i, _arr){
          console.log(agg, n, i, _arr);
          return agg + n;
      }, 0 )
      console.log(sum);

      //홀수배열 생성
      const odds = arr.reduce(function(agg, n){
         // || 조건문1이 거짓이면, 조건문2 실행.
         n % 2 == 0 || agg.push(n);
         return agg;
      }, );
         console.log(odds);

    //2. 실습문제
    // 페이지내의 버튼 속 글자를 배열에 담기 (reduce 사용)
      const texts = Array.from(document.querySelectorAll("button"))
      .reduce(function(arr, button){
         arr.push(button,textContent);
         return arr;
      }, []);
      console.log(texts);


    }









