# OnTask
Stay organized

Please refer to `requirements.txt` for version information.

OnTask is an application to have all your assignments, tests, and projects sorted efficiently so you can stay on task.
The left shows the tasks sorted by due date with progress shown as well. The right shows a calendar to easily visualize your
workload.

## For Developers

At the moment, the taskbar is shown using Task object, multiple parameters being shown.

TODO
- Add other parameters for `Task` object
   - Progress gradient
- Make each `Task` in `Tasks` mutuable for changes
- Calendar
- Dates that have past
   - if completed, they should be removed
   - if not completed, priority
- Backend
