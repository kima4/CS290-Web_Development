import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Create = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const createExercise = async() => {
        const createdExercise = { name, reps, weight, unit, date };
        const resp = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(createdExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (resp.status === 201) {
            alert("Successfully created the exercise");
        } else {
            alert(`Failed to create exercise, status code = ${resp.status}`);
        }
        history.push("/");
    };


    return (
        <div>
            <h2>Create Exercise</h2>
            <div id="field">
                <label>Exercise Name: 
                    <input
                        type="text"
                        placeholder="Enter exercise name"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </label>
            </div>
            <div id="field">
                <label>Rep Number: 
                    <input
                        type="number"
                        placeholder="Enter rep number"
                        value={reps}
                        onChange={e => setReps(e.target.value)} />
                </label>
            </div>
            <div id="field">
                <label>Weight:
                    <input
                        type="number"
                        placeholder="Enter weight"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} />
                </label>
            </div>
            <div id="field">
                <label>Weight Unit:
                    <input
                        type="text"
                        placeholder="Enter weight unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)} />
                </label>
            </div>
            <div id="field">
                <label>Date:
                    <input
                        type="text"
                        placeholder="Enter date"
                        value={date}
                        onChange={e => setDate(e.target.value)} />
                </label>
            </div>
            <button onClick={createExercise}>Create</button>
        </div>
    )
}

export default Create;