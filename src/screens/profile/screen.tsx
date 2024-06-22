import { Button } from '@/components/ui/button';
import { useParams, useNavigate } from 'react-router-dom';

export default function Profile() {
  const params = useParams<{ profileId: string }>();
  const navigate = useNavigate()
  console.log('params', params);

  return (
    <div>
      <h1>
        Hello world from profile page{' '}
        <span className="font-bold">
          {params.profileId}
        </span>
      </h1>

      <Button onClick={() => navigate(-1)}>go back</Button>
    </div>
  );
}
