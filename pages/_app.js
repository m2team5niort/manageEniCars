import 'tailwindcss/tailwind.css';
import { useUser } from '../firebase/useUser'

function MyApp({ Component, pageProps }) {

  const { user, logout } = useUser()

  return <Component user={user} {...pageProps} />
}

export default MyApp
