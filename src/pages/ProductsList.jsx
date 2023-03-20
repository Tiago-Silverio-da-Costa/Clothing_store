import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"
import { NavLink  } from 'react-router-dom';

const Container = styled.div`

`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})};
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({margin: "0px "})};
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    font-weight: 550;
    ${mobile({margin: "10px"})};
`;
const Option = styled.option`
    font-weight: 550;
`;

const ProductsList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>VESTIDOS</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrar produtos</FilterText>
                <Select>
                    <Option disabled selected>
                        Cor
                    </Option>
                    <Option>Branco</Option>
                    <Option>Preto</Option>
                    <Option>Vermelho</Option>
                    <Option>Azul</Option>
                    <Option>Amarelo</Option>
                    <Option>Verde</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Tamanho
                    </Option>
                    <Option>PP</Option>
                    <Option>P</Option>
                    <Option>M</Option>
                    <Option>G</Option>
                    <Option>GG</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Classificar produtos</FilterText>
                <Select>
                    <Option selected> Novo</Option>
                    <Option>Preço (asc)</Option>
                    <Option>Preço (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <StyledNavLink to="/product"><Products/></StyledNavLink>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductsList