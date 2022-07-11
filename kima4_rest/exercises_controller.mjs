'use strict';

import express from 'express';
import * as exercises from './exercises_model.mjs';

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: error });
        });
});

app.get('/exercises', (req, res) => {
    exercises.retrieveExercise()
        .then(exercise => {
            res.status(200).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: error });
        });
});

app.put('/exercises/:id', (req, res) => {
    exercises.updateExercise(req.params.id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.status(200).json({ _id: req.params.id, name: req.body.name, reps: req.body.reps, weight: req.body.reps, unit: req.body.unit, date: req.body.date });
            } else {
                res.status(500).json({ Error: "Resource not found" });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: error });
        });
});

app.delete('/exercises/:id', (req, res) => {
    exercises.deleteExercise(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(500).json({ Error: "Resource not found" });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: error });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});