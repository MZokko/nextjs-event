import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/events-list';

const HomePage = (props) => {
  const { product } = props; //destructuring type
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
      <ul>
        {product.map((product) => {
          <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};
//if getstaticprops present nextjs execute getStaticprops 1st
//then load the component
//not visible on client side can expose n fetch data before distribution to props
//Must return an object With PRPPS as key
export async function getStaticProps() {
  return {
    props: {
      products: [{ id: 'p1', title: 'product1' }],
    },
  };
}
export default HomePage;
