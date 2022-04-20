# Wanted_pre_onboarding

원티드 프리온보딩 코스

## 스택

> React.JS
> Styled Component

## 구조

```
├─common
│   color.js
│   form.js
│
├─components
│   dropdown.js
│   input.js
│   slider.js
│   tab.js
│   toggle.js
│ App.css
│ App.js
│ index.js
```

## layout

각 컴포넌트의 기능 구현을 목적으로 하고 있어 CSS-in-JS인 Styled component를 사용 구현

컴포넌트의 Props를 사용할 수 있어 값에 따른 스타일 조정과 한 파일 안에서 스타일을 정할 수 있는 부분이 장점이라 생각되어 적용하였습니다.

App.js form.js 안에 기능 컴포넌트들을 작성하여 동일한 레이아웃을 적용하도록 노력했습니다.

## 각 컴포넌트의 구현방법과 이유 어려웠던 점

- Toggle.js

  ```javascript
  const [isOn, setIsOn] = useState(false); //오른쪽에 위치하는것이 on(true)의 기준
  ```

  > Toggle에서는 위의 isOn state를 이용하여 컴포넌트를 구성하였습니다.
  > isOn을 통해 Toggle버튼을 작동하고 있는데 각 버튼을 선택했을 때 컴포넌트에 isOn을 전달하여 Slider animation과 텍스트의 color 변경하게 됩니다.

- Tab.js

  ```javascript
  const [currentTab, setCurrentTab] = useState(0);
  const tabArr = ['감자', '고구마', '카레라이스'];
  ```

  > tab에서는 위의 currentTab state를 이용하여 컴포넌트를 구성하였습니다.
  > 각 탭의 구성요소들을 array로 생성하여 makeTab arrowfunction을 통해 테그를 생성
  > TabItem에서 onClick을 통해 현재 선택된 tab의 index로 currentTab을 변경 currentTab의 prop을 전달하여 선택된 탭의 텍스트 color를 변경해준다.
  > LineTab 에서 currentTab prop을 받아 다항연산자를 통해서 Line위치를 이동시켜줍니다.

- Slider.js

  ```javascript
  const [value, setValue] = useState(500); // value의 범위를 1~1000으로 설정
  const valueArr = [1, 250, 500, 750, 1000]; // pixel 매칭을 위해 잘게 분할
  ```

  > slider에서는 value state를 이용하여 컴포넌트를 구성하였습니다.
  > 최대한 선발과제에서 주어진 부분을 따라 하도록 UI부분에서 노력을 하였습니다.
  > Input 테그의 range를 이용하여 형태를 구현 하였는데 1~ 100% 값을 사용했을 때 픽셀 매칭이 미세하게 적용이 안 되는 부분이 있어 1~1000의 범위 값을 준 뒤 해당 값을 세팅 해주는 부분에서 % 에 맞춰 값을 나누고 Math.ceil을 이용하여 올림을 통해 값을 표시하였습니다.
  > 슬라이더의 구간에 있는 circle을 표현해주기 위해 슬라이더 Input에 z-index 값을 설정하여 배경에 구간의 원을 표현하였습니다.
  > active라는 props를 통해 해당 슬라이더 구간의 circle에 색상을 변경해주었습니다.
  > 버튼을 이용하여 value 값을 변경시키면 해당 위치에 슬라이더 thumb 이동하면서 슬라이더 기능이 작동합니다.
  > 브라우저 호환성을 위해 파이어폭스에 맞는 css를 적용하였습니다.

  어려웠던점

  > 최대한 css를 비슷한 환경으로 세팅해서 각 구간의 픽셀 매칭을 구현하는 부분이 어려웠습니다.  
  > 움직이는 슬라이더의 slider Thumb 가 끝점에 닿았을 때의 원이 슬라이더 바의 끝에 걸려 실질적으로 flex로 구현하는 css에서의 픽셀 매칭이 어려운 부분이 있었습니다.
  > 브라우저 호환성을 생각하여 css를 작성하는 부분이 어려웠습니다. chorom과 safari에서는 slider의 진행에 색상 주는 것을 uperSlider라는 arrowfunction을 만들어 box-shadow값을 이용하여 슬라이더를 표현하는 것이 어려웠고, Firefox를 브라우저를 받아 css를 수정하며 브라우저의 호환성의 문제도 항상 생각해야 하는 것을 알게 되었습니다.

  ```javascript
  const uperSlider = (color, size) => {
    let i = 12;
    let shadow = `${i}px 0 0 ${size} ${color}`;

    for (i; i < 500; i++) {
      shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
    }

    return shadow;
  };
  ```

- Input.js

  ```javascript
  const [printMsg, setPrintMsg] = useState(false); // vaildText 출력 여부
  const [emailTxt, setEmailTxt] = useState(''); // 등록되는 텍스트 값
  const [vaildEmail, setVaildEmail] = useState(false); // email 형식 맞는 여부
  const [showPwd, setShowPwd] = useState(false); // 패스워드
  ```

  > Input에서는 위의 4가지의 state를 이용하여 input 컴포넌트를 구성하였습니다.
  > 이메일 체크 기능은 Input의 onChange를 이용 변경되는 값을 checkRgexEmail에서 정규식을 통해 값을 체크 값의 조건에 부합하면 setVaildEmail을 true로 변경하고 이메일 인풋에 있는 icon의 색상을 변경하여 이메일 형식과 맞으면 자동으로 체크됩니다.

  ```javascript
  const checkRgexEmail = e => {
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e)) {
      setVaildEmail(true);
    } else {
      setVaildEmail(false);
    }
  };
  ```

  > onBlur를 사용하여 포커스가 풀리게 되면 이메일 형식과 맞지 않는 경우 인풋 하단에 invaild e-mail address를 띄워줍니다.
  > password Input은 눈모양 Icon에 onClick 이벤트를 줘서 className을 변경하는 방식으로 비밀번호 노출 여부를 설정하였습니다.

  어려웠던점

  > 기능 자체는 간단하다고 생각하였는데. styled-component를 쓰다 보니 테그들이 복잡하다는 생각이 많이 들었습니다. 아이템들을 감싸는 테그들을 생성할 때 styled를 사용할지 아니면 그냥 의미 없는 div테그들을 감싸야 하는 건지 혼자서 판단하기 어려운 부분이 항상 있는 것 같습니다.

- dropdown.js

  ```javascript
  // 드롭다운 메뉴
  const dropDownArr = [
    'BTCUSD.PERP',
    'ETHUSD.PERP',
    'BCHUSD.PERP',
    'LTCUSD.PERP',
    'XRPUSD.PERP',
    '1000SHIBUSD.PERP',
  ];
  const [isOpen, setIsOpen] = useState(false); // dropdown 메뉴 오픈 여부
  const [searchText, setSearchText] = useState(''); // 현재 검색값
  const [selectedText, setSelectedText] = useState('All Symbols'); // 선택된 값
  const [isAll, setIsAll] = useState(true); // dropdownItem의 전체 보여주기 여부
  const inputRef = useRef(null);
  const wrapRef = useRef(null);
  ```

  > dropdown 에서는 위의 state 값과 ref 값을 이용하여 컴포넌트를 구성하였습니다.
  > 드롭다운을 누르면 isOpen값이 true로 변경되면서 선택창이 펼쳐집니다.
  > 선택 창이 열리면 input에 자동으로 focus가 되어 있어 바로 입력이 가능하게 되어 있습니다.
  > Input창에 값을 입력하면 makeMenu를 통해 searchText값과 dropDownArr와 비교하여 map을 통해 테그를 생성하도록 만들었습니다.

  ```javascript
  // search 기능 : searchText를 indexOf로 비교하여 menu를 출력
  const makeMenu = arr => {
    let data = arr;
    if (!isAll) {
      data = data.filter(str => {
        return str.toLowerCase().indexOf(searchText.toLowerCase()) > -1; // search하는 값도 toLowercase를 통해 동일한 조건으로 검색
      });
    }
    const menu = data.map((str, i) => {
      return (
        <Menu key={i} onClick={e => onMenuClick(str, e)}>
          {str}
        </Menu>
      );
    });
    return menu;
  };
  ```

  > 검색하는 상태에서 allSymbols를 선택하게 되면 isall, selectedText, searchText를 초기화 시켜 줍니다.
  > 드롭다운 선택 창의 바깥 레이아웃을 선택하면 선택 창을 닫을 수 있습니다.

어려웠던점

> 드롭다운이 열렸을 때 input의 값을 바로 입력할 수 없어 사용성에 불편하다고 생각하여 input 창에 바로 포커스가 가도록 하는 것을 구현하는 게 어려웠습니다.
> 해결 방법은 컴포넌트가 드롭다운이 열렸을 때 랜더링이 되기 때문에 useEffect 훅을 이용하여 input에 useRef를 이용 dom 요소를 받아 해당 input에 포커스를 주는 방식으로 해결하였습니다.

```javascript
// isOpen값이 변경될때 Input의 ref값을 이용하여 테그에 focus를 준다.
useEffect(() => {
  if (inputRef.current !== null) inputRef.current.focus();
}, [isOpen]);
```

> 드롭다운이 열렸을때 allSymbols를 선택하는 경우에는 선택 메뉴를 전부 보여주게 되는데 드롭다운 컴포넌트의 초기 시작이 allSymbols가 선택된 상태였기 때문에 이 부분을 구현하였습니다.
> react 공식 문서에서 소개되어 있어 useEffect를 사용하여 코드를 짰습니다.
> 리 랜더링이 될 때 반응하여 mousedown이 발생할 때마다 clickOutside가 호출합니다.
> 이때 document.addEventListener가 스스로 종료되지 않아 이것을 useeffect에서 언 마운트 처리가 필요하여 cleanup 함수인 document.removeEventListener 통해 이벤트 리스너를 종료 컴포넌트가 사라질 때 cleanup 함수가 호출되게 코드를 짜는 것이 어려운 부분이었습니다.

```javascript
// dropdown의 외부 요소를 선택하면 메뉴를 닫아 주는 기능
useEffect(() => {
  const clickOutside = e => {
    if (isOpen && !wrapRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  // Bind the event listener
  document.addEventListener('mousedown', clickOutside);
  // Unbind the event listener on clean up
  return () => {
    document.removeEventListener('mousedown', clickOutside);
  };
});
```
