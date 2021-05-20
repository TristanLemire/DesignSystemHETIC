import React, { useState, useEffect } from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { Input } from "../atoms/Input";
=======
import { LabelCheckbox } from "../molecules/LabelCheckbox";
import { LabelInput } from "../molecules/LabelInput";
>>>>>>> 42a194bc1dcb7f621439c58517587f136a5f2ae2
import { Button } from "../atoms/Button";
import { isEmailValid } from "../../utils/regex";
import {Text} from "../atoms/Text"
import {colors, fontType, space} from "../../styles/const"

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [isWrongEmail, setIsWrongEmail] = useState(false);
  const [isUserInvalid, setIsUserInvalid] = useState(false);

  const [userError, setUserError] = useState({});

  useEffect(() => {
    email && password ? setIsSubmitDisabled(false) : setIsSubmitDisabled(true);
  }, [email, password]);

  useEffect(() => {
    if (isWrongEmail)
      setUserError({ text: "Veuillez entrer une adresse mail valide." });
    else if (isUserInvalid) setUserError({ text: "Identifiants incorrects" });
    else setUserError({});
  }, [isUserInvalid, isWrongEmail]);

  const handleFormSubmit = (event) => {
    const emailValidity = isEmailValid(email);
    setIsWrongEmail(!emailValidity);

    if (!emailValidity) return;

    const existingUsers = JSON.parse(localStorage.getItem("users"));
    const matchingUser =
      existingUsers &&
      existingUsers.find(
        (user) => user.email === email && user.password === password
      );

    if (!matchingUser) {
      setIsUserInvalid(true);
      return;
    }
    login(matchingUser, existingUsers);
  };

  const login = (matchingUser, existingUsers) => {
    matchingUser.isLogged = true;
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // TODO: use parent callback to retreive user email (or take it from localstorage) + display modal
    console.log("connected to user:", email);
  };

  const updateEmail = (value) => {
    setEmail(value);
  };

  const updatePassword = (value) => {
    setPassword(value);
  };

  return (
    <LoginFormWrapper>
      <VerticalSpacing48>
      <Text tag="h2" type={fontType.title} color={colors.font.dark}>Se connecter</Text>
      </VerticalSpacing48>
      <form>
<<<<<<< HEAD
        <Input
          type="email"
          placeholder="Email, téléphone ou d'utilisateur"
          label="Email, téléphone ou d'utilisateur"
          callback={updateEmail}
          error={userError}
        />
        <Input
          type="password"
          placeholder="Mot de passe"
          label="Mot de passe"
          callback={updatePassword}
          error={{}}
        />
        <LabelCheckbox
          label="Rester connecté"
          name="stayConnected"
        />
=======
        <VerticalSpacing32>
          <LabelInput
            type="email"
            placeholder="email@example.com"
            callback={updateEmail}
            error={userError}
          />
        </VerticalSpacing32>
        <VerticalSpacing64>
          <LabelInput
            type="password"
            placeholder="Password"
            callback={updatePassword}
            error={{}}
          />
        </VerticalSpacing64>
        <LoginOption>
          <LabelCheckbox
            label="Rester connecté"
            name="stayConnected"
          />
          <span>Forgot password ?</span>
        </LoginOption>
>>>>>>> 8eeaff25b5980ef030227ffa9bec3b56bab19822
      </form>
      <VerticalSpacing64>
        <Button
          text="Sign in"
          isDisabled={isSubmitDisabled}
          handleClick={handleFormSubmit}
        />
      </VerticalSpacing64>
      <RegisterOption>
        <Text tap="span" type={fontType.regular} color={colors.font.grey}>Pas encore inscrit ? </Text>
        <span>Forgot password ?</span>
      </RegisterOption>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.div`
  padding: ${space.xxl};
  background-color: ${colors.background.white};
  max-width: 595px;
  min-width: 375px;
  width: 40%;
  box-shadow: 0px 0px 46px #c8c8c8, 0px 0px 13px #e7e7e7;
`;

const VerticalSpacing48 = styled.div`
  margin-bottom: ${space.xxl}
`;

const LoginOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${space.md}
`;

const RegisterOption = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const VerticalSpacing32 = styled.div`
  margin-bottom: ${space.lg}
`;

const VerticalSpacing64 = styled.div`
  margin-bottom: ${space.xxxl}
`;
