import EventItem from './event-item';
const EventsList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
};

export default EventsList;
