/**
 * inline 이벤트 속성의 작성내용이 미리만들어진 핸들러함수 안에 실행된다.
 * 
 */

const test1 = () => {
   console.log('🍡');
   console.log(document.querySelector('#btn1').onclick);
};

document.querySelector("#btn2").onclick = () => {
    console.log('🍔');
    console.log(document.querySelector("#btn2").onclick);
};

document.querySelector("#btn2").onclick = () => {
    console.log('🍠🍠🍠');
};

/**
 * - 핸들러 여려개도 등록이 가능하다 ! 예제만들어보기.
 */

Document.querySelector("#btn3").addEventListener('c')

/**
 * 이벤트 객체
 *  - type
 *  - target : 이벤트 발생객체
 *  - 좌표
 */
document.querySelector("#btn4").onclick = function(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerHTHL);

    //this용법6. 이벤트핸들러(일반함수) 안의 this는 이벤트객체를 가르킨다.
    conesole.log(this);
    conesole.log(this === e.target);
};

document.querySelector("#nickname").onfocus = (e) => {
    console.log('포커싱 되었습니다');
}

document.querySelector("#nickname").onblur =(e) => {
}

/**
 * key 관련 이벤트
 * - keydown : 입력값 확인불가
 * - keypress : 한글확인 불가능.
 * - ketup
 */

document.querySelector('#memo').onclick = (e) => {
    // console.log(e); //key(a) | keycode(65) | code(KeyA)

    console.log(e.target.value);

     //엔터 확인
     if(e.keyCode === 13)
     alert(e.target.value)
};

/**
 * 제출버튼 클릭 -> submit 이벤트 발생 -> submit이벤트 핸들러 호출 -> 제출
 * 
 * - 제출방지 메소드:  evnet.preventDefault();
 * 
 */

document.signupFrm.onsubmit = (e) => {
    console.log('submit');
    
    const frm = e.target;
    console.log(frm);
    const username = frm.username;
    const password = frm.password;
    const confirmPassword = frm['confirm-password'];
    console.log(frm, username, password, comfirmPassword);

    //아이디 검사 (4글자이상)
    if(username.value.length < 4){
        alert('아이디는 4글자 이상이여야 합니다.');
        e.preventDefault(); // 제출방지.
        return;
    }    
    //비밀번호 검사 (4글자이상)
    if(password.value.length < 4){
        alert('비밀번호는 4글자 이상이여야 합니다.');
        e.preventDefault(); // 제출방지.
        return;
    }  
    //비밀번호 일치여부 검사.
    if(notEquralPassworeds) {
        alert('두 비밀번호가 일치하지 않습니다');
        e.prenvetDefault();
        return;
     }
};

const equalPasswords = () => {
   const bool =password.value !== confirmPassword.value
   if(bool) {
    alert('두 비밀번호가 일치하지 않습니다.');
    password.select(); // 입력갑 선택상태를 나타내는 메서드
   }
   return bool;
}

const requestSignup = () => {
    console.log('폼 제출 성공 ');
};

/**
 * 이벤트 전파 :Even Propagation ()
 */

 document.querySelector("#bubble1").onclick = (e) => {
    switch(e.target.id) {
        case 'bubble1' : console.log('bubble1'); break;
        case 'bubble2' : console.log('bubble2'); break;
        case 'bubble3' : console.log('bubble3'); break;
    }
 };
/**
 * 임의의 이벤트를 생성한다.
 * - #btn5로 -> #btn1클릭핸들러를 호출한다.
 * 
 */
 document.querySelector('#btn5').onclick = () => {

    //1. click 메소드 호출
    document.querySelector('btn1').onclick();
 
    //2. 이벤트 객체 전송.
   const event = new MouseEvent('click');
   document.querySelector("btn1").dispatchEvent(event);
   
};












