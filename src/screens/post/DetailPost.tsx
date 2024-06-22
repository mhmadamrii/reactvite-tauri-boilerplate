import { useParams } from 'react-router-dom';
export default function DetailPost() {
  const params = useParams<{ 'post-id': string }>();
  return (
    <main>
      <h1>{params['post-id']}</h1>
    </main>
  );
}
