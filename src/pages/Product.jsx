import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import M6 from "../assets/m6.jpg"
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive"
import { NavLink  } from 'react-router-dom';


const Container = styled.div`

`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: "column", padding: "10px"})};
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 75%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})};
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})};
`;
const Title = styled.h1`
    font-weight: 600;
`;
const Desc = styled.p`
    margin: 20px 0px;
    font-weight: 550;
`;
const Price = styled.span`
    font-weight: 550;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})};
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 510;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    font-weight: 550;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-content: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: #fff;
    cursor: pointer;
    font-weight: 550;

    &:hover {
        background-color: #f8f4f4;
    }
`;


const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src={M6}/>
            </ImgContainer>
            <InfoContainer>
                <Title>VESTIDO WINE</Title>
                <Desc><p>Este vestido curto até a coxa é elegante e possui uma bela cor vermelho vinho. Ele é feito de um tecido suave e fluído que se 
                    adapta ao corpo, proporcionando um ajuste confortável. O decote em V na parte da frente adiciona um toque de feminilidade e elegância
                     ao vestido, enquanto as alças finas conferem um visual mais delicado. A saia tem um leve balanço, proporcionando movimento e fluidez.
                      O vestido é ideal para ocasiões especiais, como festas e eventos, onde você deseja se destacar e chamar a atenção. Combinado com os
                       acessórios certos, este vestido é perfeito para criar um visual elegante e sofisticado.</p></Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="#4f071b"/>
                    </Filter>

                    <Filter>
                        <FilterSize>
                            <FilterTitle>Tamanho</FilterTitle>
                            <FilterSizeOption>PP</FilterSizeOption>
                            <FilterSizeOption>P</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>G</FilterSizeOption>
                            <FilterSizeOption>GG</FilterSizeOption>
                        </FilterSize>
                       
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{cursor: "pointer"}}/>
                        <Amount>1</Amount>
                        <Add style={{cursor: "pointer"}}/>
                    </AmountContainer>
                    <StyledNavLink to="/cart"><Button>COMPRAR</Button></StyledNavLink>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product