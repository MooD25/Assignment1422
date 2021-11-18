import { useState, useEffect } from 'react'

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    const onCreateAccount = (event) => {

        event.preventDefault();

        //`${process.env.REACT_APP_BACK_END_API_DOMAIN}/users`
        fetch("http://localhost:300/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(json => {

                alert(json.message);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })

            })
            .catch(err => {
                console.log(`Error ${err}`)
            })
    }



    return (
        <section id="register-section">

            <div className="container">

                <h1>Register</h1>

                <form action="" onSubmit={onCreateAccount}>

                    <div className="form-control">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" value={formData.firstName} onChange={(event) => {
                            setFormData({ ...formData, firstName: event.target.value });
                        }} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" value={formData.lastName} onChange={(event) => {
                            setFormData({ ...formData, lastName: event.target.value });
                        }} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={formData.email} onChange={(event) => {
                            setFormData({ ...formData, email: event.target.value });
                        }} />
                    </div>


                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" valeu={formData.password} onChange={(event) => {
                            setFormData({ ...formData, password: event.target.value });
                        }} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="text" id="password" value={formData.confFirmPassword} onChange={(event) => {
                            setFormData({ ...formData, confirmPassword: event.target.value });
                        }} />
                    </div>


                    <div className="form-control">
                        <button className="btn" type="submit">Create Account</button>
                    </div>

                </form>

            </div>

        </section>
    )
}

export default RegistrationForm