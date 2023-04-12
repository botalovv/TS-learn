import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import {IUser, ITodo} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventExamples from "./components/EventExamples";
import {BrowserRouter, Routes, Link, Route} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (
      <BrowserRouter>
          <div>
              <div>
                  <Link to='/users'>Пользователи</Link>
                  <Link to='/todos'>Список дел</Link>
              </div>
              <Routes>
                 <Route path={'/users'} element={<UsersPage/>}/>
                 <Route path={'/todos'} element={<TodosPage/>}/>
                 <Route path={'/users/:id'} element={<UserItemPage/>}/>
                 <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
              </Routes>
          </div>
      </BrowserRouter>
    );
};

export default App;