/**
 *  Window
 *  - 브라우져 최상위객체
 *  - tab별로 하나씩 존재함.
 *  - BOM : navigator, history, screen, ...
 *  - DOM : document
 *  - java Script Object
 *  - ...
 */

const test1 = () => {
    console.log(window); //콘솔창에 띄워지는 것들중에 대문제로 시작하는 것들은 객체이름!
};


/**
 * Open
 * - 새창(탭/팝업)을 여는 함수.
 * - 새창의 window객체를 반환한다, 해당 창에 대한 제어가 가능!
 */
const test2 = () => {
 //open(url, name, spec)   
//  open('01_hellojs.html', 'helloJs', '');
 const newWindow = open('01_hellojs.html', 'helloJs', 'width=500, height =300, top=400, left=400');

//현재 탭을 대체하기!
//  const newWindow = open('01_hellojs.html', '_self');
 console.log(newWindow);

 setTimeout(() => {
    newWindow.close();
    newWindow.alert('🚗🚗🚗');
 }, 3000);
}


/**
 *  Time API - setTimeout
 *  - milli초 후에 callback함수 실행.
 *  - JS의 시간은 쓰레드 스케줄링에 의해서 늘어질수 있다,
 * 
 */

const test3 = () => {
    const timeoutID =  setTimeout(()=> {
    alert('🚈🚈🚈')
   }, 1000);
   console.log(timeoutID);
};

(() => {
    setTimeout(() => {
        console.log("dfdsfdsfds")
    }, 5000)
});

/**
 * setInterval (callbackFuntion, millis)
 *  - mills초후에 callbackFunction을 실행
 * - mills초 간격으로 callback Function을 실행
 * - clearInterval(id)로 취소하기 전까지 실행.
 */

let intervalID;
const test4 = () => {
    let i = 1;
    intervalID = setInterval (() => {
    } )
    setInterval( () => {
        console.log(i++);
    }, 1000);
    console.log()
}

/**
 * 실습문제 : 사용자 타이머.
 */

let timeoutID;
const test5 = () => {
    const message = document.querySelector("#message");
    const sec = document.querySelector("#sec");
    console.log(message.value, sec.value);
     
    const messageVal = message.value;
    //유효성 검사
    if(!message.value || !sec.value) {
        alert('유효한 값을 입력하세요! ')
        return;
    }
    
    timeoutID = setTimeout(() => {
      alert(message.value);
    }, sec.value * 1000);
    console.log(timeoutID, '번 타이머가 생성되었습니다.')

     // 입력값 초기화
     message.value = '';
     sec.value = '';
}

const test6 = () => {
    if(timeoutID){

        clearTimeout(timeoutID);
        alert('타이머가 취소 되었습니다.');
    }
};

/**
 *  실습 : 초기계만들기
 */
const f = (n) => n < 10 ? '0'+ n : n;
const clock = () => {
 const d = new Date();  //현재시각을 하나 출력하려는 의도로 만듦.
 const hh = f(d.getHours()); 
 const mm = f(d.getMinutes()); 
 const ss = f(d.getSeconds()); 
console.log(`${hh}:${mm}:${ss}`)
};


setInterval(() => {
  document.querySelector("")    
}, interval);


