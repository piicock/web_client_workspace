/*
 class를 통한 제어
    - className (문자열)
    - classList객체
        - toggle (className: string)
        - 
        -
 */

function checkSubject() {
    console.log('checkSubject', checkbox);
    // 부모 td찾기
     const td = checkbox.parentElement;
     console.log(td);
     td.className = "on";
     
}