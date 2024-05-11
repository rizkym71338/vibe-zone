import { CreatePostButton, ProfileMenu, SearchInput } from '@/components'

export const TopBar = () => {
  return (
    <div className="sticky top-0 z-10 flex items-center gap-4 border-b border-dark-2 bg-purple-2 p-4">
      <SearchInput />
      <CreatePostButton className="max-md:hidden" />
      <ProfileMenu className="-translate-x-0.5 scale-125" />
    </div>
  )
}
