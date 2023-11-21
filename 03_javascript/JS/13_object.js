/**
 * 객체?
 *  - 속성(속성명 = 속성값) 모음
 *    - 속성 명 : 모든타입 가능.  문자열/식별자 추천! 
 *    - 속성 값 : 모든타입 가능 
 */

const test1 = () => {
    const obj = {
        id : 'honggh',
        name : '홍길동',
        age : 33,
        married : true,
        hobby : ['게임','독서'] ,
        pet : {
            name: '구리구리'
        },
        123 : 456,
        "user-name" : "sinsa"
    };
    console.log(obj);
    
    //new 연산자
    const obj2 = new Object();
    obj2.kor = 88;
    obj2.eng = 77;
    obj2.math = 55;
    console.log(obj2);

    //속성접근
    // 1. dot-notation
    //2. bracket-notation


    // 1. dot-notation
    console.log(obj.id);
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.married);
    console.log(obj.hobby);
    console.log(obj.hobby[0]);
    console.log(obj.pet.name);
    // console.log(obj.123); 오류
    // console.log(obj.user-name); 오류 
    
    //2. bracket-notation 문자열로 속성명 작성!!
    console.log(obj['id']);
    console.log(obj['name']);
    console.log(obj['age']);
    console.log(obj['married']);
    console.log(obj['hobby']);
    console.log(obj['hobby'][0]);
    console.log(obj['pet']['name']);
    console.log(obj['123']);
    console.log(obj['user-name']);
    
    //존재하지 않는 속성을 참조
    console.log(obj.father); // undefined, 오류는 안남.
    // console.log(obj.father.job()); // 오류: Uncaught TypeError: Cannot read properties of undefined
    obj.father = '홍명보';
    obj.father = '홍금금'; //father가 덮여짐. override.
    console.log(obj);

    //속성값 제거
    obj.hobby = undefined; //취미가 담고 있는 값만 날림 

    //속성 자체를 제거
    delete obj.hobby;
    
    
};

/**
 * function : (superset)
 *  method : (subset) - 함수가 객체소속이 되는순간 메소드가 됨.
 *         - 다른말로, 객체의 속성이 함수다?> 그러면 메소드.
 */
const test2 = () => {
    const user = {
        username : '홍길동',
        run : function() {
            //this용법2 : 객체메소드(일반함수일 때) 안의 this는 현재객채를 가리킨다. 
            console.log(`${this.username}이/가 달린다,달린다`)
        },
        //일반 함수가 아닌 것? 화살표 함수.

        //메소드 단축 문법(일반함수): 지역에서만 가능.
        eat(food) {
            console.log(`${this.username}이/가 ${food}를 먹는다`);
        }
    }

    console.log(user.username);
    user.run();
    user.eat('🍣');

     user['run']();
     user['eat']('🥓');  //함수의 이름도 [] 으로 호출가능!
   

}
/**
 * 관련된 함수를 전역에 선언하지 않고, 
 *  객체 안에 선언하면, 객체를 name space로 사용할수 있다.
 */
const calculator = {
  plus(a,b) {
     return a + b
  },
  minus(a,b) {
     return a - b
  },
  multiply(a,b) {
     return a * b
  },
  divide(a,b) {
     return a / b
  },
  remainder(a,b) {
     return a % b
  }
}


const test3 = () => {
   
   console.log(calculator.plus(10 , 20))
   console.log(calculator.minus(10 , 20))
   console.log(calculator.multiply(10 , 20))
   console.log(calculator.divide(10 , 20))
   console.log(calculator.remainder(10 , 20))
};

/**
 * for ..in 문
 *  - Object.keys()
 *  - Object.values()
 */
const test4 = () => {
   const obj = {
    name : '청국장',
    price : 15_000,
    ingredients : ['청국장','양파','마늘', '파']
   };
    //for ..in 문
   for(prop in obj) {
    console.log(prop, obj[prop]);
   }
     //Object.keys()
    const keys = Object.keys(obj);
    console.log(keys);//배열로 반환 (3) ['name', 'price', 'ingredients']
    keys.forEach((key) => console.log(key, obj[key]));

    //Object.values()
    const values = Object.values(obj);
    values.forEach(value => console.log(value));
};