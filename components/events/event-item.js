import Link from 'next/link';

const Eventitem = (props) => {
  const { title, image, date, location, id } = props;
  const readableDate = new date(date).toLocalDate('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formatedAddress = location.replace(', ', '\n');
  return (
    <li>
      <img />
      <div>
        <div>
          <h2>Title</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div>
          <Link href='/'>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default Eventitem;
