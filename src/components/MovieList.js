import React from "react";
import MovieCard from "./MovieCard";
import "../css/col5.css";

const moviesPerPage = 10;
const paginate = (total) => {
	let pages = [];
	let length =
		total % moviesPerPage === 0
			? total / moviesPerPage
			: parseInt(total / moviesPerPage) + 1;

	for (let i = 1; i <= length; i++) {
		pages.push(i);
	}
	return pages;
};
const currentPaginate = (currentPage, pages) => {
	const max = pages.length;
	if (max <= 10) return pages;
	else if (currentPage + 5 <= max) {
		if (currentPage - 6 >= 0)
			return pages.slice(currentPage - 6, currentPage + 5);
		else return pages.slice(0, 10);
	} else {
		if (currentPage - 6 >= 0) return pages.slice(currentPage - 6, max);
		else return pages.slice(0, max);
	}
};

export default function MovieList({ data, input, currentPage }) {
	const { totalResults } = data;
	const from = moviesPerPage * (currentPage - 1) + 1;
	const to =
		moviesPerPage * currentPage < totalResults
			? moviesPerPage * currentPage
			: totalResults;
	const pages = paginate(totalResults);
	const currentPageList = currentPaginate(currentPage, pages);
	const totalPage = pages.length;
	return (
		<div>
			<div className="row my-5" id="movie-list">
				<div className="col-md-12 d-flex justify-content-between">
					<h3>Results for "{input}"</h3>
					{data.Response === "True" ? (
						<p>
							Showing <strong>{from}</strong> to <strong>{to}</strong> of{" "}
							<strong>{data.totalResults}</strong> results
						</p>
					) : null}
				</div>
				{data.Response === "True" ? (
					data.Search.map((movie, index) => (
						<div className="col-md-5ths my-2" key={index}>
							<MovieCard movie={movie} />
						</div>
					))
				) : (
					<div className="col-md-12">{data.Error}</div>
				)}
			</div>
			{data.Response === "True" ? (
				<div className="row">
					<div className="col-md-12">
						<nav aria-label="Page navigation example">
							<ul className="pagination justify-content-center">
								<li className="page-item">
									<a
										className="page-link"
										href={`/result?title=${input}&page=1`}
									>
										First
									</a>
								</li>
								<li
									className={
										"page-item" + (currentPage === 1 ? " disabled" : "")
									}
								>
									<a
										className="page-link"
										href={`/result?title=${input}&page=${currentPage - 1}`}
									>
										Previous
									</a>
								</li>

								{currentPageList.map((page, index) => (
									<li
										className={
											"page-item" + (page === currentPage ? " active" : "")
										}
										key={index}
									>
										<a
											className="page-link"
											href={`/result?title=${input}&page=${page}`}
										>
											{page}
										</a>
									</li>
								))}

								<li
									className={
										"page-item" + (currentPage === totalPage ? " disabled" : "")
									}
								>
									<a
										className="page-link"
										href={`/result?title=${input}&page=${currentPage + 1}`}
									>
										Next
									</a>
								</li>
								<li className="page-item">
									<a
										className="page-link"
										href={`/result?title=${input}&page=${totalPage}`}
									>
										Last
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			) : null}
		</div>
	);
}
