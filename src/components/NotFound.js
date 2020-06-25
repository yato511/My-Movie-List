import React from "react";
import Navbar from "./Navbar";

export default function NotFound() {
	return (
		<div>
			<Navbar />
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%,-50%)",
					textAlign: "center",
				}}
			>
				<h1 className="text-danger">Oops...</h1>
				<h5>Page not found</h5>

				<img
					alt="404 not found"
					src="https://media0.giphy.com/media/3ofT5LPFIJ4EmC4Bgc/giphy.gif"
				/>
			</div>
		</div>
	);
}
