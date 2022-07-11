import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Edit = ({ exerciseToEdit }) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const resp = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (resp.status === 200) {
            alert("Successfully edited the exercise");
        } else {
            alert(`Failed to edit exercise, status code = ${resp.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h2>Edit Exercise</h2>
            <div id="field">
                <label>Exercise Name: 
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </label>
            </div>
            <div id="field">
                <label>Rep Number: 
                    <input
                        type="number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} />
                </label>
            </div>
            <div id="field">
                <label>Weight:
                    <input
                        type="number"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} />
                </label>
            </div>
            <div id="field">
                <label>Weight Unit:
                    <input
                        type="text"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} />
                </label>
            </div>
            <div id="field">
                <label>Date:
                    <input
                        type="text"
                        value={date}
                        onChange={e => setDate(e.target.value)} />
                </label>
            </div>
            <button onClick={editExercise}>Save</button>
        </div>
    )
}

export default Edit;