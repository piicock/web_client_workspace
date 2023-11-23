/**
 * java script는 prototype기반언어로서, prototype의 상속모델을 제공하고 있다.
 * - prototype 객체는,, 모든 객체들의 원본!
 *     - 자바로 따지면 상속개념인데 모든 클래스들의 조상인 object같은거?
 *     - JS에서는 클래스라는 개념이 없어서,
 */
const test1 = () => {
  const cars = [];
  cars.push(new Car('가렌'));
  cars.push(new Car('소나타'));
  cars.push(new Car('카니발'));

  console.log(cars);

  cars.forEach((car) => car.move());
}

function Car(name) {
    this.name = name;
    // this.move = function() {
    //     console.log(`${this.name}이/가 이동합니다.🚗`)
    // }  -->  Car.prototype.move 으로 대체됨.
}

// 현재 레벨에서는 move() 함수가 중복되어서,Prototype이용해. 중복 제거할 것임


//Car()의 포로토타입을 불러와서 . move라는 함수객체를 저장하는 코드.
Car.prototype.move = function() {
    console.log(`${this.name}이/가 이동합니다.🚗`)
}



/**
 * 2. Car() 를 상속하는 Truck만들기
 * - capacity 적재량?
 * 
 *  - 상속을 구현해 봅시다
 *    1. 부모생성자를 호출한다 [apply]
 *    2. 프로토타입 객체를 생성한다 [Object.creat]
 *    3. 프로토타입객체의 생성자 함수를 연결한다.
 * 
 */
const test2 = () => {
   const bongo  = new Truck('봉고', 1_000);
   console.log(bongo);
   bongo.move();
};

//name라는 매개변수를 상속 받고자 한다.

function Truck(name, capacity) {
  
    //1.내가 부모로 사용할 생성자함수를 호출한다.
        //apply? 자바의 super처럼
       //현재객체 기준으로 Car 생성자함수(부모로 사용할)를 호출해줌
   Car.apply(this, [name]);

   this.capacity = capacity;
}

// 2. 새로운 프로토타입 객체를 생성한다 (Car의 프로토 복사해서)
Truck.prototype = Object.create(Car.prototype);
//3. 생성한 프로토타입 객체에 생성자 함수를 연결한다
Truck.prototype.constructor = Truck;


/**
 *   this binding 함수들 
 *  - apply (this객체, [..params])
 *  - call (this객체, [..params])
 *  - bind (this객체 ) 특징: 바인딩 후에 함수를 반환함.
 * 
 *  = 화상표 함수는 this를 재 바이인딩  할 수없다.
 */

 const test3 = () => {
     //일반함수 
    const foo = function(a, b) {
         //일반함수에서 this는 윈도우객체를 가르킨다.
        console.log(this.id, a+b);
    };
    foo();


    const obj = {
        id : 'honggd123'
    };
    // foo.apply(obj, [10, 20]); // id : honggd123 출력 
    // foo.call(obj, 10, 20);

    const foo2 = foo.bind(obj);
    foo2(10, 20);
 }


 
/**
 * 1. 상속 실습문제 !
 * - BooK (
 *        책제목,
 *        저자,
 *        가격,
 *        info() : 책제목,저자,가격 출력)
 *  - Novel (
 *        book의 속성전부
 *        + type 소설종류 (연애|SF|심리|서정)
 *        read(이름) : `${누가}  ${책 제목}  ${타입}을 읽는다  ` 
 *        )
 * 
 */

const test4 = () => {
     const books = [
      new Novel('매트릭스', '네오', 35_000, 'sf'),
      new Novel('오라클 완전정복', '오라클', 25_000, '정보'),
      new Novel('So 스미스', '스미스', 15_000, '개그'),
     ];
    }


    books.forEach( (book) => {
        book.lnfo();
        book.read('홍길동');
    })

function Book(bookname,author,price ) {
    this.bookname = bookname;
    this.author = author;
    this.price = price;
 }

 Book.prototype.info = function() {
     console.log(`${this.bookname} / ${this.author}/${this.price}원`);
 }

 function Novel (bookname,author,price, type) {
    Book.call(this, bookname, author, price);
    this.type = type;
 }

 Novel.prototype = Object.create(Book.prototype);
 Novel.prototype.constructor = Novel;
 Novel.prototype.read = function(name) {
    console.log(`${name}/${this.bookname}/${name}/${name}`)
 }

 /**
  * - 생성자함수 객체 
  * - 프로토타입 객체
  * - 생성객체 :  new연산자의 호출결과를 의미.
  */
 const test5 = () => {

   const a = new A();
   console.log(a.id);    
   A.hello();

   //static
   console.log(A.id);
   A.hello();

}


//생성자 함수
  // A를 만든순간 -> A/A prototype 생성됨
  // new A  도 만들수 있음
function A () {

    //여기서 this는 새로 생성되는 new A()의 요소를 지칭/
   this.id = '가나다'
   this.hello = function() {
     console.log('안녕');
   }
}   

A.prototype.id = 'ABC';
A.prototype.hello = function() {
    console.log("HELLO")
}


// 함수객체에 직접 속성등록 (static) 
A.id = 'XXX';
A.hello = function() {
    console.log("XXX")
}



