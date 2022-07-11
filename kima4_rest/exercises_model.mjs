import mongoose from 'mongoose';

mongoose.connect(
    "mongodb://localhost:27017/exercises_db",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

mongoose.set('useCreateIndex', true);

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) => {
    const created = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    return created.save();
};

const retrieveExercise = async () => {
    const retrieved = Exercise.find({});
    return retrieved.exec();
};

const updateExercise = async (_id, name, reps, weight, unit, date) => {
    const updated = await Exercise.replaceOne({ _id: _id }, { name: name, reps: reps, weight: weight, unit: unit, date: date });
    return updated.nModified;
};

const deleteExercise = async (_id) => {
    const deleted = await Exercise.deleteOne({ _id: _id });
    return deleted.deletedCount;
};

export { createExercise, retrieveExercise, updateExercise, deleteExercise }