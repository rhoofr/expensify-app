import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with an expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={1234} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={2} expensesTotal={12344} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render nothing with no expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={0} expensesTotal={0} />
  );
  expect(wrapper).toMatchSnapshot();
});
