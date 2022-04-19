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
`;
const DropDownMenuWrap = styled.div`
  width: 220px;
  border: 1px solid rgb(218, 218, 218);
  margin-top: 4px;
`;
const DropDownMenu = styled.div`
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

  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedText, setSelectedText] = useState('All Symbols');
  const [isAll, setIsAll] = useState(true); // all symbols의 t/f여부
  const inputRef = useRef(null);

  // isOpen값이 변경될때 Input의 ref값을 이용하여 테그에 focus를 준다.
  useEffect(() => {
    console.log(inputRef.current !== null);
    if (inputRef.current !== null) inputRef.current.focus();
  }, [isOpen]);

  // map을 이용해서 dropdown메뉴와 searchText를 indexOf로 비교하여 해당되면 테그로 메뉴를 출력
  const mapSymbol = arr => {
    let data = arr;
    if (isAll) {
      data = arr.map((str, i) => {
        return (
          <Menu
            key={i}
            onClick={e => {
              setIsOpen(false);
              setSelectedText(str);
            }}
          >
            {str}
          </Menu>
        );
      });
      return data;
    } else {
      let filteredData = data.filter(str => {
        return str.toLowerCase().indexOf(searchText.toLowerCase()) > -1; // search하는 값도 toLowercase를 통해 동일한 조건으로 검색
      });
      data = filteredData.map((str, i) => {
        return (
          <Menu
            key={i}
            value={str}
            goToMenu={str}
            onClick={e => {
              setIsOpen(false);
              setSelectedText(str);
              setIsAll(true);
            }}
          >
            {str}
          </Menu>
        );
      });
      return data;
    }
  };
  return (
    <Container>
      <DropDownWrap>
        <DropDownMenu
          onClick={() => {
            setIsOpen(!isOpen);
            setIsAll(true);
          }}
        >
          <span>{selectedText}</span>
          <IoMdArrowDropdown />
        </DropDownMenu>
        {isOpen ? (
          <DropDownMenuWrap>
            <InputWrap>
              <IoMdSearch />
              <Input
                name="keyword"
                placeholder="Search-Symbol"
                value={searchText}
                ref={inputRef}
                onChange={e => {
                  setIsAll(false); // 입력이 시작하면 all 셋팅을 false 글씨를 text에 셋팅
                  setSearchText(e.target.value);
                }}
              />
            </InputWrap>
            <Menu
              onClick={e => {
                setIsAll(true);
                setSelectedText('All symbols');
                setSearchText('');
              }}
            >
              All Symbols
            </Menu>
            {mapSymbol(dropDownArr)}
          </DropDownMenuWrap>
        ) : null}
      </DropDownWrap>
    </Container>
  );
};
export default DropDown;
