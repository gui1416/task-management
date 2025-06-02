"use client"

import type { User } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CollaborationIndicatorProps {
 users: User[]
}

export function CollaborationIndicator({ users }: CollaborationIndicatorProps) {
 const maxDisplayed = 3
 const displayUsers = users.slice(0, maxDisplayed)
 const remainingCount = users.length - maxDisplayed

 return (
  <TooltipProvider>
   <div className="flex items-center">
    <div className="flex -space-x-2">
     {displayUsers.map((user) => (
      <Tooltip key={user.id}>
       <TooltipTrigger asChild>
        <Avatar className="h-8 w-8 border-2 border-white dark:border-gray-800">
         <AvatarImage src={user.avatar || `/placeholder.svg?height=32&width=32`} alt={user.name} />
         <AvatarFallback className="bg-primary text-primary-foreground">{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
       </TooltipTrigger>
       <TooltipContent side="bottom">
        <p>{user.name}</p>
       </TooltipContent>
      </Tooltip>
     ))}

     {remainingCount > 0 && (
      <Tooltip>
       <TooltipTrigger asChild>
        <Avatar className="h-8 w-8 border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700">
         <AvatarFallback>+{remainingCount}</AvatarFallback>
        </Avatar>
       </TooltipTrigger>
       <TooltipContent side="bottom">
        <p>
         {users
          .slice(maxDisplayed)
          .map((u) => u.name)
          .join(", ")}
        </p>
       </TooltipContent>
      </Tooltip>
     )}
    </div>
    <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
     {users.length} {users.length === 1 ? "user" : "users"} online
    </span>
   </div>
  </TooltipProvider>
 )
}
