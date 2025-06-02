"use client"

import { useState, useEffect } from "react"
import { TaskList } from "@/components/task-list"
import { TaskForm } from "@/components/task-form"
import { NotificationPanel } from "@/components/notification-panel"
import { CollaborationIndicator } from "@/components/collaboration-indicator"
import { initialTasks, initialUsers } from "@/lib/data"
import type { Task, User } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

export function TaskDashboard() {
 const [tasks, setTasks] = useState<Task[]>(initialTasks)
 const [notifications, setNotifications] = useState<string[]>([])
 const [isFormOpen, setIsFormOpen] = useState(false)
 const [editingTask, setEditingTask] = useState<Task | null>(null)
 const [activeUsers, setActiveUsers] = useState<User[]>(initialUsers.slice(0, 2))

 // Simulate real-time updates
 useEffect(() => {
  const interval = setInterval(() => {
   // Simulate a user joining or leaving
   if (Math.random() > 0.7) {
    const availableUsers = initialUsers.filter((user) => !activeUsers.some((au) => au.id === user.id))

    if (availableUsers.length && activeUsers.length < 4) {
     const randomUser = availableUsers[Math.floor(Math.random() * availableUsers.length)]
     setActiveUsers((prev) => [...prev, randomUser])
     addNotification(`${randomUser.name} joined the workspace`)
    } else if (activeUsers.length > 1) {
     const userToRemove = activeUsers[Math.floor(Math.random() * activeUsers.length)]
     setActiveUsers((prev) => prev.filter((user) => user.id !== userToRemove.id))
     addNotification(`${userToRemove.name} left the workspace`)
    }
   }
  }, 15000)

  return () => clearInterval(interval)
 }, [activeUsers])

 const addNotification = (message: string) => {
  setNotifications((prev) => [message, ...prev].slice(0, 5))
 }

 const handleCreateTask = (task: Omit<Task, "id" | "createdAt">) => {
  const newTask: Task = {
   id: `task-${Date.now()}`,
   createdAt: new Date().toISOString(),
   ...task,
  }

  setTasks((prev) => [newTask, ...prev])
  addNotification(`New task created: ${task.title}`)
  setIsFormOpen(false)
 }

 const handleUpdateTask = (updatedTask: Task) => {
  setTasks((prev) => prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
  addNotification(`Task updated: ${updatedTask.title}`)
  setEditingTask(null)
  setIsFormOpen(false)
 }

 const handleDeleteTask = (taskId: string) => {
  const taskToDelete = tasks.find((task) => task.id === taskId)
  setTasks((prev) => prev.filter((task) => task.id !== taskId))
  if (taskToDelete) {
   addNotification(`Task deleted: ${taskToDelete.title}`)
  }
 }

 const handleEditTask = (task: Task) => {
  setEditingTask(task)
  setIsFormOpen(true)
 }

 return (
  <div className="container mx-auto px-4 py-8">
   <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
    <div>
     <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Task Management</h1>
     <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your tasks and collaborate with your team</p>
    </div>
    <div className="flex items-center mt-4 md:mt-0">
     <CollaborationIndicator users={activeUsers} />
     <Button
      onClick={() => {
       setEditingTask(null)
       setIsFormOpen(true)
      }}
      className="ml-4"
     >
      <PlusIcon className="h-4 w-4 mr-2" />
      New Task
     </Button>
    </div>
   </div>

   <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <div className="lg:col-span-3">
     {isFormOpen && (
      <div className="mb-6">
       <TaskForm
        onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
        onCancel={() => {
         setIsFormOpen(false)
         setEditingTask(null)
        }}
        initialData={editingTask}
       />
      </div>
     )}
     <TaskList
      tasks={tasks}
      onEdit={handleEditTask}
      onDelete={handleDeleteTask}
      onStatusChange={(taskId, status) => {
       const updatedTasks = tasks.map((task) => (task.id === taskId ? { ...task, status } : task))
       setTasks(updatedTasks)
       const taskTitle = tasks.find((t) => t.id === taskId)?.title
       addNotification(`Task "${taskTitle}" moved to ${status}`)
      }}
     />
    </div>
    <div className="lg:col-span-1">
     <NotificationPanel notifications={notifications} />
    </div>
   </div>
  </div>
 )
}
