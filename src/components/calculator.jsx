import { InputField } from './inputField'
import { Keypad } from './keypad'
import { useState } from 'react'

export function Calculator() {
	const [input, setInput] = useState('')

	const onButtonClick = (value) => {
		setInput(input + value)
		console.log(value)
	}

	const onClear = () => {
		setInput('')
		console.log('cleared')
	}

	return (
		<div>
			<InputField value={input} />
			<Keypad onButtonClick={onButtonClick} onClear={onClear} />
		</div>
	)
}
