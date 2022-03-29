import React from "react";
import { useState } from "react";

export const FormRegister = () => {

	const defaultData = {
        name: '',
        lastName: '',
		email: '',
        password: ''
    }

	const [data, setData] = useState(defaultData);

	const onChangeData = (e) => {

		console.log(e.target);
		setData({
            ...data,
            [e.target.name]: e.target.value,
        });
	}

	const guardarUsuario = () => {
		fetch('https://3001-joaquinalzugara-proyecto-ky1l8erosry.ws-us38.gitpod.io/api/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
				alert("Creado con éxito")
				setData(defaultData)
            });
	}

	return (
		<div className="d-flex justify-content-center">
			<div className="w-25">
				<div class="form-group mt-3">
					<input
						type="text"
						class="form-control"
						id="firtsName"
						aria-describedby="firtsNameHelp"
						placeholder="First Name"
						onChange={onChangeData}
						name = "name"
						value={data.name}
					/>
				</div>
				<div class="form-group mt-3">
					<input
						type="text"
						class="form-control"
						id="lastName"
						aria-describedby="lastNameHelp"
						placeholder="Last Name"
						onChange={onChangeData}
						name = "lastName"
						value={data.lastName}
					/>
				</div>
				<div class="form-group mt-3">
					<input
						type="email"
						class="form-control"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Email"
						onChange={onChangeData}
						name = "email"
						value={data.email}
					/>
				</div>
				<div class="form-group mt-3">
					<input
						type="password"
						class="form-control"
						id="password"
						placeholder="Password"
						onChange={onChangeData}
						name = "password"
						value={data.password}
					/>
				</div>
				<div class="form-check mt-3">
					<input
						type="checkbox"
						class="form-check-input"
						id="check"
					/>
					<label class="form-check-label" for="check">
						I accept Terms and Conditions
					</label>
				</div>
				<button type="buttom" onClick={()=> guardarUsuario()} class="btn btn-primary mt-3 mb-3 w-100 bg-dark">
					CREATE ACCOUNT
				</button>
			</div>
		</div>		
	);
};

export default FormRegister;
