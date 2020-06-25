import React from "react";

import SearchForm from "./SearchForm";
import WishIcon from "./WishIcon";

export default function Homepage() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 text-right pr-5 mt-5">
					<WishIcon x2={true} />
				</div>
				<div className="col-12">
					<SearchForm
						style={{
							position: "fixed",
							top: "45%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
