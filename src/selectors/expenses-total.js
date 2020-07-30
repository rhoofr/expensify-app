// Get total expenses
export default (expenses) => {
  return expenses
    .map((expense) => expense.amount) // first get array of values from the objects
    .reduce((sum, value) => sum + value, 0); // sum up the amounts
};
