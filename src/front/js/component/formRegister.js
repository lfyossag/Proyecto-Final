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
						placeholder="Nombre (s)"
					/>
				</div>
				<div class="form-group mt-3">
					<input
						type="text"
						class="form-control"
						id="lastName"
						aria-describedby="lastNameHelp"
						placeholder="Apellido (s)"
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
						placeholder="Contraseña"
					/>
				</div>
				<div class="form-check mt-3">
					<input
						type="checkbox"
						class="form-check-input"
						id="check"
					/>
					<label class="form-check-label" for="check">
						Acepto Términos y Condiciones
					</label>
				</div>
				<button type="submit" class="btn btn-primary mt-3 mb-3 w-100">
					CREAR CUENTA
				</button>
			</form>
		</div>
	);
};

export default FormRegister;
