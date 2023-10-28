import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth.selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <div>{isLoggedIn ? <p>Welcome back, {name}</p> : <p>Please, login</p>}</div>
  );
};

export default HomePage;
