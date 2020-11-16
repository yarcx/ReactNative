import React from "react";
import logo from "../assets/Vector.png";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";

export default function Login({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <Wrapper>
          <Logo url={logo} />
          <Title fs="40px" lineHeight="48px" Color="#130F49" fw="bold">
            Login.{" "}
          </Title>
          <P fs="14px" opacity="0.5" lineHeight="18px" Color="#130F49" fw="500">
            Manage your food the best way.{" "}
          </P>
          <FormWrapper>
            <FormControl>
              <P fs="11px" fw="500" lineHeight="16px" Color="#130F49">
                Email Address
              </P>

              <InputDiv>
                <Input
                  style={{ outline: "none" }}
                  underlineColorAndroid={"transparent"}
                  placeholder="ofada@buyfood.ng"
                />
              </InputDiv>
            </FormControl>
            <FormControl>
              <P fs="11px" fw="500" lineHeight="16px" Color="#130F49">
                Password
              </P>

              <InputDiv>
                <Input
                  secureTextEntry
                  style={{ outline: "none" }}
                  underlineColorAndroid={"red"}
                  placeholderTextColor="#9a73ef"
                  placeholder="......."
                />
              </InputDiv>
            </FormControl>
            <P fs="12px" fw="500" lineHeight="16px" Color="#5935D5">
              Forgot Password
            </P>
            <ButtonWrapper>
              <Button
                text="press me"
                onPress={() => navigation.navigate("Home")}
              >
                <P
                  Color="#130F49"
                  fs="16px"
                  lineHeight="21px"
                  Color="#130F49"
                  fw="500"
                >
                  Press Me
                </P>
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        </Wrapper>
      </ScrollView>
      <Wrapper>
        <CenterP fs="12px" fw="500" lineHeight="16px" Color="#00000">
          New Vendor?{" "}
          <P fs="12px" fw="500" lineHeight="16px" Color="#5935D5">
            Request an account
          </P>
        </CenterP>
      </Wrapper>
    </Container>
  );
}

const InputDiv = styled.View`
  height: 3rem;
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 0.3rem;
`;

const Input = styled.TextInput.attrs((props) => ({
  type: props.type,
  placeholder: props.placeholder,
  placeholderTextColor: "#130F49",
}))`
  width: 90%;
  height: 98%;
  background-color: transparent;
  padding: 0.3rem 0.5rem;
  font-size: 16px;
  :placeholder {
    color: red;
    font-size: 20px;
  }
`;

const ButtonWrapper = styled.View`
  margin-top: 1.5rem;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Button = styled.TouchableOpacity`
  background: #ffc44a;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 3.2rem;
`;

const FormControl = styled.View`
  height: 5.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const FormWrapper = styled.View`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 16rem;
  width: 100%;
`;

const Container = styled.View`
  background-color: #fff;
  height: 100vh;
`;
const Wrapper = styled.View`
  padding: 1rem;
`;

const Title = styled.Text`
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  color: ${(props) => props.Color};
  line-height: ${(props) => props.lineHeight};
`;

const P = styled(Title)`
  opacity: ${(props) => props.opacity || ""};
`;

const CenterP = styled(P)`
  text-align: center;
`;

const Logo = styled.View`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 2rem;
  margin-bottom: 21px;
`;
const Image = styled.Image`
  width: 1.6rem;
  height: 1.6rem;
  margin-bottom: 21px;
`;
