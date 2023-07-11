import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const FormContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	gap: "1em",
});

function ContactForm() {
	return (
		<FormContainer
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<Grid container spacing={1}>
				<Grid item md={6} xs={12}>
					<TextField fullWidth label="Nombre" variant="outlined" />
				</Grid>
				<Grid item md={6} xs={12}>
					<TextField fullWidth label="Celular" variant="outlined" />
				</Grid>
				<Grid item xs={12}>
					<TextField fullWidth label="Correo" variant="outlined" />
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
						>
							<MenuItem value="Diseno web">Diseño web</MenuItem>
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
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						fullWidth={true}
						variant="contained"
						color="primary"
					>
						Enviar
					</Button>
				</Grid>
			</Grid>
		</FormContainer>
	);
}

export default ContactForm;
