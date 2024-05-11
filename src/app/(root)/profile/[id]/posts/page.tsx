import { notFound } from 'next/navigation'

import { PostCard, ProfileCard, ProfileTab } from '@/components'
import { prisma } from '@/libs'

interface ProfilePageProps {
  params: { id: string }
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const user = await prisma.user
    .findFirst({
      where: { id: params.id },
      include: { posts: true },
    })
    .catch(() => notFound())

  if (!user) return notFound()

  const posts = await prisma.post.findMany({
    where: { authorId: params.id },
    include: { author: true, likes: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <section className="flex flex-col gap-4">
      <ProfileCard user={user as any} />

      <ProfileTab />

      {posts.length === 0 && <div className="text-center">No posts</div>}

      {posts.map((post) => (
        <PostCard key={post.id} post={post as any} />
      ))}
    </section>
  )
}
