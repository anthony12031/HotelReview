import client from '../apollo-client';
import {gql} from '@apollo/client';
import Button from '../components/Button';
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

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

  return (
    <div>
      {JSON.stringify(hotels)}
      <Button onClick={switchTheme}>Hello button</Button>
    </div>
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