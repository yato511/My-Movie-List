import React from "react";

export default function FloatButton() {
	return (
		<button
			className="btn btn-primary border-primary"
			style={{
				position: "fixed",
				bottom: 50,
				right: 20,
				borderRadius: "50%",
			}}
			onClick={() => {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}}
		>
			<i className="fas fa-angle-double-up"></i>
		</button>
	);
}
