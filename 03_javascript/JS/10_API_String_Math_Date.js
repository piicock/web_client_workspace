/**
 *  String
 *  - "" ,'' 로 리터럴을 감싸서 표현한다
 *  - String 내장객체에서 제공하는 API 사용
 */
function test1 () {
  const str = "Apple Samsung PingApple";
  console.log(str);

  //str.length : 문자의 길이의 수를 알 수 있음
  console.log(str.length);
  //str는 배열취급 당해서, for을 통해 원하는 인덱스의 글자만 뽑아올수 잇따
//   for (let i =0; i <str.length ; i++) {

//     console.log(str.charAt(i));
//   }

console.log(str.toLowerCase());  //Immutable 이라서, 원본은 훼손되지 않고 그대로 존재.
console.log(str.toUpperCase());  //Immutable 이라서, 원본은 훼손되지 않고 그대로 존재.
console.log(str); 


//1. 원하는 글자가 어느 인덱스에 있는지 알려주는 기능
console.log(str.indexOf('Sam')); //6
console.log(str.indexOf('Apple')); //0
console.log(str.lastIndexOf('Apple')); //18 (뒤에서 첫번쨰로 나타나는 apple의 위치.)


//2. 문자열에서 <원하는 인덱스 ~ 원하는 길이>만큼 문자열 추출하는 기능.
// substring(start index, end index )
// substr(start index(추출할 글자의 기준 인덱스), length만큼 글자수 추출.)
console.log(str.substring(6, 9));  //Sam
console.log(str.substr(6, 3)); // Sam
// 종료인덱스 기입X 시 끝까지 추출.
console.log(str.substring(6)); //Samsung PineApple
console.log(str.substr(6)); //Samsung PineApple


//3. 검색한 글자를, newstr로 변경하는 기능
//replace(search, newStr) 
//replaceAll(search, newStr) - EXMA2021에 추가된 기능임/.
console.log(str.replace('Apple', '사과')); // 처음위치에서 나오는 Apple만 사과로 변경.
console.log(str.replaceAll('Apple', '사과')); //모든 위치의 단어변경


//4. 문자열을 특정 문자 기준으로 쪼개는 기능.
console.log(str.split(' ')); //['Apple', 'Samsung', 'PingApple']

}



/**
 *  @실습 문제:사용자 입력값에서 알파벳 개수 세기
 * - prompt를 통해 임이의 문자열을 받고 알파벳을 개수를 세서 출력하기.
 */
// function test2 () {
//    const str = prompt("텍스트를 입력하세요").toLocaleLowerCase;

//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     const strchr = str[i];
//    if ( /^[a-z]$/ == str[i] ) {
//      count += 1;
//    }
//   }
//     console.log(count);

// }

// function test2 () {
//     const str = prompt("텍스트를 입력하세요");
//     if(!str)  {
//         alert("유효한 문자열 입력해주십쇼");
//         return;
//     }

//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i]);
//         if(str[i] >= "A" && str[i] <= "Z")
//         count++;
//         if(str[i] >= "a" && str[i] <= "b")
//         count++ ;
//     }
//     alert("입력하신 문자열 ${str}에서 알파벳의 개수는 %{count}입니다.")
//  }

 function test2()
{
    //@실습문제:사용자 입력값에서 알파벳 개수 세기
    /**
     * prompt를 통해 임의의 문자열을 받고 알파벳 개수 출력
     */
    const str = prompt(`문자열을 입력해주세요`);
    const newStr = str.replace(/[^a-zA-Z]/g,'');
    console.log('알파벳은 ',newStr.length,'개입니다.');
}


/**
 * Math
 *  - ramdom
 *  - ceil
 *  - round
 *  - floor
 *  - trunc
 */
function test3() {
   // 0.0이상~ 1.0미만의 실수를 반환
   //Math.trunc(Math.random()* 경우의수 + 최소 값)
   console.log(Math.trunc(Math.random()* 10 +1));

   console.log(Math.ceil(12.34)); // 올림
   console.log(Math.round(12.5)); //반올림
   console.log(Math.floor(12.34)); // 내림
   console.log(Math.trunc(12.34)); //소수점 이하 버림

   console.log(Math.floor(-3.4), Math.trunc(-3.4)); //소수점 이하 버림 //-4 -3


   // 123.456 반올림해서 123.46 출력
   const num = 123.456;
   console.log(   (Math.round(num*100)) /100  );
}

//
//       - 
/**
 *  @실습문제: 난수목록태그 만들고 짝수만 컬러변경하기 
 *  - ul id="nums"(li*30)에 난수대입
 *  - 버튼을 누리면 숫자/컬러가 새로 지정되어야 함.
 */
//내가 만든 코드
function test4() {
   //1. li에 랜덤한 값 기입
   const lis = document.getElementsByTagName("li");
     let num = 0;
     for(let i =0; i<lis.length; i++ ) {
      num = Math.trunc((Math.random())*100 + 1);
    //   console.log(num);
      lis[i].innerText = num; 

      console.log(lis[i], typeof lis); 
    }

}

function ttest4() {
    const lis = document.querySelectorAll("ul#nums li")
      console.log(lis);

      for(let i =0; i<lis.length; i++ ) {
        lis[i].style.color = 'initial';  //값 초기화시키는 메서드 = initial.
       const num = Math.trunc((Math.random())*100 + 1);
       lis[i].innerText = num; 

       num % 2 == 0 && (lis[i].style.color = 'blue');
     }

 
 }


 /**
  * Date
  * - 날짜와 시각을 관리하는 객체
  * - 기본적으로 시스템시각을 읽어와서 사용
  */
 function test5() {
    const now = new Date(); //new 생성자 함수를 호출해서 now변수에 담기
    console.log(now);

    console.log(now.getFullYear());
    console.log(now.getMonth() +1); // 0~ 11반환
    console.log(now.getDate());

    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());

    console.log(Date.now()); //UCT time/초 (Epoch Time)

    const date = new Date(Date.now()); //UTC time으로 DATE객체 생성하기
    console.log(date);

    //특정날짜/시각객체
    const someday = new Date(1999, 8, 9, 12, 30);
    console.log(someday);
 }

/**
 * start, end시간을 밀리초로 각각 구해서 차이를 계산
 */
 function test6 () {
    //   const start = Date.now();
    //   foo();
    //   const end = Date.now();
    //   console.log((end-start, 'ms'));
      
      console.time('Test');
      foo();
      console.timeEnd('Test');
    }

 function foo () {
    let sum = 0;
    for(let i = 0; i< 100000; i++) 
      sum += i;
    console.log(sum);
 }