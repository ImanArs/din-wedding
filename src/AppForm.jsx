// AppForm.js
import React, { useState } from 'react';
import { auth, database } from './firebase'; // Импортируйте ссылки на аутентификацию и базу данных из вашего firebase

function AppForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Регистрация пользователя с использованием Firebase Authentication
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Создание записи пользователя в базе данных
            const newDataRef = database.ref('users'); // Замените на ваш путь в базе данных
            newDataRef.push({
                name,
                email,
                userId: user.uid, // Добавьте уникальный идентификатор пользователя
            });

            // Очистка полей формы
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Ошибка регистрации:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Электронная почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}

export default AppForm;
