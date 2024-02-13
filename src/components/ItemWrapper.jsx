import React, { useState } from "react";
import Item from "./Item";

export default function ItemWrapper() {
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleValueChange = (e) => {
		setInputValue(e.target.value);
		//console.log(inputValue);
	};

	const handleButtonPress = () => {
		setItems((prevItems) => [...prevItems, inputValue]);
		setInputValue("");
		//console.log(items);
	};

	const handleDelete = (index) => {
		setItems((prevItems) => {
			const newItems = [...prevItems];
			newItems.splice(index, 1);
			return newItems;
		});
	};

	return (
		<>
			<textarea
				className="todo-form"
				placeholder="Add a todo item..."
				value={inputValue}
				onChange={handleValueChange}
			></textarea>
			<button onClick={handleButtonPress} className="todo-button">
				Add Item
			</button>
			<ul className="todo-wrapper">
				{items.map((item, index) => (
					<Item key={index} text={item} onDelete={() => handleDelete(index)} />
				))}
			</ul>
		</>
	);
}
