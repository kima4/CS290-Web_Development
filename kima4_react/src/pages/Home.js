import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ExerciseList from '../components/ExerciseList'

function Home({ setExerciseToEdit }) {
    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const retrieveExercises = async () => {
        const resp = await fetch('/exercises');
        const data = await resp.json();
        setExercises(data);
    }

    useEffect(() => {
        retrieveExercises();
    }, []);

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    }

    const onDelete = async _id => {
        const resp = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (resp.status === 204) {
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${resp.status}`);
        }
    };

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseList exercises={exercises} onEdit={onEdit} onDelete={onDelete}></ExerciseList>
            <Link to="/create-exercise">Create an Exercise</Link>
        </>
    )

}

export default Home;