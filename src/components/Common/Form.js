import React, {useState} from "react";
import Button from "./Button";
import "../../styles/Common/Form.css";

const Form = ({
                  title,
                  onSubmit,
                  initialData = {name: "", email: ""},
                  buttonText,
                  buttonClass,
                  formClass = '',
              }) => {
    const [user, setUser] = useState(initialData);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(user);

        setUser(initialData);
    };

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form className={`form ${formClass}`} onSubmit={handleSubmit}>
            <h2>{title}</h2>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className={'form__input'}
            />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className={'form__input'}
            />
            <Button type={"submit"} text={buttonText} className={buttonClass}/>
        </form>
    );
};

export default Form;
