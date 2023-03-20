import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from "../responsive"
import { NavLink  } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})};

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})};
`; 

const Left = styled.div`
  flex: 0.1;
  display: flex;
  align-items: center; 
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({width: "20px"})};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})};
`;


const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})};
`

const Right = styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2, justifyContent: "center"})};
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Language>PT-BR</Language></Left>
            <SearchContainer> 
              <Input placeholder='Pesquisar'/>
              <Search style={{color: "gray", fontSize: 16}}/>
            </SearchContainer>
            <Center><StyledNavLink to="/"><Logo>MADE.</Logo></StyledNavLink></Center>
            <Right>
              <StyledNavLink  to="/register"><MenuItem>REGISTRE-SE</MenuItem></StyledNavLink >
              <StyledNavLink  to="/log"><MenuItem>ENTRAR</MenuItem></StyledNavLink >
              <MenuItem>
              <Badge badgeContent={4} color="primary">
                <StyledNavLink  to="/cart"><ShoppingCartOutlined /></StyledNavLink >
              </Badge>
              </MenuItem>
              
            </Right>
        </Wrapper>
    </Container>
  );
};

export default Navbar