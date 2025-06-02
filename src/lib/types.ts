export interface Task {
 id: string
 title: string
 description: string
 status: string
 priority: string
 assignee: string
 createdAt: string
}

export interface User {
 id: string
 name: string
 avatar?: string
}
