import React, {FC} from 'react';
import {ITodo} from '../types/types';
import {useNavigate} from 'react-router-dom'

interface TodoItemProps {
    todo: ITodo;
    onClick: (todo: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({todo, onClick}) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => onClick(todo)}>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;