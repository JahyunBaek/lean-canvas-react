import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const CavnasDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  return (
    <div>
      <h1>CanvasDetail</h1>
      <p>id:{id}</p>
      <p>params:{searchParams.get('keyword')}</p>
      <p>location:{location.hash}</p>
    </div>
  );
};

export default CavnasDetail;
