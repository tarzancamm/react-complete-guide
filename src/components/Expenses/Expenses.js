import React, { useState } from "react";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

//Attribute names (title, amount, date) can be whatever you want, but have them make sense. In this case I just chose what they are called in the objects above.
const Expenses = (props) => {
  const [changedYear, setChangedYear] = useState("2020");

  const changeYearHandler = (selectedYear) => {
    setChangedYear(selectedYear);
  };

  const filteredExpenses = props.allExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === changedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={changedYear}
          onChangeYear={changeYearHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
