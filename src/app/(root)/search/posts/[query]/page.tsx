import { PostCard, SearchTab } from '@/components'
import { prisma } from '@/libs'

interface SearchPageProps {
  params: { query: string }
}

export default async function SearchPage({ params }: SearchPageProps) {
  const posts = await prisma.post.findMany({
    where: {
      OR: [
        { caption: { contains: params.query, mode: 'insensitive' } },
        { tag: { contains: params.query, mode: 'insensitive' } },
      ],
    },
    include: { author: true, likes: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <section className="flex flex-col gap-4">
      <SearchTab />

      {posts.length === 0 && <div className="text-center">No posts found</div>}

      {posts.map((post) => (
        <PostCard key={post.id} post={post as any} />
      ))}
    </section>
  )
}