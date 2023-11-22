/**
 * 객체 배열!
 */

const test1 = () => {
    const pets = [];
    pets.push({
        name : '구리구리',
        bread : '푸들',
        weight : 3,
        age : 10,
        color : ['white'],
        brak() {
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });

    pets.push({
        name : '맹맹',
        bread : '치와와',
        weight : 2,
        age : 2,
        color : ['white'],
        brak() {
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });

   pets.push({
        name : '왕왕',
        bread : '허스키',
        weight : 21,
        age : 3,
        color : ['black'],
        brak() {
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });
  
    console.log(pets);

}

/**
 *  생성자 함수 ?
 * - new 연산자랑 함께 호출되는 함수
 * - 해당 타입의 객체를 반환시킨다.
 * - 대문자로 시작하는 이름을 가진다(관례적인것 )
 * - this용법3. 생성자함수(new연산자로 호출)안 this는 현재객체를 가리킨다.
 */

const test2 = () => {
    const pets = [];
    pets.push(new Pet('구리', '푸들', 3 ,10 , 'white'));
    pets.push(new Pet('감자', '진도', 5 ,14 , 'white'));
    pets.push(new Pet('사랑', '치와와', 1 ,4 , 'black'));
    console.log(pets);

    pets.forEach((pet) => console.log(`${pet.name}이 ${pet.brak()} 짖는다 🐶`))
}

function Pet (name, breed, weigth, age, ...colors) {
    this.name;
    this.breed;
    this.weight;
    this.age;
    this.colors;
    // this.brak = function() {
    //     return this.weight < 10 ? '왈왈' : '멍멍';
    // };


      //객체안의 함수는 지양할것.
    //자기 this가 없으면 부모의 this를 가져다가 쓴다.
    this.brak = () => {
        return this.weight < 10 ? '왈왈' : '멍멍';
    };
}


/**
 * this용법4, 일반함수 안에서 this는 window객체를 가리킨다.
 *  - window 브라우져 최상위 객채 (DOM, js object, Bom, ... )
 */

const test3 = function(){
    console.log(this); //window가 나옴
    console.log(window, globalThis);
}

