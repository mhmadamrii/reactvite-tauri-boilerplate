import { Button } from '@/components/ui/button';
import { getPosts } from '@/actions/product.action';

export default function Homepage() {
  return (
    <div>
      <Button onClick={getPosts}>Fetch data</Button>
    </div>
  );
}
