import { useState } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropdown } from 'react-icons/io';

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
const DropDownMenu = styled.div`
  display: flex;
  width: 200px;
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  border: 2px solid rgb(147, 147, 147);
  margin: 0 auto;
  border-radius: 4px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.div``;
const Menu = styled.div`
  width: 224px;
  height: 22px;
  margin: 5px;
  border: 2px solid red;
`;
const Input = styled.input`
  width: 224px;
  height: 22px;
  margin: 5px;
  border: 2px solid red;
  padding: 0px;
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

  // map을 이용해서 dropdown메뉴와 searchText를 indexOf로 비교하여 해당되면 테그로 메뉴를 출력
  const mapSymbol = arr => {
    let data = arr;
    if (isAll) {
      return data.map((str, i) => {
        return (
          <Menu
            key={i}
            onClick={() => {
              console.log({ str });
              setSelectedText(str);
              setSearchText('');
              setIsAll(false);
              setIsOpen(false);
            }}
          >
            {str}
          </Menu>
        );
      });
    } else {
      data = data.filter(str => {
        return str.toLowerCase().indexOf(searchText.toLowerCase()) > -1; // search하는 값도 toLowercase를 통해 동일한 조건으로 검색
      });
      return data.map((str, i) => {
        return <Menu key={i}>{str}</Menu>;
      });
    }
  };
  console.log('rendering');
  console.log(isOpen);
  console.log(searchText);
  console.log(selectedText);
  console.log(isAll);
  return (
    <Container>
      <DropDownWrap>
        <DropDownMenu>
          <Text>{selectedText}</Text>
          <IoMdArrowDropdown
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </DropDownMenu>
        {isOpen ? (
          <div>
            <Input
              name="keyword"
              placeholder="Search-Symbol"
              value={searchText}
              onChange={e => {
                setIsAll(false); // 입력이 시작하면 all 셋팅을 false 글씨를 text에 셋팅
                setSearchText(e.target.value);
              }}
            />
            <div>
              <Menu
                onClick={() => {
                  setSelectedText('All Symbols');
                  setSearchText('');
                  setIsAll(true);
                  setIsOpen(false);
                }}
              >
                All Symbols
              </Menu>
              {mapSymbol(dropDownArr)}
            </div>
          </div>
        ) : null}
      </DropDownWrap>
    </Container>
  );
};
export default DropDown;
