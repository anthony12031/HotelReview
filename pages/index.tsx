import client from '../apollo-client';
import {gql} from '@apollo/client';
import Button from '../components/Button';
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import HotelOverview from '../components/HotelOverview';
import HotelDetail from '../components/HotelDetail';

function HomePage({hotels = []}: any) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(()=> {
    setMounted(true);
  }, [])

  if (!mounted) return null;

  function switchTheme(){
    setTheme(theme==='ligth' ? 'dark' : 'ligth');
  }
  if(!mounted) {
    return null;
  }

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