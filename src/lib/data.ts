import type { Task, User } from "./types"

export const initialTasks: Task[] = [
 {
  id: "task-1",
  title: "Design new dashboard layout",
  description:
   "Create wireframes and mockups for the new dashboard layout. Include mobile responsive designs and dark mode support.",
  status: "completed",
  priority: "high",
  assignee: "Alex Johnson",
  createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
 },
 {
  id: "task-2",
  title: "Implement authentication flow",
  description:
   "Set up user authentication with email/password and social login options. Include password reset functionality.",
  status: "in-progress",
  priority: "high",
  assignee: "Sam Wilson",
  createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
 },
 {
  id: "task-3",
  title: "Write API documentation",
  description:
   "Document all API endpoints, request/response formats, and authentication requirements. Use OpenAPI specification.",
  status: "todo",
  priority: "medium",
  assignee: "Jamie Lee",
  createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
 },
 {
  id: "task-4",
  title: "Fix responsive layout issues",
  description: "Address layout issues on mobile devices. Focus on navigation menu and data tables.",
  status: "todo",
  priority: "medium",
  assignee: "Taylor Swift",
  createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
 },
 {
  id: "task-5",
  title: "Optimize database queries",
  description: "Identify and optimize slow database queries. Add appropriate indexes and refactor ORM code.",
  status: "todo",
  priority: "low",
  assignee: "Alex Johnson",
  createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
 },
]

export const initialUsers: User[] = [
 {
  id: "user-1",
  name: "Alex Johnson",
 },
 {
  id: "user-2",
  name: "Sam Wilson",
 },
 {
  id: "user-3",
  name: "Jamie Lee",
 },
 {
  id: "user-4",
  name: "Taylor Swift",
 },
 {
  id: "user-5",
  name: "Morgan Freeman",
 },
]
