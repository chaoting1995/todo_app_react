import React, { useState } from 'react';
import styled from '@emotion/styled';

import TodoAddForm from './todo/TodoAddForm';
import TodoList from './todo/TodoList';

//--------------------style-----------------------//
const TodoAppWrap = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  position: relative;
  min-width: 400px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  background-color: #f9f9f9;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//--------------------component-----------------------//
const TodoApp = (props) => {
  const [todoInput, setTodoInput] = useState('');
  // 0=all, 1= (view completed = true), 2=(view completed =false)
  const [viewFilter, setViewFilter] = useState(0);

  // 將每個待辨事項改為物件值
  // { id, text: string, completed: bool, edited: bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone 12', completed: false, edited: false },
    { id: 2, text: '學好react', completed: true, edited: false },
    { id: 3, text: '買ps5', completed: false, edited: false },
    { id: 4, text: '買牛奶', completed: true, edited: false },
  ]);

  // 利用id值尋找對應的item的索引值，然後改變edited值
  const handleEditedToggle = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos];

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id);

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // 布林值 true變false，false變true
      newTodos[todoItemIndex].edited = !newTodos[todoItemIndex].edited;

      // 設定回原本的todos
      setTodos(newTodos);
    }
  };

  // 利用id值尋找對應的item的索引值，然後改變text值
  const handleEditedSave = (id, newText) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos];

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id);

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // text 更改為新的 newText
      newTodos[todoItemIndex].text = newText;

      // 設定回原本的todos
      setTodos(newTodos);

      // 切換回原本的狀態
      handleEditedToggle(id);
    }
  };

  // 利用id值尋找對應的item的索引值，然後改變completed值
  const handleCompleted = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos];

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id);

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // 布林值 true變false，false變true
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed;

      // 設定回原本的todos
      setTodos(newTodos);
    }
  };

  // 利用id值尋找對應的item的索引值，然後移出陣列
  const handleDelete = (id) => {
    //建立一個新的陣列，其中"不包含要被移除的項目(用filter)
    const newTodos = todos.filter((item, index) => item.id !== id);

    // 設定回原本的todos
    setTodos(newTodos);
  };

  return (
    <>
      <TodoAppWrap>
        <h1 className="mt-5">Todo List</h1>
        <TodoAddForm
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          todos={todos}
          setTodos={setTodos}
        />
        <hr />
        <button onClick={() => setViewFilter(0)}>所有</button>{' '}
        <button onClick={() => setViewFilter(1)}>已完成</button>{' '}
        <button onClick={() => setViewFilter(2)}>未完成</button>
        <hr />
        <TodoList
          todos={todos}
          handleEditedToggle={handleEditedToggle}
          handleCompleted={handleCompleted}
          handleDelete={handleDelete}
          handleEditedSave={handleEditedSave}
          viewFilter={viewFilter}
        />
      </TodoAppWrap>
    </>
  );
};

export default TodoApp;
