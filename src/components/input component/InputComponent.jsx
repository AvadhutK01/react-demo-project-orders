import React, { useState, useEffect } from 'react'
import './InputComponent.css'

const InputComponent = (props) => {

    let [Id, setId] = useState('');
    let [Amount, setAmount] = useState('')
    let [Dish, setDish] = useState('');
    let [Table, setTable] = useState('');

    useEffect(() => {
        if (props.editMode && props.editData) {
            const { Id, Amount, Dish, Table } = props.editData;
            setId(Id);
            setAmount(Amount);
            setDish(Dish);
            setTable(Table);
        }
    }, [props.editMode, props.editData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.editMode) {
            props.updateOrder(Id, Table, Amount, Dish);
        } else {
            props.addOrder(Id, Amount, Dish, Table);
        }
        setId("");
        setAmount("");
        setDish("");
        setTable("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-input'>
                <input type='text' required placeholder='Enter Unique order Id' value={Id} onChange={(e) => setId(e.target.value)} disabled={props.editMode} />
                <input type='number' required placeholder='Enter Amount' value={Amount} onChange={(e) => setAmount(e.target.value)} />
                <select value={Dish} required onChange={(e) => setDish(e.target.value)}>
                    <option value="">Choose dish</option>
                    <option value="Chicken Biryani">Biryani</option>
                    <option value="Mutton Biryani">Mutton Biryani</option>
                    <option value="Chicken Tikka Masala">Chicken Tikka Masala</option>
                </select>
                <select value={Table} required onChange={(e) => setTable(e.target.value)}>
                    <option value="">Choose table</option>
                    <option value="Table1">Table 1</option>
                    <option value="Table2">Table 2</option>
                    <option value="Table3">Table 3</option>
                </select>
                <button type='submit'>{props.editMode ? 'Update' : 'Add'}</button>
            </div>
        </form>
    )
}

export default InputComponent