"use client"

import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import type { Task } from "@/lib/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Edit, Trash2, Clock, CheckCircle2, Circle } from "lucide-react"
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TaskCardProps {
 task: Task
 onEdit: () => void
 onDelete: () => void
 onStatusChange: (status: string) => void
}

export function TaskCard({ task, onEdit, onDelete, onStatusChange }: TaskCardProps) {
 const [isExpanded, setIsExpanded] = useState(false)

 const getPriorityColor = (priority: string) => {
  switch (priority) {
   case "high":
    return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
   case "medium":
    return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
   case "low":
    return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
   default:
    return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  }
 }

 const getStatusIcon = (status: string) => {
  switch (status) {
   case "completed":
    return <CheckCircle2 className="h-4 w-4 text-green-500" />
   case "in-progress":
    return <Clock className="h-4 w-4 text-blue-500" />
   case "todo":
    return <Circle className="h-4 w-4 text-gray-500" />
   default:
    return <Circle className="h-4 w-4 text-gray-500" />
  }
 }

 const getNextStatus = (currentStatus: string) => {
  switch (currentStatus) {
   case "todo":
    return "in-progress"
   case "in-progress":
    return "completed"
   case "completed":
    return "todo"
   default:
    return "todo"
  }
 }

 return (
  <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
   <CardContent className="p-4">
    <div className="flex justify-between items-start">
     <div className="flex items-center space-x-2">
      <button
       onClick={() => onStatusChange(getNextStatus(task.status))}
       className="focus:outline-none"
       aria-label={`Mark as ${getNextStatus(task.status)}`}
      >
       {getStatusIcon(task.status)}
      </button>
      <h3 className="font-medium text-gray-900 dark:text-white">{task.title}</h3>
     </div>
     <div className="flex items-center space-x-2">
      <Badge className={getPriorityColor(task.priority)}>
       {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
      </Badge>
      <DropdownMenu>
       <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
         <MoreHorizontal className="h-4 w-4" />
         <span className="sr-only">Open menu</span>
        </Button>
       </DropdownMenuTrigger>
       <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onEdit}>
         <Edit className="h-4 w-4 mr-2" />
         Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onStatusChange("todo")}>
         <Circle className="h-4 w-4 mr-2" />
         Mark as To Do
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onStatusChange("in-progress")}>
         <Clock className="h-4 w-4 mr-2" />
         Mark as In Progress
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onStatusChange("completed")}>
         <CheckCircle2 className="h-4 w-4 mr-2" />
         Mark as Completed
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onDelete} className="text-red-600 dark:text-red-400">
         <Trash2 className="h-4 w-4 mr-2" />
         Delete
        </DropdownMenuItem>
       </DropdownMenuContent>
      </DropdownMenu>
     </div>
    </div>

    <div className="mt-2">
     <p className={`text-gray-600 dark:text-gray-400 text-sm ${isExpanded ? "" : "line-clamp-2"}`}>
      {task.description}
     </p>
     {task.description.length > 120 && (
      <button
       onClick={() => setIsExpanded(!isExpanded)}
       className="text-xs text-gray-500 dark:text-gray-400 mt-1 hover:underline focus:outline-none"
      >
       {isExpanded ? "Show less" : "Show more"}
      </button>
     )}
    </div>
   </CardContent>

   <CardFooter className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center">
    <div className="flex items-center">
     <Avatar className="h-6 w-6">
      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt="User" />
      <AvatarFallback>{task.assignee.charAt(0)}</AvatarFallback>
     </Avatar>
     <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">{task.assignee}</span>
    </div>
    <span className="text-xs text-gray-500 dark:text-gray-400">
     {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
    </span>
   </CardFooter>
  </Card>
 )
}
