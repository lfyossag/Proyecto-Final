import React from "react";

export const FormRegister = () => {
	return (
		<div className="d-flex justify-content-center">
			<form className="w-25">
				<div class="form-group mt-3">
					<input
						type="text"
						class="form-control"
						id="firtsName"
						aria-describedby="firtsNameHelp"
						placeholder="First Name"
					/>
				</div>
				<div class="form-group mt-3">
					<input
						type="text"
						class="form-control"
						id="lastName"
						aria-describedby="lastNameHelp"
						placeholder="Last Name"
					/>
				</div>
				<div class="form-group mt-3">
					<input
						type="email"
						class="form-control"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Email"
					/>
				</div>
				<div class="form-group mt-3">
					<input
						type="password"
						class="form-control"
						id="password"
						placeholder="Password"
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
				<button type="submit" class="btn btn-primary mt-3 mb-3 w-100 bg-dark">
					CREATE ACCOUNT
				</button>
			</form>
		</div>
	);
};

export default FormRegister;
