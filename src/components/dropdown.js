import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropdown, IoMdSearch } from 'react-icons/io';
import { colorCode } from '../common/color';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  color: ${colorCode.font_gray};
  .search_icon {
    margin-left: 10px;
  }
`;
const DropDownWrap = styled.div`
  display: flex;
  width: 250px;
  height: 400px;
  margin: 10px;
  background-color: ${colorCode.wrap_gray};
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`;
const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  border: 1px solid ${colorCode.border_gray};
  margin-top: 4px;
`;
const SelectedMenu = styled.div`
  display: flex;
  width: 200px;
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid ${colorCode.border_gray};
  margin: 0 auto;
  border-radius: 4px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const Menu = styled.div`
  display: flex;
  margin-right: auto;
  width: 90%;
  height: 22px;
  margin: 4px;
  margin-left: 24px;
  cursor: pointer;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${colorCode.border_gray}; ;
`;
const Input = styled.input`
  width: 90%;
  height: 22px;
  margin: 5px;
  padding: 0px;
  color: ${colorCode.font_gray};
  background-color: ${colorCode.wrap_gray};
  border: 0 solid ${colorCode.black};
  :focus {
    outline: none;
  }
`;

const DropDown = () => {
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
  const [isAll, setIsAll] = useState(true); // dropdownItem의 전체 보여주기 t/f여부
  const inputRef = useRef(null);
  const wrapRef = useRef(null);

  // isOpen값이 변경될때 Input의 ref값을 이용하여 테그에 focus를 준다.
  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, [isOpen]);

  // dropdown의 외부 요소를 선택하면 메뉴를 닫아 주는 기능
  // 리랜더링이 될때 반응하여 mousedown이 발생할 때마다 clickOutside가 호출됨
  // document.addEventListener가 스스로 종료되지 않아 이것을 useeffect에서
  // 언마운트 처리가 필요하여 cleanup document.removeEventListener 통해 이벤트 리스너를 종료
  // 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다.
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

  // 각 메뉴를 선택 handller
  const onMenuClick = (str, e) => {
    e.preventDefault();
    setIsOpen(false);
    setSelectedText(str);
    setIsAll(true);
  };
  // dropdown open handller
  const onOpenClick = () => {
    setIsOpen(!isOpen);
    setIsAll(true);
    setSearchText('');
  };
  // all btn handller
  const onAllClick = () => {
    setIsAll(true);
    setSelectedText('All symbols');
    setSearchText('');
  };

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
  return (
    <Container>
      <DropDownWrap ref={wrapRef}>
        <SelectedMenu onClick={onOpenClick}>
          <span>{selectedText}</span>
          <IoMdArrowDropdown />
        </SelectedMenu>
        {isOpen ? (
          <MenuWrap>
            <InputWrap>
              <IoMdSearch className="search_icon" />
              <Input
                name="keyword"
                value={searchText}
                placeholder="Search-Symbol"
                ref={inputRef} // focus를 위한 Ref
                onChange={e => {
                  setIsAll(false); // 입력이 시작하면 all 셋팅을 false 글씨를 text에 셋팅
                  setSearchText(e.target.value);
                }}
              />
            </InputWrap>
            <Menu onClick={onAllClick}>All Symbols</Menu>
            {makeMenu(dropDownArr)}
          </MenuWrap>
        ) : null}
      </DropDownWrap>
    </Container>
  );
};

export default DropDown;
