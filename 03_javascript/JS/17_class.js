/**
 *  class
 *  - 생성자함수의 개선된 문법
 *  - constructor 생성자
 *  - 필드
 *  - 메소드
 *   - static 필드
 *   - static 메소드
 */

const test1 = () => {
  const honggd = new Person ('홍길동', 33);
  console.log(honggd);

  console.log(Person, typeof Person);
  console.log(Person.prototype);
  console.log(Person.prototype == honggd.__proto__); //true

  console.log(Person.X);
  Person.y();

};

//생성자 함수 Person 선언.
class Person {
    static x = 100;
    static y(){
      console.log('yyy');
    }
   
   constructor(name, age) {
    // super(); //부모생성자 호출 가능 ->상속배울때 배울거니까 무시 ㄱㄱ
     //constructor? new 연산자에 의해 호출되는 생성자 메서드 
    this.name = name;
    this.age = age;
    }


    //Person.prototype에 작성된다. - Person객체가 상속하고 공유함.
    sayHello () {
        console.log(`안녕하세요 ,${this.age}세 ${this.name} 입니다.`)
    }

}


/**
 * 상속
 *  - extends 부모클래스
 *  - 생성자안에서 super() 부모생성자 호출가능.
 *  - override 가능. 
 *  - super. 부모 필드/메서드에 접근가능.
 */
const test2 = () => {
    const honggd = new Dev('홍길동',33,'엄랭');
    console.log(honggd);

    //sayhello는 상속받은 함수이지만 ovrride를 해서 내용이 변경됨.
    honggd.sayHello();
};

class Dev extends Person {
   constructor (name, age , lang) {
     super(name, age);  //Person.apply(this.[name,age])
     this.lang = lang;
   }
    // override
   sayHello() {
      //상속받은 sayhello() 호출.
      super.sayHello();
      console.log(`저는 ${this.lang}개발자 입니다`)
   }
}

/**
 * @실습문제1. 상속 연습
 */
const test3 = () => {
  const books = [
   new Novel('매트릭스', '네오', 35_000, 'sf'),
   new Novel('오라클 완전정복', '오라클', 25_000, '정보'),
   new Novel('So 스미스', '스미스', 15_000, '개그'),
  ];

  books.forEach((book) => {
      book.lnfo();
      book.read('홍길동');
  })
 }



 class Book {
    constructor(title, author, price) {
       this.title = title;
       this.author = author;
       this.price = price;
    }
 
    info () {
      console.log(`${this.title}/${this.author}/${this.price}원 입니다.`);
    }
 }


 class Novel extends Book{
     constructor(title,author,price, type) {
       super(title,author,price);
       this.type = type;
     } 

     read (name) {
        console.log(`${name}/${this.title}/${this.author}/${this.price}`)
     }
 }