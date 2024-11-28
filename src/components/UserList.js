import React from 'react';
import styles from './UserList.module.css';
import { useChat } from '../context/ChatContext';

const UserList = () => {
    const { users, currentUser } = useChat();

    return (
        <div className={styles.userList}>
            <h2>Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index} className={user === currentUser ? styles.currentUser : ''}>
                        {user}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
