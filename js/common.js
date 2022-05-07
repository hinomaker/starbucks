const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
 // 먼저  hthml에서 찾고 요소 안의 또 다른 요소는 htmㅣ에서 찾는게 아닌 찾아놓은 요소부터 시작해서 조금 더 최적화

 searchEl.addEventListener('click', function(){
   //검색요소를 선택하면 search input element -> input요소를 focus하겠다는 명령
   searchInputEl.focus(); // 포커스 강제 명령.
   //searchEl이라는 어떤 div 요소르 클릭하면 어떤 함수가 실행되는데 그 내용은 검색 부분의 input요소에 포커스를 해라 라는 내용
 });

 // search El에 focus가 되면 두 번째 인수로 작성하는 어떤 함수가 실행.
 searchInputEl.addEventListener('focus', function(){
   //뭐할래 add를 하면 특정 요소에 클래스 정보를 가지고 있느 객체에서 클래스 내용을 추가하겠다. 그 이름은 focused
   searchEl.classList.add('focused');
   // 그럼 검색부분에 focused가 추가되면 ㅇ우리가 css를 통해 선택자가 뭐가 추가 되었을 때 어떻게 바뀌겠다 이런 선언해줄수있다. 그리고 한가지만 더 하면
   
   searchInputEl.setAttribute('placeholder', '통합검색');
   // set이라는건 설정하는거지. attribute는 html의 속성을 attribute라고 한다고 했었다. 결국 이 input El에 html 속성을 지정한다. 그 속성은
   // setAttribute의 첫번째 인자는 속성이름, 두번쨰 인자는 속성에 들어갈 실제 값
 });

 // search El에 focus가 되면 두 번째 인수로 작성하는 어떤 함수가 실행.
 searchInputEl.addEventListener('blur', function(){
  //뭐할래 add를 하면 특정 요소에 클래스 정보를 가지고 있느 객체에서 클래스 내용을 추가하겠다. 그 이름은 focused
  searchEl.classList.remove('focused');
  // 그럼 검색부분에 focused가 추가되면 ㅇ우리가 css를 통해 선택자가 뭐가 추가 되었을 때 어떻게 바뀌겠다 이런 선언해줄수있다. 그리고 한가지만 더 하면
  
  searchInputEl.setAttribute('placeholder', '');
  // set이라는건 설정하는거지. attribute는 html의 속성을 attribute라고 한다고 했었다. 결국 이 input El에 html 속성을 지정한다. 그 속성은
  // setAttribute의 첫번째 인자는 속성이름, 두번쨰 인자는 속성에 들어갈 실제 값
});

const thisYear = document.querySelector('footer .this-year');
thisYear.textContent = new Date().getFullYear();