import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Typography } from "@mui/joy";

import TextArea from "../TextArea/TextArea";
import { VALIDATION_RULES, schema } from "../../schema";

const HelperText = ({ value, isSubmitted }) => {
  const { error } = schema
    .extract("password")
    .validate(value, { abortEarly: false });

  const errorMessages = error?.details.map((detail) => detail.message) || [];

  return (
    <Box textAlign={"left"} padding={1}>
      {Object.entries(VALIDATION_RULES.password.messagesUI).map(
        ([key, rule]) => (
          <Typography
            key={key}
            level="body-xs"
            fontWeight="normal"
            color={
              (errorMessages.includes(rule) || !value) && isSubmitted
                ? "danger"
                : !errorMessages.includes(rule) && !!value
                ? "success"
                : "neutral"
            }
          >
            {rule}
          </Typography>
        )
      )}
    </Box>
  );
};

const TextAreaPassword = ({
  error,
  placeholder,
  onChange,
  isSubmitted,
  value,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState);

  const passwordType = isPasswordVisible ? "text" : "password";

  return (
    <TextArea
      error={error}
      placeholder={placeholder}
      onChange={onChange}
      isSubmitted={isSubmitted}
      value={value}
      type={passwordType}
      helperText={<HelperText value={value} isSubmitted={isSubmitted} />}
      endDecorator={
        <IconButton
          aria-label={
            isPasswordVisible ? "hide the password" : "display the password"
          }
          onClick={togglePasswordVisibility}
          edge="end"
        >
          {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      }
    />
  );
};

export default TextAreaPassword;
