import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters';

export class ExpenseListFilters extends Component {
  state = {
    calanderFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    e.target.value === 'date'
      ? this.props.sortByDate()
      : this.props.sortByAmount();
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          startDateId='your_unique_start_date_id' // PropTypes.string.isRequired,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          endDateId='your_unique_end_date_id' // PropTypes.string.isRequired,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calanderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
