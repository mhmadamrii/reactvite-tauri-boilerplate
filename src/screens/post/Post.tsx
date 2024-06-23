import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getPosts } from '~/actions/product.action';
import { Button } from '~/components/ui/button';

export default function Post() {
  const [limit, setLimit] = useState<number>(10);
  const posts = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts({ limit }),
    enabled: false,
  });

  if (posts.isLoading) return <span>Loading data...</span>;

  return (
    <main className='container mx-auto border border-red-500'>
      <input
        name="limit"
        onChange={(e) => setLimit(parseInt(e.target.value))}
      />
      <Button onClick={() => posts.refetch()}>
        get the posts
      </Button>
    </main>
  );
}
