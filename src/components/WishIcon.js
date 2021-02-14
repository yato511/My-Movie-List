import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getYourList } from "../actions/userAction";
export default function WishIcon({ x2 }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getYourList());
	}, [dispatch]);
	const list = useSelector((state) => state.user.list);
	return (
		<Link
			to="/your-list"
			className="text-danger"
			style={{ textDecoration: "none", fontSize: 20, fontWeight: 500 }}
			data-toggle="tooltip"
			title={`${list.length} Movies in Your List`}
		>
			<i
				className={"far fa-heart position-relative" + (x2 ? " fa-2x" : "")}
			></i>
			<span
				className="badge badge-success"
				style={{
					position: "absolute",
					top: x2 ? -5 : "auto",
					fontSize: x2 ? 15 : 10,
				}}
			>
				{list.length}
			</span>
		</Link>
	);
}
