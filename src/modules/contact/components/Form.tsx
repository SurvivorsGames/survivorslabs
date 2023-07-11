import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { TEXT } from "commons/theme/colors";
import useContact from "../hooks/useContact";
import CustomLoading from "commons/components/CustomLoading";

const FormContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	gap: "1em",
});

export interface IFormData {
	nombre: string;
	celular: string;
	correo: string;
	servicio: string;
	mensaje: string;
}

const initialState = {
	nombre: "",
	celular: "",
	correo: "",
	servicio: "",
	mensaje: "",
};

function ContactForm() {
	const [formData, setFormData] = useState<IFormData>(initialState);

	const { loading, handleSendForm } = useContact();

	const [error, setError] = useState<string | undefined>(undefined);

	const handleChange = (event: any) => {
		setError(undefined);
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const { nombre, celular, correo, servicio, mensaje } = formData;

		if (!nombre || !celular || !correo || !servicio || !mensaje) {
			setError("Por favor, completa todos los campos");
			return;
		}

		let result = await handleSendForm(formData);
		if (result) {
			setError(
				"¡Hemos registrado tus datos! \n Un asesor se pondra en contacto contigo"
			);
			setFormData(initialState);
		} else {
			setError("Ha ocurrido un error. Intenta nuevamente");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<FormContainer
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "70vh",
				}}
			>
				{loading && <CustomLoading />}
				<Grid container spacing={1} display={loading ? "none" : "flex"}>
					<Grid item md={6} xs={12}>
						<TextField
							fullWidth
							label="Nombre"
							variant="outlined"
							name="nombre"
							value={formData.nombre}
							onChange={handleChange}
							inputProps={{ maxLength: 50 }}
						/>
					</Grid>
					<Grid item md={6} xs={12}>
						<TextField
							type="number"
							fullWidth
							label="Celular"
							variant="outlined"
							name="celular"
							value={formData.celular}
							onChange={handleChange}
							inputProps={{ maxLength: 11 }}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Correo"
							variant="outlined"
							name="correo"
							value={formData.correo}
							onChange={handleChange}
							inputProps={{ maxLength: 100 }}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth variant="outlined">
							<InputLabel id="demo-simple-select-outlined-label">
								Servicio deseado
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								label="Servicio deseado"
								name="servicio"
								value={formData.servicio}
								onChange={handleChange}
							>
								<MenuItem value="Diseno web">
									Diseño web
								</MenuItem>
								<MenuItem value="Aplicacion movil">
									Aplicación móvil
								</MenuItem>
								<MenuItem value="Marketing Digital">
									Marketing Digital
								</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Mensaje"
							multiline
							rows={4}
							variant="outlined"
							name="mensaje"
							value={formData.mensaje}
							onChange={handleChange}
							inputProps={{ maxLength: 1000 }}
						/>
					</Grid>
					<Grid item xs={12}>
						{error && (
							<Typography
								variant="h6"
								component={"p"}
								sx={{
									color: TEXT,
									textAlign: "center",
									margin: "3px",
								}}
							>
								{error}
							</Typography>
						)}
						<Button
							fullWidth
							type="submit"
							variant="contained"
							color="primary"
						>
							Enviar
						</Button>
					</Grid>
				</Grid>
			</FormContainer>
		</form>
	);
}

export default ContactForm;
