import React, { useEffect, useState } from 'react';
import { Button, Dropdown, message } from 'antd';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/users/')
            .then((res) => res.json())
            .then((res) => setUsers(res))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    const handleCreateUser = () => {
        if (!name || !surname || !age) {
            message.error('Please fill out all fields.');
            return;
        }

        const newUser = { name, surname, age };

        fetch('http://localhost:5000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(async (response) => {
                const contentType = response.headers.get('Content-Type');
                if (contentType && contentType.includes('application/json')) {
                    const result = await response.json();
                    return result;
                } else {
                    const text = await response.text();
                    throw new Error(`Unexpected response format: ${text}`);
                }
            })
            .then((result) => {
                setUsers((prevUsers) => [...prevUsers, result]);
                setName('');
                setSurname('');
                setAge('');
                message.success('User created successfully!');
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                message.error('Error creating user. Please try again.');
            });
    };

    const dropdownContent = (
        <div className='p-4'>
            <div className='mb-2'>
                <input
                    type="text"
                    placeholder='Add Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <input
                    type="text"
                    placeholder='Add Surname'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
            </div>
            <div className='mb-2'>
                <input
                    type="number"
                    placeholder='Add Age'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <button onClick={handleCreateUser}>Create User</button>
        </div>
    );

    return (
        <div className='pt-10'>
            <div className='flex justify-end px-10'>
                <Dropdown
                    overlay={dropdownContent}
                    trigger={['click']}
                    placement="bottomRight"
                    arrow
                >
                    <Button className='bg-slate-500'>Add New</Button>
                </Dropdown>
            </div>
            <div>
                {users.map((user, i) => (
                    <div className='flex justify-center gap-4 text-white text-[20px]' key={i}>
                        <p>{user.name}</p>
                        <p>{user.surname}</p>
                        <p>{user.age}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersPage;
