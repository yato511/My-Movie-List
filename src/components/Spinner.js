import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
	return (
		<img
			src={spinner}
			className="img-fluid"
			alt="...loading"
			style={{
				position: "fixed",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
			}}
		/>
	);
}
