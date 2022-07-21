import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';

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
    isNan(numYear) ||
    isNan(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p> invalid filter. Try with new values</p>;
  }
  //get the event corresponding to the selected month and year
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  //check if filteredEvent is 'falsy' or empty array
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p> No event find for the chosen filter.</p>;
  }

  return (
    <div>
      <h1>FilteredEventPage</h1>
    </div>
  );
};

export default FilteredEventPage;
