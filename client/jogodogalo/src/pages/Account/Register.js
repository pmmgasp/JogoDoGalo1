import React from "react";

function Register() {
    return (
        <div className="register">
            <label>
                 Nome:
                <input type="text" name="name" />
            </label>
            <label>
                 Email:
                <input type="text" name="name" />
            </label>
            <label>
                 Password:
            <input type="text" name="name" />
            </label>
            <label>
                 Confirm Password:
            <input type="text" name="name" />
            </label>
            <button>Registar</button>
        </div>
    )
}

export default Register;