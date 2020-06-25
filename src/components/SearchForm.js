import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "../css/searchBar.css";

export default function SearchForm({ style }) {
	const history = useHistory();
	const [input, setInput] = useState("");
	return (
		<div className="text-center" style={style}>
			<h1 className="brand brand-lg">My Movie List</h1>
			<div className="search-bar search-bar-lg">
				<input
					className="form-control form-control-lg search-input search-input-lg"
					type="text"
					value={input}
					placeholder="Search for movies..."
					onChange={(event) => setInput(event.target.value)}
					onKeyDown={(event) => {
						if (event.keyCode === 13) {
							history.push(`/result?title=${input}&page=1`);
						}
					}}
				/>
				<Link
					className="btn btn-lg btn-search btn-search-lg align-self-center"
					to={input.length ? `/result?title=${input}&page=1` : "/"}
					data-toggle="tooltip"
					title="Search"
				>
					<i className="fas fa-search"></i>
				</Link>
			</div>
		</div>
	);
}
