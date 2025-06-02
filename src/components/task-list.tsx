"use client"

import { useState } from "react"
import { TaskCard } from "@/components/task-card"
import type { Task } from "@/lib/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface TaskListProps {
 tasks: Task[]
 onEdit: (task: Task) => void
 onDelete: (taskId: string) => void
 onStatusChange: (taskId: string, status: string) => void
}

export function TaskList({ tasks, onEdit, onDelete, onStatusChange }: TaskListProps) {
 const [searchQuery, setSearchQuery] = useState("")

 const filteredTasks = tasks.filter(
  (task) =>
   task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
   task.description.toLowerCase().includes(searchQuery.toLowerCase()),
 )

 const todoTasks = filteredTasks.filter((task) => task.status === "todo")
 const inProgressTasks = filteredTasks.filter((task) => task.status === "in-progress")
 const completedTasks = filteredTasks.filter((task) => task.status === "completed")

 return (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
   <div className="relative mb-6">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
    <Input
     placeholder="Search tasks..."
     className="pl-10"
     value={searchQuery}
     onChange={(e) => setSearchQuery(e.target.value)}
    />
   </div>

   <Tabs defaultValue="all" className="w-full">
    <TabsList className="grid grid-cols-4 mb-6">
     <TabsTrigger value="all">All ({filteredTasks.length})</TabsTrigger>
     <TabsTrigger value="todo">To Do ({todoTasks.length})</TabsTrigger>
     <TabsTrigger value="in-progress">In Progress ({inProgressTasks.length})</TabsTrigger>
     <TabsTrigger value="completed">Completed ({completedTasks.length})</TabsTrigger>
    </TabsList>

    <TabsContent value="all" className="space-y-4">
     {filteredTasks.length > 0 ? (
      filteredTasks.map((task) => (
       <TaskCard
        key={task.id}
        task={task}
        onEdit={() => onEdit(task)}
        onDelete={() => onDelete(task.id)}
        onStatusChange={(status) => onStatusChange(task.id, status)}
       />
      ))
     ) : (
      <p className="text-center text-gray-500 dark:text-gray-400 py-8">
       No tasks found. Create a new task to get started.
      </p>
     )}
    </TabsContent>

    <TabsContent value="todo" className="space-y-4">
     {todoTasks.length > 0 ? (
      todoTasks.map((task) => (
       <TaskCard
        key={task.id}
        task={task}
        onEdit={() => onEdit(task)}
        onDelete={() => onDelete(task.id)}
        onStatusChange={(status) => onStatusChange(task.id, status)}
       />
      ))
     ) : (
      <p className="text-center text-gray-500 dark:text-gray-400 py-8">No to-do tasks found.</p>
     )}
    </TabsContent>

    <TabsContent value="in-progress" className="space-y-4">
     {inProgressTasks.length > 0 ? (
      inProgressTasks.map((task) => (
       <TaskCard
        key={task.id}
        task={task}
        onEdit={() => onEdit(task)}
        onDelete={() => onDelete(task.id)}
        onStatusChange={(status) => onStatusChange(task.id, status)}
       />
      ))
     ) : (
      <p className="text-center text-gray-500 dark:text-gray-400 py-8">No in-progress tasks found.</p>
     )}
    </TabsContent>

    <TabsContent value="completed" className="space-y-4">
     {completedTasks.length > 0 ? (
      completedTasks.map((task) => (
       <TaskCard
        key={task.id}
        task={task}
        onEdit={() => onEdit(task)}
        onDelete={() => onDelete(task.id)}
        onStatusChange={(status) => onStatusChange(task.id, status)}
       />
      ))
     ) : (
      <p className="text-center text-gray-500 dark:text-gray-400 py-8">No completed tasks found.</p>
     )}
    </TabsContent>
   </Tabs>
  </div>
 )
}
