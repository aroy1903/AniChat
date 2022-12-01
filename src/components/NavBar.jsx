import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebaseConfig';

export default function NavBar() {
  const { user, dispatch } = useAuth();
  const [signOut, loading, error] = useSignOut(auth);

  const handleLogOut = async () => {
    const signedOut = await signOut();
    if (signedOut) {
      dispatch({ type: 'LOGOUT' });
    }
  };

  return (
    <div className=" bg-[#00011f] text-white">
      <nav className=" h-20">
        <ul className=" flex w-full justify-around h-full items-center">
          <h1 className="text-3xl">
            <Link to="/">AniChat</Link>
          </h1>
          <div
            className=" flex justify-between items-center h-full text-lg"
            style={user ? { width: '270px' } : { width: '160px' }}
          >
            {!user && (
              <li className=" hover:underline">
                <Link to="/login">login</Link>
              </li>
            )}
            {!user && (
              <li className=" hover:underline">
                <Link to="/signup">signup</Link>
              </li>
            )}
            {user && <li> welcome {user.displayName}!</li>}
            {user && (
              <li className=" hover:underline">
                <Link to="/chat">chat</Link>
              </li>
            )}
            {user && (
              <li
                className=" hover:underline cursor-pointer"
                onClick={handleLogOut}
              >
                logout
              </li>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
}
