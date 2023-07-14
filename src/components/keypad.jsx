/* eslint-disable react/prop-types */
import { Button } from './buttons'

export function Keypad({ onButtonClick, onClear }) {
	return (
		<table>
			<tbody>
				<tr>
					<td>
						<button onClick={() => onClear()}>CE</button>
					</td>
					<td>
						<button onClick={() => onClear()}>AC</button>
					</td>
					<td>
						<Button value={'%'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'/'} onButtonClick={onButtonClick} />
					</td>
				</tr>
				<tr>
					<td>
						<Button value={'7'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'8'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'9'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'x'} onButtonClick={onButtonClick} />
					</td>
				</tr>
				<tr>
					<td>
						<Button value={'4'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'5'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'6'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'-'} onButtonClick={onButtonClick} />
					</td>
				</tr>
				<tr>
					<td>
						<Button value={'1'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'2'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'3'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'+'} onButtonClick={onButtonClick} />
					</td>
				</tr>
				<tr>
					<td>
						<Button value={'0'} onButtonClick={onButtonClick} />
					</td>
					<td>
						<Button value={'.'} onButtonClick={onButtonClick} />
					</td>
					<td colSpan={2}>
						<Button value={'='} onButtonClick={onButtonClick} />
					</td>
				</tr>
			</tbody>
		</table>
	)
}
