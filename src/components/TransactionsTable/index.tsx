import { Container } from "./styles"

export const TransactionsTable = () => {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">12,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/09/1990</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="withdraw">-12,00</td>
                        <td>Desenvolvimento</td>
                        <td>12/09/1990</td>
                    </tr>
                </tbody>
            </table>


        </Container>
    )
}