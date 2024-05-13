'use client'

import { Fragment } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Notification, User } from '@prisma/client'
import { UserIcon } from '@heroicons/react/24/outline'

import { readAllNotification } from '@/actions'
import { sidebarLinks } from '@/constants'
import { cn } from '@/libs'

interface MenuProps {
  user: User
  notifications: Notification[]
}

export const Menu = ({ user, notifications }: MenuProps) => {
  const pathname = usePathname()

  const menus = [
    ...sidebarLinks,
    { icon: UserIcon, label: 'Profile', route: `/profile/${user.id}` },
  ]

  return (
    <Fragment>
      {menus.map(({ icon: Icon, label, route }) => {
        const isActive =
          label === 'Profile' ? pathname.includes(route) : pathname === route
        return (
          <Link
            key={route}
            href={route}
            onClick={async () => {
              if (label === 'Notification') {
                await readAllNotification()
              }
            }}
            className={cn(
              'relative mb-2 flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-purple-1',
              isActive && 'bg-purple-1',
            )}
          >
            {notifications.length > 0 && label === 'Notification' && (
              <div className="absolute left-5 top-1.5 flex h-4 w-4 animate-bounce items-center justify-center rounded-full bg-red-500 text-small-semibold" />
            )}
            <Icon className="h-5 w-5" />
            <p>{label}</p>
          </Link>
        )
      })}
    </Fragment>
  )
}
