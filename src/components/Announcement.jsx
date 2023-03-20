import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 550;
`

const Announcement = () => {
  return (
    <Container>
        Promoção! Frete grátis para pedidos acima de R$ 50
    </Container>
  )
}

export default Announcement