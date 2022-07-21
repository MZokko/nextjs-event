import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/events-list';
import EventSearch from '../../components/events/event-search';

const AllEvents = () => {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    //construction the full path (destination) with template literal
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEvents;
