import React from 'react';
import styled from 'styled-components';
import UserCard from '@src/components/UserCard';

const ListWrapper = styled.section`
`;

const List = styled.ul`
  overflow: auto;
  max-height: ${(props: { isOpen: boolean }) => props.isOpen ? '400px' : '0'};
  transition: all .3s ease-in-out;
`;

const SelectorButton = styled.a`
  display: flex;
  min-height: 50px;
  border: 1px solid #a0a0a0;
`;

type Props = {};

export default (props: Props) => {
  console.log(props);
  const [open, setOpen] = React.useState(false);
  const handleClickedList = () => {
    setOpen(!open);
  };

  return (
    <ListWrapper>
      <SelectorButton onClick={handleClickedList}>test</SelectorButton>
      <List isOpen={open}>
        <li>
          <UserCard/>
        </li>
        <li>
          <UserCard/>
        </li>
        <li>
          <UserCard/>
        </li>
        <li>
          <UserCard/>
        </li>
      </List>
    </ListWrapper>
  );
}