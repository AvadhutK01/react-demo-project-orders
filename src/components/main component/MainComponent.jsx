import React, { useState, useEffect } from 'react';
import InputComponent from '../input component/InputComponent';
import ListComponent from '../list component/ListComponent';
import './MainComponent.css'

const MainComponent = () => {
    const [Orders, setOrders] = useState(() => {
        const storedOrders = localStorage.getItem('orders');
        return storedOrders ? JSON.parse(storedOrders) : {
            Table1: {},
            Table2: {},
            Table3: {},
        };
    });

    const addOrder = (Id, Amount, Dish, Table) => {
        setOrders((prevOrders) => {
            const newOrders = {
                ...prevOrders,
                [Table]: {
                    ...prevOrders[Table],
                    [Id]: { Amount, Dish },
                },
            };
            localStorage.setItem('orders', JSON.stringify(newOrders));
            return newOrders;
        });
    };

    const deleteOrder = (Id, Table) => {
        setOrders((prevOrders) => {
            const newObj = { ...prevOrders[Table] };
            delete newObj[Id];
            const newOrders = {
                ...prevOrders,
                [Table]: newObj,
            };
            localStorage.setItem('orders', JSON.stringify(newOrders));
            return newOrders;
        });
    };

    useEffect(() => {
        const storedOrders = localStorage.getItem('orders');
        if (storedOrders) {
            setOrders(JSON.parse(storedOrders));
        }
    }, []);

    return (
        <div className='div-main'>
            <InputComponent addOrder={addOrder} />
            <ListComponent Orders={Orders} deleteOrder={deleteOrder} />
        </div>
    );
};

export default MainComponent;
