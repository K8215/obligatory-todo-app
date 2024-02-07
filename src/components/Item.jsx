import React, { useState } from "react";

export default function Item(props) {
	const [strike, setStrike] = useState(false);

	const handleStrike = () => {
		strike ? setStrike(false) : setStrike(true);
	};

	return (
		<li
			className={strike ? "item item--struck" : "item"}
			onClick={handleStrike}
		>
			<span className="item-desc">{props.text}</span>
			<button onClick={props.onDelete} className="item-button js-delete">
				x
			</button>
		</li>
	);
}
