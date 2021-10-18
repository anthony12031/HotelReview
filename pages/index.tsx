import client from '../apollo-client';
import {gql} from '@apollo/client';
import Button from '../components/Button';

import Gallery from '../components/Gallery';
import HotelOverview from '../components/HotelOverview';
import HotelDetail from '../components/HotelDetail';
import Booking from '../components/Booking';

interface Hotel {
  id: string,
  name: string
  stars: number
  location: string
  ratingAverage: number
  totalVotes: number
  description: string
  features: string
  userReviews: string
}

function HomePage(hotel: Hotel) {

  const features = JSON.parse(hotel.features);
  const reviews = JSON.parse(hotel.userReviews);

  return (
    <>
      <Gallery />
      <HotelOverview stars={hotel.stars} location={hotel.location} ratingAverage={hotel.ratingAverage} totalVotes={hotel.totalVotes}/>
      <HotelDetail 
        description={hotel.description}
        features={features}
        userReviews={reviews}
      />
      <Booking />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query listHotels {
      listHotels {
        items {
          id
          name
          stars
          location
          ratingAverage
          totalVotes
          description
          features
          userReviews
        }
      }
    }
    `,
  });

  const hotel = data.listHotels.items[0];

  return {
    props: {
      ...hotel,
    },
 };
}

export default HomePage