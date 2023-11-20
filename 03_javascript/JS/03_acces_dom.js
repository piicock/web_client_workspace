/**
 * DoM  DocumentObject Model
 * html문서(텍스트 형태)의 계층구조를 반영해 javascript객체로 변환시켜줌
 * - Document
 * - 따라서 DOM안에는 내가 기입한 태그들이 전부 들어있다.
 */
console.log(document);

/**
 *1.  document.getElementById(Id: string): HTMLElement | null
      id는 고유값이라 tag한개만을 포함하고 있어서 단수형. <Element>
 */

//.id로 
function getById(){
  const li1 =  document.getElementById("li1");//id=li1의 값을 변수에 담음.id값과 class값을 반환
  console.log('1',li1 ,typeof li1); //li1의 query내용 + 변수타입 출력
  console.dir(2, li1); //객체 계층구조로 열람

  console.log(li1.innerHTML); //getter
  li1.innerHTML = '안녕자바 스크립트.1 ' //setter : li1(id)의 내용을 변경한다.

  const notExist = document.getElementById('asdagdsgage');
  // nnull은 : object타입의 값없음 의미
  console.log(notExist, typeof notExist); //null 'object' -> 없는 id값을 getter해서..
}

/**
 * 2. document.getElmentsByTagName (tagName: string): object배열이 반환됨
 */
function getBytag(){
   const list = document.getElementsByTagName("li");
   console.log(list, typeof list);


   for(let i =0; i <list.length; i++){
    console.log(list[i]);
    list[i].style.backgroundColor = 'hotpink'
    list[i].style.color = 'white'
   }
}

/**
 * 3. document.getElementsByClassNnam (class: string) : object []
 */
//
function getByclass(){
    const group1 = document.getElementsByClassName("group1");
    // const groups = document.getElementsByClassName(" group1 group2 "); 이런복수형태로 조회가능.

    console.log(group1, typeof group1);

    //hello Js 1 [Group1]
   for(let i =0; i <group1.length; i++) {
    group1[i].innerHTML = group1[i].innerHTML + '[Group1]';
   }

}
/**
 * getElementsByName (name: string) : ojbect[]
  */
function getByName () {
    const hobbies = document.getElementsByName('hobby')
    console.log(hobbies, typeof hobbies);

   let hobbyChecked = '';
    for(let i = 0; i< hobbies.length; i++) {
        if(hobbies[i].checked) {
           hobbyChecked += hobbies.values + " ";
        }
    }
    alert(hobbyChecked);
 
   }


   

   /**
    * [name=hobby] 체크 박스를 모든버튼 선택/해체
    */

   function checkAll () {
    const hobbies = document.getElementsByName("hobby");
    const all = document.getElementsById("all");
    //Id는 유일하기 떄문에 해당 아이디를 변수처럼 바로 사용가능
   
    // for(let i = 0 ; hobbies.length; i++) {
    //     hobbies[i].checked = ture;
    //  }

    for(let i = 0 ; hobbies.length; i++) {
        hobbies[i].checked = all.checked;
     }
    }




   function checkName ( ) {
    const name = document.getElementById("name").value;
 
    alert("입력하신 이름은 " + name);
   }

   /**
    * document.querySelecter (selector :string) : HTMLElenment | null;
    * css선택자를 이용해서 하나의 DOM요소를 반환
    * - 여러개의 요소를 반환하느 ㄴ선택자를 사용한 겅유 첫번째 요소만 반환
    */
   function _querySelector () {
     const li1 = document.querySelector("#li1")
     console.log(li1);
     li1.innerHTML = "안녕"

     const li = document.querySelector("li");
     console.log(li);

   }


   /**
    * CSS선태자를 이용해서 여러개 DOM요소를 배열로 반환
    */
   function _querySelectorAll () {
     //()안에는 어떤한 선택자도 기입될수 있다.
      const list = document.querySelectorAll("li.group1")
      console.log(list);
    //   list.innerHTML = 'ZZZ' -> list배열이라 이렇게 하면 안됨, 반복문 사용해야함
   // 배열객체에는 inneHTML 속성이 없다.
    for(let i = 0; i <list.length; i++) {
       list[i].innerHTML = 'XXXXX';
    }
   }
















