import { auth } from '../firebase';

function Home() {
  const logOut = () => {
    auth.signOut();
  };

  return (
    <button onClick={logOut} type='button'>
      Log Out
    </button>
  );
}

export default Home;
