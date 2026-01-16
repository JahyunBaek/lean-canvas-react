import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Outlet />
    </>
  );
};

export default App;
