/* eslint-disable react/prop-types */
export function Button({ value, onButtonClick }) {
	return <button onClick={() => onButtonClick(value)}>{value}</button>
}
