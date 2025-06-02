"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { Task } from "@/lib/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { initialUsers } from "@/lib/data"

interface TaskFormProps {
 onSubmit: (task: Task | Omit<Task, "id" | "createdAt">) => void
 onCancel: () => void
 initialData?: Task | null
}

export function TaskForm({ onSubmit, onCancel, initialData }: TaskFormProps) {
 const [formData, setFormData] = useState<Omit<Task, "id" | "createdAt">>({
  title: "",
  description: "",
  status: "todo",
  priority: "medium",
  assignee: initialUsers[0].name,
 })

 useEffect(() => {
  if (initialData) {
   setFormData({
    title: initialData.title,
    description: initialData.description,
    status: initialData.status,
    priority: initialData.priority,
    assignee: initialData.assignee,
   })
  }
 }, [initialData])

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target
  setFormData((prev) => ({ ...prev, [name]: value }))
 }

 const handleSelectChange = (name: string, value: string) => {
  setFormData((prev) => ({ ...prev, [name]: value }))
 }

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (!formData.title.trim()) return

  if (initialData) {
   onSubmit({
    ...formData,
    id: initialData.id,
    createdAt: initialData.createdAt,
   })
  } else {
   onSubmit(formData)
  }
 }

 return (
  <Card>
   <CardHeader>
    <CardTitle>{initialData ? "Edit Task" : "Create New Task"}</CardTitle>
   </CardHeader>
   <form onSubmit={handleSubmit}>
    <CardContent className="space-y-4">
     <div className="space-y-2">
      <label htmlFor="title" className="text-sm font-medium">
       Title
      </label>
      <Input
       id="title"
       name="title"
       value={formData.title}
       onChange={handleChange}
       placeholder="Task title"
       required
      />
     </div>

     <div className="space-y-2">
      <label htmlFor="description" className="text-sm font-medium">
       Description
      </label>
      <Textarea
       id="description"
       name="description"
       value={formData.description}
       onChange={handleChange}
       placeholder="Task description"
       rows={3}
      />
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-2">
       <label htmlFor="status" className="text-sm font-medium">
        Status
       </label>
       <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
        <SelectTrigger>
         <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="todo">To Do</SelectItem>
         <SelectItem value="in-progress">In Progress</SelectItem>
         <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
       </Select>
      </div>

      <div className="space-y-2">
       <label htmlFor="priority" className="text-sm font-medium">
        Priority
       </label>
       <Select value={formData.priority} onValueChange={(value) => handleSelectChange("priority", value)}>
        <SelectTrigger>
         <SelectValue placeholder="Select priority" />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="low">Low</SelectItem>
         <SelectItem value="medium">Medium</SelectItem>
         <SelectItem value="high">High</SelectItem>
        </SelectContent>
       </Select>
      </div>

      <div className="space-y-2">
       <label htmlFor="assignee" className="text-sm font-medium">
        Assignee
       </label>
       <Select value={formData.assignee} onValueChange={(value) => handleSelectChange("assignee", value)}>
        <SelectTrigger>
         <SelectValue placeholder="Select assignee" />
        </SelectTrigger>
        <SelectContent>
         {initialUsers.map((user) => (
          <SelectItem key={user.id} value={user.name}>
           {user.name}
          </SelectItem>
         ))}
        </SelectContent>
       </Select>
      </div>
     </div>
    </CardContent>

    <CardFooter className="flex justify-end space-x-2">
     <Button type="button" variant="outline" onClick={onCancel}>
      Cancel
     </Button>
     <Button type="submit">{initialData ? "Update Task" : "Create Task"}</Button>
    </CardFooter>
   </form>
  </Card>
 )
}
