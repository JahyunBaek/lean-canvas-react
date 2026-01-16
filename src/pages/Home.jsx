import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to={`/cavases/1`}>1번 게시글</Link>
          <Link to={`/cavases/2?keyword=test#Helloworld`}>2번 게시글</Link>
          <Link to={`/cavases/3`}>3번 게시글</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
