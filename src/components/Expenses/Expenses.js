import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

//Attribute names (title, amount, date) can be whatever you want, but have them make sense. In this case I just chose what they are called in the objects above.
const Expenses = (props) => {
  const [changedYear, setChangedYear] = useState('2020')

  const changeYearHandler = (selectedYear) => {
    setChangedYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={changedYear} onChangeYear={changeYearHandler} />
        <ExpenseItem
          title={props.allExpenses[0].title}
          amount={props.allExpenses[0].amount}
          date={props.allExpenses[0].date}
        />
        <ExpenseItem
          title={props.allExpenses[1].title}
          amount={props.allExpenses[1].amount}
          date={props.allExpenses[1].date}
        />
        <ExpenseItem
          title={props.allExpenses[2].title}
          amount={props.allExpenses[2].amount}
          date={props.allExpenses[2].date}
        />
        <ExpenseItem
          title={props.allExpenses[3].title}
          amount={props.allExpenses[3].amount}
          date={props.allExpenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
