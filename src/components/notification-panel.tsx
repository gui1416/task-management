"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface NotificationPanelProps {
 notifications: string[]
}

export function NotificationPanel({ notifications }: NotificationPanelProps) {
 const [unreadCount, setUnreadCount] = useState(0)
 const [visibleNotifications, setVisibleNotifications] = useState<string[]>([])

 useEffect(() => {
  if (notifications.length > visibleNotifications.length) {
   setUnreadCount((prev) => prev + (notifications.length - visibleNotifications.length))
   setVisibleNotifications(notifications)
  }
 }, [notifications, visibleNotifications])

 const clearNotifications = () => {
  setVisibleNotifications([])
  setUnreadCount(0)
 }

 const removeNotification = (index: number) => {
  setVisibleNotifications((prev) => prev.filter((_, i) => i !== index))
 }

 return (
  <Card>
   <CardHeader className="flex flex-row items-center justify-between pb-2">
    <CardTitle className="text-lg font-medium">Notifications</CardTitle>
    <div className="flex items-center space-x-2">
     {unreadCount > 0 && (
      <Badge variant="destructive" className="rounded-full px-2">
       {unreadCount}
      </Badge>
     )}
     <Button variant="ghost" size="sm" onClick={clearNotifications} disabled={visibleNotifications.length === 0}>
      Clear all
     </Button>
    </div>
   </CardHeader>
   <CardContent>
    {visibleNotifications.length > 0 ? (
     <div className="space-y-3">
      {visibleNotifications.map((notification, index) => (
       <div key={index} className="flex items-start justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
        <div className="flex items-start space-x-3">
         <Bell className="h-5 w-5 text-gray-500 mt-0.5" />
         <p className="text-sm text-gray-700 dark:text-gray-300">{notification}</p>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeNotification(index)}>
         <X className="h-4 w-4" />
         <span className="sr-only">Dismiss</span>
        </Button>
       </div>
      ))}
     </div>
    ) : (
     <div className="flex flex-col items-center justify-center py-8 text-center">
      <Bell className="h-8 w-8 text-gray-400 mb-2" />
      <p className="text-gray-500 dark:text-gray-400">No new notifications</p>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
       Notifications about task updates and collaborators will appear here
      </p>
     </div>
    )}
   </CardContent>
  </Card>
 )
}
