import { useRef } from 'react';
import Button from '../ui/button';
import classes from './event-search.module.css';

const EventSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault(); // avoid sending http req n reload page
    //accessing the value of our input ref
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'> Year</label>
          <select id='year' ref={yearInputRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInputRef}>
            <option value='1'>Jan</option>
            <option value='2'>Feb</option>
            <option value='3'>Apr</option>
            <option value='4'>Mar</option>
            <option value='5'>May</option>
            <option value='6'>Jun</option>
            <option value='7'>Jul</option>
            <option value='8'>Aug</option>
            <option value='9'>Sep</option>
            <option value='10'>Nov</option>
            <option value='11'>Oct</option>
            <option value='12'>Dec</option>
          </select>
        </div>
      </div>
      <Button> Find Events</Button>
    </form>
  );
};

export default EventSearch;
