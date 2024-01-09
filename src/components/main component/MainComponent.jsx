import React, { useState } from 'react'
import InputComponent from '../input component/InputComponent'
import ListComponent from '../list component/ListComponent'

const MainComponent = () => {
    let [Orders, setOrders] = useState([{
        Table1: {

        },
        Table2: {

        },
        Table3: {

        }
    }])

    const addOrder = (Id, Amount, Dish, Table) => {
        if (Table === 'Table 1') {
            setOrders((prevOrders) => {
                return ({
                    Table1: {
                        ...prevOrders.Table1,
                        [Id]: { Amount: Amount, Dish: Dish }
                    },
                    Table2: { ...prevOrders.Table2 },
                    Table3: { ...prevOrders.Table3 }
                })
            })
        }
        else if (Table === 'Table 2') {
            setOrders((prevOrders) => {
                return ({
                    Table1: { ...prevOrders.Table1 },
                    Table2: {
                        ...prevOrders.Table2,
                        [Id]: { Amount: Amount, Dish: Dish }
                    },
                    Table3: { ...prevOrders.Table3 }
                })
            })
        }
        else {
            setOrders((prevOrders) => {
                return ({
                    Table1: { ...prevOrders.Table1 },
                    Table2: { ...prevOrders.Table2 },
                    Table3: {
                        ...prevOrders.Table2,
                        [Id]: { Amount: Amount, Dish: Dish }
                    }
                })
            })
        }
    }

    return (
        <div>
            <InputComponent addOrder={addOrder} />
            <ListComponent Orders={Orders} />
        </div>
    )
}

export default MainComponent