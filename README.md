# OnTask

Stay organized

Please refer to `requirements.txt` for version information.

OnTask is an application to have all your assignments, tests, and projects sorted efficiently so you can stay on task.
The left shows the tasks sorted by due date with progress shown as well. The right shows a calendar to easily visualize your
workload.

## For Developers

### How to run Project

Make sure you have angular installed, ` npm install -g @angular/cli`. The other libraries/frameworks needed are simple to install, stack overflow probably has the commands there. 

Once everything is installed, make sure your in the frontend directory `cd on-task`, and then run the command `ng serve --open`. It's also possible you may need to use `ng.cmd serve --open`. 

At the moment, the taskbar is shown using Task object, multiple parameters being shown.

TODO

- User Interaction
  - Make it look nicer
    - BUG: When creating too many tasks, they end up below add task!! Make it so there is scrollwheel for tasks.
  - Make fields required
- Add other parameters for `Task` object
  - Priority Option
  - Type of Task
    - Test
    - Project
    - Assignment
- Make each `Task` in `Tasks` mutuable for changes
  - Change information
  - Update Progress
  - Mark as Done
- Calendar
  - Calendar with proper dates
  - Include the tasks on there
- Tasks should be organized
  - By Priority
  - Date
- Dates that have past
  - if completed, they should be removed
  - if not completed, priority
- Backend

When working on the project, make sure to create a branch for your own work. When completing the Pull Request, make sure to have the branch deleted, and the commits squashed. Furthermore, make it evident in the branch name and commit message what the task actually is. Make sure to test before completing the request, and optionally have a peer look over it before it is pulled.

New Requirement: Prettier!! For code cleaniness, Prettier will auto-format code on save. Download it through `npm` and `VSCode` and make sure to adjust settings accordingly.
