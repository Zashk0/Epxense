import React, {useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle]=useState(props.title)
  const ClickHandle = () =>{
    setTitle("Updated!")
    console.log('asd')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={ClickHandle}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
