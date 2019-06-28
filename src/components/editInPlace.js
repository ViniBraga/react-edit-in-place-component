import React, { useState, useEffect, useRef } from 'react';
 
import './editInPlace.css';

export const TextArea = ({ value, onChangeValue, viewAs }) => {

    const [ isEditing, setIsEditing ] = useState(false);

    const edit = () => setIsEditing(true);
    const done = () => {
        onChangeValue(inputRef.current.value);
        setIsEditing(false);
    }

    const inputRef = useRef(null);

    useEffect(() => {
        if(isEditing) {
            inputRef.current.focus();
        }
    }, [ isEditing ]);

    if(isEditing) {
        return <textarea type="text" ref={inputRef} onBlur={done}>{value}</textarea>
    }
    return React.createElement(viewAs || 'div', {
        onClick: edit,
        className: 'edit-in-place',
        children: value,
    });
}

export const Input = ({ value, onChangeValue, viewAs }) => {

    const [ isEditing, setIsEditing ] = useState(false);

    const edit = () => setIsEditing(true);
    const done = () => {
        onChangeValue(inputRef.current.value);
        setIsEditing(false);
    }

    const inputRef = useRef(null);

    useEffect(() => {
        if(isEditing) {
            inputRef.current.focus();
        }
    }, [ isEditing ]);

    if(isEditing) {
        return <input type="text" defaultValue={value} ref={inputRef} onBlur={done}/>
    }
    return React.createElement(viewAs || 'div', {
        onClick: edit,
        className: 'edit-in-place',
        children: value,
    });
}
export default Input;