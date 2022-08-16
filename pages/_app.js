import '../styles/globals.css'
import { useState } from 'react';
import AppContext from '../components/AppContext';

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState()

  return (<AppContext.Provider value={{ session, setSession }}><Component {...pageProps} /></AppContext.Provider>)
}
export default MyApp