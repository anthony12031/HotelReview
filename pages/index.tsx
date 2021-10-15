import client from '../apollo-client';
import {gql} from '@apollo/client';

function HomePage({hotels}: any) {
  return (
    <div>
      {JSON.stringify(hotels)}
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    query listHotelAPIS {
      listHotelAPIS {
        items {
          id
          name
          Description
          ImageURL
          Country
        }
      }
    }
    `,
  });

  return {
    props: {
      hotels: data.listHotelAPIS.items,
    },
 };
}

export default HomePage