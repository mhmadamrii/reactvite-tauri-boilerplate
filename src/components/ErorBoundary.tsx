import {
  useRouteError,
  useNavigate,
} from 'react-router-dom';
import { Button } from './ui/button';

export default function ErrorBoundary() {
  const navigate = useNavigate();
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
