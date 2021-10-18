import client from '../apollo-client';
import {gql} from '@apollo/client';
import Button from '../components/Button';

import Gallery from '../components/Gallery';
import HotelOverview from '../components/HotelOverview';
import HotelDetail from '../components/HotelDetail';

function HomePage({hotels = []}: any) {

  return (
    <>
      <Gallery />
      <HotelOverview />
      <HotelDetail />
    </>
  )
}

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//     query listHotelAPIS {
//       listHotelAPIS {
//         items {
//           id
//           name
//           Description
//           ImageURL
//           Country
//         }
//       }
//     }
//     `,
//   });

//   return {
//     props: {
//       hotels: data.listHotelAPIS.items,
//     },
//  };
// }

export default HomePage