import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
 groupedNotifications = [
    {
      date: 'Today',
      items: [
        {
          title: 'Task Assigned',
          message: 'You were assigned to "Bug Fix #234"',
          time: '2 hours ago',
          icon: 'pi pi-check-circle',
          read: false
        },
        {
          title: 'New Comment',
          message: 'Jane commented on "Sprint Planning"',
          time: '3 hours ago',
          icon: 'pi pi-comment',
          read: true
        }
      ]
    },
    {
      date: 'Yesterday',
      items: [
        {
          title: 'Issue Resolved',
          message: 'The issue "Login not working" was marked resolved.',
          time: '1 day ago',
          icon: 'pi pi-check',
          read: true
        }
      ]
    }
  ];
}
