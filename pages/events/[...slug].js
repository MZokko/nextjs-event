import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/events-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

const FilteredEventPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;
  // console.log('filtData : ' + filteredData);

  //avoiding error because we dont have access to the data YET
  if (!filteredData) {
    return <p className='center'> loading...</p>;
  }
  //second render data are there , extract them into variables
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  // converting year and month into the right format NUMBER
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  //error handler
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>invalid filter. Try with new values</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Event</Button>
        </div>
      </Fragment>
    );
  }
  //get the event corresponding to the selected month and year
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  //check if filteredEvent is 'falsy' or empty array
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No event find for the chosen filter.</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Event</Button>
        </div>
      </Fragment>
    );
  }

  //preparing date var for result title
  const date = new Date(numYear, numMonth - 1); // month start at value = 0 therefore -1

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventPage;
