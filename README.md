# OnTask

Stay organized

Please refer to `requirements.txt` for version information.

OnTask is an application to have all your assignments, tests, and projects sorted efficiently so you can stay on task.
The left shows the tasks sorted by due date with progress shown as well. The right shows a calendar to easily visualize your
workload.

## For Users

Add Tasks, and see them presented above. The background color represents the class, the small bar represents progress, and the border represents priority. To edit, click the task, edit attributes and go back.

## For Developers

### How to run Project

Make sure you have angular installed, ` npm install -g @angular/cli`. The other libraries/frameworks needed are simple to install, stack overflow probably has the commands there.

Once everything is installed, make sure your in the frontend directory `cd on-task`, and then run the command `ng serve --open`. It's also possible you may need to use `ng.cmd serve --open`.

At the moment, the taskbar is shown using Task object, multiple parameters being shown.

TODO

- User Interaction
  - Make it look nicer
  - Add Styling and Button for Edit Task Option
    - BUG: When creating too many tasks, they end up below add task!! Make it so there is scrollwheel for tasks.
  - Make fields required
- Add other parameters for `Task` object
- Calendar
  - Calendar with proper dates
  - Include the tasks on there
- Dates that have past
  - if completed, they should be removed
  - if not completed, priority
- Backend
  - Minor error with search() in TasksComponent, not working as intended
  - Tasks should have a user field for which user created it
  - User Table
    - Backend auth for user to login
- Tasks should be organized (API)
  - By Priority
  - Date
- IMPORTANT: Make database link private, env variable?

### Git Development

When working on the project, make sure to create a branch for your own work. When completing the Pull Request, make sure to have the branch deleted, and the commits squashed. Furthermore, make it evident in the branch name and commit message what the task actually is. Make sure to test before completing the request, and optionally have a peer look over it before it is pulled.

### Firebase

Google firebase is being used! The database link is here: https://on-task-database-default-rtdb.firebaseio.com. For access, make account with firebase and I will add you to the project. It is a realtime database.

New Requirement: Prettier!! For code cleaniness, Prettier will auto-format code on save. Download it through `npm` and `VSCode` and make sure to adjust settings accordingly.
