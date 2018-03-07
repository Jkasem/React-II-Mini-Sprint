import React from 'react';
import './PeopleList.css';

export const PeopleList = (props) => {
    return (
        <div className="People__Wrapper">
        {props.people.map((person => {
            return (
                <div className="People__item" key={person.first_name}>
                    <h3>{person.first_name} {person.last_name}</h3>
                    <h3>{person.email}</h3>
                </div>
            )
        }))}
        </div>
    )
};