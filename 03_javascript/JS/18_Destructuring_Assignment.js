/**
 *  구조분해 할당
 *  - 배열이나 객페의 요소를 손쉽게 변수에 대입하는 방법.
 *  - 배열은 인덱스에 따라, 객체는 속성명에 따라 변수에 대입처리된다. 
 */
const test1 = () => {
   const arr = [1,2,3];
   // 이런 구조를 원하는 것인데..
//    const a = arr[0];
//    const b = arr[1];
//    const c = arr[2];

    // const [a,b,c] = arr;
    // const [a,b] = arr; // 0,1 인덱스만 값 대입
    const [ ,a,b] = arr; // 1,2 인덱스만 값 대입
    console.log(a,b);

    //자리교환
    let x = 10; 
    let y = 20;
    [x, y] = [y, x];
    console.log(x, y) 
    
    //기본값 지정
    const [l, m, n = 100 ] = [10, 20];
    console.log(l, m, n); // 10 20 undefined -> 10 20 100 (n에 100 =  해서//)

    //나머지파라미터
    const [i,j, ...k] = ['a' ,'b', 'c','d','e'];
    console.log(i,j,k); //a, b, ['c', 'd', 'e']
};

/**
 * - 매개변수
 * - 리턴값 처리
 */

const test2 = () => {
    foo(['홍길동', 99 ,89 , 79]);
    foo(['신사임당', 100 ,80 , 74]);

    const [sum, diff, pruduct, quotient , remainder] = bar(30, 20);
    console.log(sum, diff, pruduct, quotient , remainder);
}
//매개변수 부를 배열로 받는게 아니라, 구조분해로 받아서 요소의 참조를 간단하게 처리할수 있다.
// const foo = ([name, kor, eng, math]) => {
//     console.log(`${name} : 국어 ${kor}, 영어 ${eng}, 수학 ${math}`)
// }

//이런식으로 전개연산자 + 구조분해를 같이 이용 할수 있다.
const foo = ([name,...scores]) => {
    const [kor, eng, math] = scores;
    console.log(`${name} : 국어 ${kor}, 영어 ${eng}, 수학 ${math}`)
}

const bar = (num1, num2) => {
   [ num1 + num2,
     num1 - num2,
     num1 * num2,
     Math.trunc(num1 / num2),
     num1 % num2]
}


/**
 * 객체 구조분해 할당
 *  - 객체의 속성명을 통해 속성값을 변수에 대입하는 문법
 *  - 동일한 이름의 속성명을 참조
 */
const test3  = () => {
    const obj = {
        a:123,
        b:'Winter',
        c: true
    };

    // const a = obj.a;
    // const b = obj.b;
    // const c = obj.c;
    // console.log(a,b,c); //123 'Winter' true
    
    // 다른버전
    // const {a,b,c } = obj;
    // console.log(a,b,c); //123 'Winter' true
    // const {c,b,a } = obj;
    // console.log(a,b,c); //123 'Winter' true
    
    // const {c,b,x } = obj;
    // console.log(a,b,x); //오류.
    
    // const {c,b,x = 'ㅋㅋㅋ'} = obj;
    // console.log(a,b,x); //오류.

    //변수명을 다르게 하는경우
    const {a : num, b : season, c : bool, d: zzz = 'ㅎㅎㅎ'} = obj;
    console.log(num,season,bool ,zzz); //123 'Winter' true 'ㅎㅎㅎ'

    //중첩객체 처리
    const user = {
        id : 'honggd',
        name : {
            firstName : '길동',
            lastName : '홍'
        },
        sns : ['x', 'tiktok', 'instagram']
    };


    const {
        id,
        name : {
            firstName, lastName
        },
        sns : [
           mainSns, subSns 
        ]
    }  = user;
     console.log(id, firstName,lastName,mainSns, subSns); //honggd 길동 홍 x tiktok
   
    //나머지 파라미터!: 사용되지 않은 속성을 새 객체로 반환한다.
    const obj2 = {
        num : 10,
        text : 'ㅋㅋ',
        when : new Date()
    } ; 

    const {no,...rest} = obj2;
    console.log(no, rest);
    //num: 10, text: 'ㅋㅋ', when: Wed Nov 22 2023 16:33:24 GMT+0900 (한국 표준시)}
};
/**
 *  함수활용
 *  - 매개변수부
 *  - 리턴값 처리
 */

const test4 = () => {
     //유저 객체
    const user = {
        id : 'honggd',
        name : {
            firstName : '길동',
            lastName : '홍'
        },
        sns : ['x', 'tiktok', 'instagram']
    };

    printId(user);
    printName(user);
    printSns(user);
};

const printId = ({id}) => console.log(id);

const printName = ({name : {firstName, lastName}}) => console.log(`${firstName} ${lastName}`);
const printSns = ({sns : {mainSns, subSns, ...sns}}) => console.log(mainSns);

//화살표 함수에서 객체반환시 () 로 감싸야 한다! 안그럼 오류나;


const GetAcademyInfo = () =>  ({
    name : 'KH정보교육원',
    url : 'https://khacademy.co.kr',
    tel : ['070-123-4567', '070-4567-7890'],
    branches : {
        '강남' : { addr : '서울강남'},
        '종로' : { addr : '서울종로'},
        '당산' : { addr : '서울당산'}
  }
})

const a = () => 
{
    const { name, 
        url, 
        tel: [tel1, tel2],
        branches: {
            //강남, 종로, 당산은 그저 구분자역할.
            '강남' : {addr : addr1},
            '종로' : {addr : addr2},
            '당산' : {addr : addr3}
        }
    } = GetAcademyInfo(); 
    
    console.log(name, url, tel1, tel2, addr1, addr2, addr3);
   //KH정보교육원 https://khacademy.co.kr 070-123-4567 070-4567-7890 서울강남 서울종로 서울당산

}
