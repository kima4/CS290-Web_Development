# CS290-Web_Development
Portfolio project for CS290 at Oregon State University


The rubric for this project was as follows:


Data was stored in MongoDB in a collection named `exercises`. Each document in the collection had to following properties:
  - name (String) - the name of the exercise
  - reps (Number) - the number of times the exercise was performed
  - weight (Number) - the weight of the weights used for the exercise
  - unit (String) - the unit of measurement of the weight, only permitted values are `kgs` and `lbs`
  - date (String) - the date the exercise was performed


I needed to create a REST API that supports CRUD operations by implmenting:
1. Create using POST /exercises
2. Read using GET /exercises
3. Update using PUT /exercises/:id
4. Delete using DELETE /exercises/:id


I also needed to create a React UI with:
1. Home Page - renders on app startup and displays data for all exercises stored in MongoDB
2. Edit Exercise Page - allows user to edit a specified exercise and returns to the Home Page when finished
3. Create Exercise Page - allows user to add a new exercise to the database and returns to the Home Page when finished


Result: 23/18
