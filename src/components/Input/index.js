import React from "react";
import './_index.scss';

const Input = (props) => {
    const { ...rest } = props;
    return <input {...rest} />
}
export default Input;