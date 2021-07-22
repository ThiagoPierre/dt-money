import { Container } from "./styles"

export const Summary = () => {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEC3xCi0hGBmg/company-logo_200_200/0/1625504442093?e=2159024400&v=beta&t=1HHeNZGsy7eqBdmuu6FtMWaKsuThPViIefYNV8t34eI" alt="" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEC3xCi0hGBmg/company-logo_200_200/0/1625504442093?e=2159024400&v=beta&t=1HHeNZGsy7eqBdmuu6FtMWaKsuThPViIefYNV8t34eI" alt="" />
                </header>
                <strong>- R$1000,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEC3xCi0hGBmg/company-logo_200_200/0/1625504442093?e=2159024400&v=beta&t=1HHeNZGsy7eqBdmuu6FtMWaKsuThPViIefYNV8t34eI" alt="" />
                </header>
                <strong>R$0</strong>
            </div>
        </Container>
    )
}