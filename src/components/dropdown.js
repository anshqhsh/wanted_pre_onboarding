import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropdown, IoMdSearch } from 'react-icons/io';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  color: rgb(147, 147, 147);
`;
const DropDownWrap = styled.div`
  display: flex;
  width: 250px;
  height: 400px;
  margin: 10px;
  background-color: rgb(252, 252, 252);
  flex-direction: column;
  text-align: center;
  align-items: center;
  .icon {
    margin-left: 10px;
  }
`;
const DropDownMenuWrap = styled.div`
  width: 220px;
  border: 1px solid rgb(218, 218, 218);
  margin-top: 4px;
`;
const DropDownView = styled.div`
  display: flex;
  width: 200px;
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid rgb(147, 147, 147);
  margin: 0 auto;
  border-radius: 4px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const Menu = styled.div`
  width: 90%;
  height: 22px;
  margin: 5px;
  cursor: pointer;
`;
const InputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgb(218, 218, 218); ;
`;
const Input = styled.input`
  width: 90%;
  height: 22px;
  margin: 5px;
  padding: 0px;
  border: 0 solid black;
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

  // isOpen값이 변경될때 Input의 ref값을 이용하여 테그에 focus를 준다.
  useEffect(() => {
    console.log(inputRef.current !== null);
    if (inputRef.current !== null) inputRef.current.focus();
  }, [isOpen]);

  const onClick = (str, e) => {
    e.preventDefault();
    setIsOpen(false);
    setSelectedText(str);
    setIsAll(true);
  };
  const onOpenClick = () => {
    setIsOpen(!isOpen);
    setIsAll(true);
    setSearchText('');
  };
  const onAllClick = () => {
    setIsAll(true);
    setSelectedText('All symbols');
    setSearchText('');
  };

  // map을 이용해서 dropdown메뉴와 searchText를 indexOf로 비교하여 해당되면 테그로 메뉴를 출력
  const mapSymbol = arr => {
    let data = arr;
    if (!isAll) {
      data = data.filter(str => {
        return str.toLowerCase().indexOf(searchText.toLowerCase()) > -1; // search하는 값도 toLowercase를 통해 동일한 조건으로 검색
      });
    }
    return data.map((str, i) => {
      return (
        <Menu key={i} onClick={e => onClick(str, e)}>
          {str}
        </Menu>
      );
    });
  };
  return (
    <Container>
      <DropDownWrap>
        <DropDownView onClick={onOpenClick}>
          <span>{selectedText}</span>
          <IoMdArrowDropdown />
        </DropDownView>
        {isOpen ? (
          <DropDownMenuWrap>
            <InputWrap>
              <IoMdSearch />
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
            {/* 메뉴아이템 생성 */}
            <Menu onClick={onAllClick}>All Symbols</Menu>
            {mapSymbol(dropDownArr)}
          </DropDownMenuWrap>
        ) : null}
      </DropDownWrap>
    </Container>
  );
};
export default DropDown;
