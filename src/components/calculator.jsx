import { Button } from './buttons'
import { InputField } from './inputField'

export function Calculator() {
	return (
		<div>
			<InputField />
			<table>
				<tbody>
					<tr>
						<td>
							<Button value={'AC'} />
						</td>
						<td>
							<Button value={'CE'} />
						</td>
						<td>
							<Button />
						</td>
						<td>
							<Button value={'/'} />
						</td>
					</tr>
					<tr>
						<td>
							<Button value={'7'} />
						</td>
						<td>
							<Button value={'8'} />
						</td>
						<td>
							<Button value={'9'} />
						</td>
						<td>
							<Button value={'x'} />
						</td>
					</tr>
					<tr>
						<td>
							<Button value={'4'} />
						</td>
						<td>
							<Button value={'5'} />
						</td>
						<td>
							<Button value={'6'} />
						</td>
						<td>
							<Button value={'-'} />
						</td>
					</tr>
					<tr>
						<td>
							<Button value={'1'} />
						</td>
						<td>
							<Button value={'2'} />
						</td>
						<td>
							<Button value={'3'} />
						</td>
						<td>
							<Button value={'+'} />
						</td>
					</tr>
					<tr>
						<td>
							<Button value={'0'} />
						</td>
						<td>
							<Button value={'.'} />
						</td>
						<td colSpan={2}>
							<Button value={'='} />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
