import { Fragment } from 'react';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/events-list';
import EventSearch from '../../components/events/event-search';

const AllEvents = () => {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventSearch />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEvents;
