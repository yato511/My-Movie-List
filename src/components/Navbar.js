import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../css/searchBar.css";
import { getMovieList } from "../actions/movieAction";
import WishIcon from "./WishIcon";

const transparentNav = {};
const solidNav = {
	backgroundImage: "linear-gradient(to right, #868f96 0%, #596164 100%)",
	opacity: 0.9,
};

export default function Navbar({ title }) {
	const [input, setInput] = useState(title);
	const [style, setStyle] = useState({});
	const history = useHistory();
	const dispatch = useDispatch();
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 80) {
				setStyle("solid");
			} else setStyle("trans");
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className="navbar sticky-top"
			style={style === "solid" ? solidNav : transparentNav}
		>
			<Link className="navbar-brand ml-sm-2" to="/">
				<h4 className="brand brand-sm">My Movie List</h4>
			</Link>
			<span
				className={
					"search-bar search-bar-sm ml-auto" +
					(style === "solid" ? "" : " text-dark border-dark")
				}
			>
				<input
					className={
						"form-control search-input search-input-sm" +
						(style === "solid" ? "" : " text-dark")
					}
					type="text"
					value={input}
					placeholder="Search for movies..."
					onChange={(event) => setInput(event.target.value)}
					onKeyDown={(event) => {
						if (event.keyCode === 13) {
							history.push(`/result?title=${input}&page=1`);
							dispatch(getMovieList(input, 1));
						}
					}}
				/>
				<button
					className={
						"btn btn-search btn-search-sm" +
						(style === "solid" ? "" : " text-dark")
					}
					onClick={() => {
						history.push(`/result?title=${input}&page=1`);
						dispatch(getMovieList(input, 1));
					}}
				>
					<i className="fas fa-search"></i>
				</button>
			</span>
			<span className="mx-sm-4">
				<WishIcon x2={false} />
			</span>
		</nav>
	);
}
