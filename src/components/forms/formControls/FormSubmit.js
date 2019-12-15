import React from 'react';

const FormSubmit = (props) => {
    return (
        <button type="submit" className="btn btn-primary">{props.text}</button>
    );
};

export default FormSubmit;