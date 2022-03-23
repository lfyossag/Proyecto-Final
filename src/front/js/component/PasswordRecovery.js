import React from "react";

export const PasswordRecovery = () => {
	return (
		<div className="d-flex justify-content-center">
			<form className="w-25">
                <h4>
                    ¿Olvidaste tu contraseña?
				</h4>
                <p>Escribe tu email y recibirás un enlace para restablecerla.</p>

				<div class="form-group mt-3 d-flex justify-content-center">
					<input
						type="email"
						class="form-control w-75"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Email"
					/>
				</div>				
				<button type="submit" class="btn btn-primary mt-3 mb-3 w-50 bg-dark p-2">
					ENVIAR
				</button>
			</form>
		</div>
	);
};

export default PasswordRecovery;