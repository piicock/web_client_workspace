/**
 *  Array
 *  - js배열은 타입지정이 없고, 크기의 제한이 없다.
 *  - java의 ArrayLidt<Object>와 비슷. 
 */
function test1() {
   const arr1 = [1,2,3]; //리터럴로 생성.
   const arr2 = new Array(1,2,3); //new 연성자로 생성

   console.log(arr1);
   console.log(arr2);
   console.log(arr1 == arr2); // 값이 같아도, 다른 배열이라 false

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
 *  - for in문 : 각속성명(dindex)을 매턴마다 반환.
 *  - for of문 : 각 속성값을 반환.
 */
function test2 () {
    const arr = ['a','b','c','d','e' ]

    ///for ..in
    for(const index in arr) {
        console.log(index, arr[indext]);
        
    }

    // for ..of : 인덱스값이 없다면 for of가 가장 간단.
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
   const arr3 = [...arr, ...arr2];
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
   console.log(arr);
   const buttons = document.getElementsByTagName("button");
   console.log(buttons);

   arr.map((n) => {console.log(n); });


   //진짜 배열로 반환학.
//    1. 전개연산자   ---------이하 코드 다 놓침
  console.log([...arr])

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
   console.log(arr.indexOf('멜론'));
   console.log(arr.indexOf('바나나'));
   console.log(arr.indexOf('사과'));
   console.log(arr.lastIndexOf('사과'));


     //find
     console.log(arr.find(function(fruit) {
        // return fruit === '귤'
        //    return fruit.length === 4
           return fruit.startsWith('딸');
          
     } ));
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