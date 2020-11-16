import React, { useState } from "react";
import blackRight from "../assets/blackRight.png";
import Naira from "../assets/Naira Sign.png";
import flower from "../assets/flower.png";
import smallArrow from "../assets/smallRightArrow.png";
import { ScrollView, View, FlatList, Button } from "react-native";
import styled from "styled-components/native";

export default function Home() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "White Rice • NGN 35,000",
      img: flower,
      foods: "Fried Rice, Plantain, Coca Cola",
      rigth: blackRight,
    },
    {
      id: 2,
      text: "White Rice • NGN 35,000",
      img: flower,
      foods: "Fried Rice, Plantain, Coca Cola",
      rigth: blackRight,
    },
    {
      id: 3,
      text: "White Rice • NGN 35,000",
      img: flower,
      foods: "Fried Rice, Plantain, Coca Cola",
      rigth: blackRight,
    },
  ]);
  return (
    <View>
      <Container>
        <Header>
          <CenteredDiv h="2.5rem" w="100%">
            <Title fw="bold" fs="18px" lineHeight="22px" Color="#ffffff">
              Overview
            </Title>
          </CenteredDiv>
          <Div h="5rem" w="100%">
            <Spacearound>
              <CenteredDiv>
                <Btn
                  style={{ boxShadow: "0px 5px 5px rgba(7, 7, 7, 0.03)" }}
                  h="2rem"
                  w="7.2rem"
                  bg="#5030C0"
                  br="11.1034px"
                  Color="#ffffff"
                  lineHeight="34px"
                  fs="12px"
                  fw="bold"
                >
                  Current Balance
                </Btn>
              </CenteredDiv>
              <CenteredDiv>
                <Div>
                  <P
                    fw="300"
                    fs="28px"
                    lineHeight="34px"
                    fw="bold"
                    Color="#ffffff"
                  >
                    <Img
                      mb="0"
                      h="15px"
                      w="14px"
                      url={Naira}
                      style={{ marginBottom: "7px", marginRight: "4px" }}
                    />
                    234,000
                    <P
                      fw="500"
                      fs="12px"
                      lineHeight="16px"
                      Color="#ffffff"
                      opacity="0.7"
                    >
                      .00
                    </P>
                  </P>
                </Div>
              </CenteredDiv>
            </Spacearound>
          </Div>
          <Div h="2.5rem" w="100%">
            <CenteredDiv>
              <Btn
                style={{
                  boxShadow: "0px 5px 5px rgba(7, 7, 7, 0.03)",
                }}
                fw="0"
                h="1.8rem"
                w="6rem"
                bg="#613FD7"
                br="21px"
              >
                <CenteredDiv h="100%">
                  <Spacebetween
                    style={{
                      height: "100%",
                      width: "100%",
                      paddingLeft: "9px",
                      paddingRight: "7px",
                    }}
                  >
                    <P fs="12px" lineHeight="16px" Color="#ffffff" fw="500">
                      View Sales
                    </P>
                    <Img
                      style={{ marginTop: "0.1rem" }}
                      mb="0"
                      h="10px"
                      w="10px"
                      url={smallArrow}
                    />
                  </Spacebetween>
                </CenteredDiv>
              </Btn>
            </CenteredDiv>
          </Div>
        </Header>
        <Wrapper>
          <Spacebetween>
            <P lineHeight="17px" Color="#130F49" fs="14px" fw="600">
              Pending Orders
            </P>
            <P Color="#5935D5" lineHeight="17px" fs="14px" fw="500">
              View All
            </P>
          </Spacebetween>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <Div
                mt="10px"
                h="4rem"
                w="100%"
                key={item.id}
                style={{ marginBottom: "1px solid gray" }}
              >
                <Spacebetween>
                  <Spacebetween w="15rem">
                    <Img
                      mb="0"
                      backgroundSize="cover"
                      br="0.2rem"
                      h="2rem"
                      w="46px"
                      url={item.img}
                      style={{ backgroundSize: "cover" }}
                    />
                    <Spacearound style={{ alignItems: "flex-start" }}>
                      <P ta="left" fw="bold">
                        {item.text}
                      </P>
                      <P fw="300">{item.foods}</P>
                    </Spacearound>
                  </Spacebetween>
                  <Img mb="0" w="6px" h="12px" url={blackRight} />
                </Spacebetween>
              </Div>
            )}
          />
        </Wrapper>
      </Container>
    </View>
  );
}

const Img = styled.View`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  width: ${(props) => props.w};
  border-radius: ${(props) => props.br};
  height: ${(props) => props.h};
  margin-bottom: ${(props) => props.mb};
`;

// Buttons
const Btn = styled.TouchableOpacity`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.br};
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  color: ${(props) => props.Color};
  background-size: ${(props) => props.backgroundSize};
  line-height: ${(props) => props.lineHeight};
`;

const Container = styled.View`
  background-color: #fff;
  height: 100vh;
`;
const Wrapper = styled.View`
  padding: 1rem;
`;

const Header = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 11.5rem;
  width: 100%;
  background: #5935d5;
`;

const Div = styled.View`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  margin-top: ${(props) => props.mt};
  text-align: center;
`;

const Title = styled.Text`
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  text-align: ${(props) => props.ta};
  color: ${(props) => props.Color};
  line-height: ${(props) => props.lineHeight};
`;

const P = styled(Title)`
  opacity: ${(props) => props.opacity || ""};
  margin-bottom: ${(props) => props.mb};
`;

const CenteredDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Spacebetween = styled(Div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Spacearound = styled(Div)`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const SpacedButton = styled(Spacearound)`
flex-direction: row;
  justifyContent: "space-around",
  width: 100%;
  background: red;
  height: 100%;
  padding-left: "7px",
  padding-right: "7px",
`;
