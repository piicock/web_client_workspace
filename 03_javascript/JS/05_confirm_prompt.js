/**
 * confirm
 *   - 확인 true 반환
 *   - 취소 false 반환
 */

function test1() {
    const bool = confirm('이 파일을 정말 삭제하시겠습니까?');
    if(bool) {
        //삭제 처리
       alert('파일이 정상적으로 삭제되었습니다')

    }
     else {
        //삭제 취소
        alert('파일삭제를 추 ㅣ고 했씁니다')
     }
}

/**
 * prompt
 * - 사용자로부터 한줄입력을 받는 모달
 * - 확인 : 사용자 입력값이 반환
 * - 취소 : null이 반환
 */

function test2 () {
    const name = prompt('당신의 이름은 무엇입니까?' , '홍길동');
    console.log(name);


    //js의 특징: name은 string타입인데 if문 조건문으로 대입?
     // -> js가 자동으로 boolean으로 형변환을 해줘서 대입가능함, 값이 존재(-123, 123, "abc")하면 true, 없으면(null, undefined, 0 , "", 0.0) false
    if(name) {
     //정상립력한 경우

     // ,로 여러값을 출력하는건 console만 가능! alert는 불가능하다 하나의 문자열만 출력가능
    //  console.log("안녕하세요", name, "님")
    alert(`안녕하세요 ${name}님~
      뺵티긍로 하면 개헹문자도,띄어쓰기도 출력됩니다` )   //``사용해서 ,,변수값 출력할거면 ${} 사용하면 됨
    }
     else {
      //취소한 경우  
      alert("이름을 정상적으로 입력해주세요")
     }
}