import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

type UserItemPageParams = {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        fetchUser();
    }, []);

    const params = useParams<UserItemPageParams>();

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data)
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
            <h1>Страница пользователя {user?.name}</h1>
            <div>
               Контактная информация: {user?.email}
            </div>
            <div>
                Адрес: {user?.address.city}, {user?.address.street}
            </div>
        </div>
    );
};

export default UserItemPage;