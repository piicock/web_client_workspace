/**
 *  짧은 조건문  
 *  - (조건식) && (실행문) : true일때만 실행
 *  - (조건식) || (실행문) : false일떄만 실행
 *  - 실행문에는  return문 작성불가능 (if문 사용할 것)
 */

function test1 () {
    //prompt: 문자열 반환
  const num = Number(prompt("정수를 입력하세요," , 10));
  console.log(num);
  
  console.log(3 || 4);
  console.log(0 || 4);
  console.log(0 || 0);
  console.log(0.0 || false);
  console.log( "" || undefined);
  console.log('--------');

  console.log(3 && 4);
  console.log(10 && 23.3);
  console.log(false && 4);
  console.log(false && 0);
  console.log(1 && undefined);
  console.log(2 && 0.0);
  console.log("" && undefined);
//true && true => 우항검사 
//true && false => 우항검사
//false && true 
//false && false

//true && true   (||는 한개만 true면 true.)
//true && false
//false && true   => 우항검사
//false && false  => 우항검사



//   (num % 2 == 0 ) && alert("짝수입니다");
//    num이 짝수라면 true라서, alert실행
//  (num % 2 == 0 ) || alert("홀수입니다");
//    num이 홀수라면 false라서, alert실행

if(num % 2 == 0 )
   alert("짝수입니다")
else
  alert ("홀수입니다")


// null(false) || 실행문 -> 
  document.querySelector("#foo") 
  || (document.body.innerHTML += '<div id="foo">#foo가 없어서 생성할게요</div>');
  //body tag 하단에 HTML구문 추가
}

/**
 * ||
 */
function test2 ( ) {
  const a = 0;
  const b = 3;
  // a가 존재해서 true면, a를 대입. | a가 존재하지 않아서 false로 평가되면 b를 대입
  const c = a || b;
  console.log(c);

  // #foo 객체또는 #bar 객체를 변수 some에 대입.

   const some = document.querySelector("#foo") 
                || document.querySelector("#bar");
   console.log(some);             
}