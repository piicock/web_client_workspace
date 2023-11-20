const foo = document.querySelector("#foo");
const bar = document.querySelector("#bar");
/**
 * innerHTML : getter로도 쓸수 있고 ,settr로도 사용가능
 *  - (getter) 자식태그가 포함된 내용을 반환함
 *  - (setter) 내용을 설정,.html가 있다면 html태그처리를 해줌과 동시에 DOM등록
 */

function test1 () {
    console.log(foo.innerHTML); // getter
    bar.innerHTML = foo.innerHTML; //setter  + getter
}

/**
 * innerText | textContent는 비슷하게 작동한다.둘이 비슷 비슷.
 *  - (getter) 자식HTML을 제외한 내용을 반환함
 *  - (setter) 텍스트로서 내용 추가 (HTML태그도 문자로 처리됨)
 */
function test2 () {
  console.log(foo.innerText); //getter
  bar.innerText = foo.innerHTML; //setter
}

/**
 * outerHTML
 *  - (getter) 태그 자신을 포함해서 자식 태그까지 반환한다.
 *  - (setter) 태그 자신을 교체한다.
 */
function test3 () {
  console.log(foo.outerHTML);
  foo.outerHTML = "<p id='soo'>안녕</p>"
}