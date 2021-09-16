import { Container, Content } from "./styles"
import Logo from '../../assets/logo.svg' 

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="dtmoney"></img>
                <button onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>

            </Content>
        </Container>
    )
}

