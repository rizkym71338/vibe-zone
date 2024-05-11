'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'

import { ProfileMenu } from '@/components'

export const TopBar = () => {
  const [search, setSearch] = useState('')

  return (
    <div className="sticky top-0 z-10 flex items-center gap-4 border-b border-dark-2 bg-purple-2 p-4">
      <div className="relative flex w-full">
        <input
          type="text"
          className="w-full rounded-lg bg-dark-2 px-3 py-2 text-small-semibold focus:outline-none"
          placeholder="Search post, people, ..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Link href={`/search/posts/${search}`}>
          <MagnifyingGlassIcon className="absolute right-3 top-2 h-5 w-5 cursor-pointer hover:text-pink-1" />
        </Link>
      </div>

      <Link
        href="/create-post"
        className="flex items-center gap-2 rounded-lg bg-gradient-to-l from-pink-1 to-purple-1 px-3 py-2 text-small-semibold max-md:hidden"
      >
        <PlusIcon className="h-5 w-5" />
        <p className="text-nowrap text-small-semibold">Create Post</p>
      </Link>

      <ProfileMenu className="-translate-x-0.5 scale-125" />
    </div>
  )
}
