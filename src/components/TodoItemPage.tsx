import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

type TodoItemPageParams = {
    id: string;
}

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo>();

    useEffect(() => {
        fetchTodo();
    }, []);

    const params = useParams<TodoItemPageParams>();

    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id);
            setTodo(response.data)
        } catch (e) {
            alert(e)
        }
    }
    const navigate = useNavigate();
    const toMain = () => {
        navigate('/')
    };

    return (
        <div>
            <button onClick={toMain}>Назад</button>
            <h1>Задача {todo?.title}</h1>
            {todo?.completed
            ? <h2>Завершена</h2>
            : <h2>Не завершена</h2>}
        </div>
    );
};

export default TodoItemPage;