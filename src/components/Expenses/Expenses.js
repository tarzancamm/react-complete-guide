import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import "./Expenses.css";

//Attribute names (title, amount, date) can be whatever you want, but have them make sense. In this case I just chose what they are called in the objects above.
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.allExpenses[0].title}
        amount={props.allExpenses[0].amount}
        date={props.allExpenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allExpenses[1].title}
        amount={props.allExpenses[1].amount}
        date={props.allExpenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allExpenses[2].title}
        amount={props.allExpenses[2].amount}
        date={props.allExpenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allExpenses[3].title}
        amount={props.allExpenses[3].amount}
        date={props.allExpenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
