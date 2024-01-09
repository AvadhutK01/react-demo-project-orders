import React from 'react';

const ListComponent = (props) => {
    const { Orders } = props;

    const renderTableOrders = (table) => {
        const tableOrders = Orders[table];

        return (
            <ul>
                {Object.entries(tableOrders).map(([orderId, order]) => (
                    <li key={orderId}>
                        {`Order ID: ${orderId}, Amount: ${order.Amount}, Dish: ${order.Dish}`}
                        <button onClick={() => props.deleteOrder(orderId, table)}>Delete Order</button>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <div>
                Table one:
                {renderTableOrders('Table1')}
            </div>
            <div>
                Table Two:
                {renderTableOrders('Table2')}
            </div>
            <div>
                Table three:
                {renderTableOrders('Table3')}
            </div>
        </>
    );
};

export default ListComponent;
