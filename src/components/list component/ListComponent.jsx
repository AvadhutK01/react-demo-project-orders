import React from 'react';
import './ListComponent.css';

const ListComponent = (props) => {
    const { Orders } = props;

    const renderTableOrders = (table) => {
        const tableOrders = Orders[table];

        return (
            <ul>
                {Object.entries(tableOrders).map(([orderId, order]) => (
                    <li key={orderId}>
                        {`Order ID: ${orderId}, Amount: ${order.Amount}, Dish: ${order.Dish}`}
                        <button className='button-danger' onClick={() => props.deleteOrder(orderId, table)}>Delete Order</button>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <div className='div-list'>
                <p>Table one:</p>
                {renderTableOrders('Table1')}
            </div>
            <div className='div-list'>
                <p>Table Two:</p>
                {renderTableOrders('Table2')}
            </div>
            <div className='div-list'>
                <p>Table three:</p>
                {renderTableOrders('Table3')}
            </div>
        </>
    );
};

export default ListComponent;
