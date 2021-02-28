import React from 'react';
import TodoApp from './components/TodoApp';
import styled from '@emotion/styled';
// 控制全域樣式
import { Global, css } from '@emotion/react';
//---------------------styles------------------------//
const TodoAppWrap = styled.div`
  display: flex;
  justify-content: center;
`;

//--------------------component-----------------------//
const App = () => {
  //---------------------JSX------------------------//
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #ededed;
          }
          ${
            '' /* * ::selection {
            background-color: #ededed;
            color: #fff;
          } */
          }
        `}
      />
      <TodoAppWrap>
        <TodoApp />
      </TodoAppWrap>
    </>
  );
};

export default App;
