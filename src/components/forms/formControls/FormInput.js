import React from 'react';


const FormInput = (props) => {
    return (
        <input type={props.type} className="form-control" placeholder={props.placeholder} />
    );
};

export default FormInput;