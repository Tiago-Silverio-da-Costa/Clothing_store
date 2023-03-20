import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import Card from "../assets/card.png"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0px;
    font-weight: 550;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;
// const Center = styled.div`
//     flex: 1;
//     padding: 20px;
//     ${mobile({display: "none"})};
// `;
const Title= styled.h3`
    margin-bottom: 30px;
`;

// const List = styled.ul`
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     display: flex;
//     flex-wrap: wrap;
// `;
// const ListItem = styled.li`
//     width: 50%;
//     margin-bottom: 10px;
//     font-weight: 550;
//     cursor: pointer;
// `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})};
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-weight: 550;
`;

const Payment = styled.img`
    width: 50%;

    
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MADE.</Logo>
            <Desc><p>A MADE é uma empresa de roupas que se destaca pela sua visão de moda autêntica e inovadora. Fundada com o propósito de levar moda de qualidade e estilo aos seus clientes, a MADE tem uma abordagem única ao design de roupas.</p>

            <p>A marca se concentra em oferecer roupas de alta qualidade, que combinam estilo, conforto e funcionalidade. A MADE é especializada em roupas casuais e contemporâneas, com uma abordagem moderna e descolada.</p>

            <p>A MADE é uma marca ética e sustentável, que se preocupa com a responsabilidade social e ambiental. A empresa trabalha com materiais de alta qualidade, provenientes de fontes sustentáveis, e com processos de produção que minimizam o impacto ambiental.</p></Desc>
            <SocialContainer>

                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon >

                <SocialIcon color="34405F">
                    <Instagram/>
                </SocialIcon> 

                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon> 

                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>  

            </SocialContainer>
        </Left>
        {/* <Center>

            <Title>Link</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Carrinho</ListItem>
                <ListItem>Moda Masculina</ListItem>
                <ListItem>Moda Feminina</ListItem>
                <ListItem>Acessórios</ListItem>
                <ListItem>Minha conta</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Lista de desejos</ListItem>
                <ListItem>Termos</ListItem>
            </List>
        </Center> */}
        <Right>
            <Title>Contato</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> Rua Boa Sorte, 403, Itajaí, SC</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> (47) 9 0000-0000 </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>contato@gmail.com</ContactItem>
            <Payment src={Card}/>
        </Right>
    </Container>
  )
}

export default Footer