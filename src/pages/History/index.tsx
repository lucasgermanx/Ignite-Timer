import { useContext } from "react"
import { CyclesContext } from "../../contexts/CyclesContext"
import { HistoryContainer, HistoryList, Status } from "./styles"
import { ptBR } from "date-fns/locale/pt-BR"
import { formatDistanceToNow } from "date-fns"

export function History() {
	const { cycles } = useContext(CyclesContext)

	return (
		<HistoryContainer>
			<h1>Meu histórico</h1>

			<HistoryList>
				<table>
					<thead>
						<tr>
							<th>Tarefa</th>
							<th>Duração</th>
							<th>Duração</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{cycles.map(cycle => {
							return (
								<tr key={cycle.id}>
									<td>{cycle.task}</td>
									<td>{cycle.minutesAmount} minutos</td>
									<td>
										{formatDistanceToNow(new Date(cycle.startDate), {
											addSuffix: true,
											locale: ptBR,
										})}
									</td>
									<td>
										{cycle.finishedDate && (
											<Status statsColor="green">Concluído</Status>
										)}
										{cycle.interruptedDate && (
											<Status statsColor="red">Interrompido</Status>
										)}
										{!cycle.finishedDate && !cycle.interruptedDate && (
											<Status statsColor="yellow">Em andamento</Status>
										)}
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</HistoryList>
		</HistoryContainer>
	)
}
