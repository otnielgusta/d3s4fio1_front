import { UserContextProvider } from "../contexts/userContext";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
      <UserContextProvider>

        <Component {...pageProps}/>
      </UserContextProvider>
  )
}

export default MyApp
