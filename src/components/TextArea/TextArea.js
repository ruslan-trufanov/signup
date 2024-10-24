import { FormControl, FormHelperText, Input } from "@mui/joy";

const TextArea = ({
  helperText,
  error,
  isSubmitted,
  placeholder,
  onChange,
  value = "",
  type = "text",
  startDecorator = null,
  endDecorator = null,
}) => {
  const isError = error || !value;

  const color = isSubmitted
    ? isError
      ? "danger"
      : "success"
    : isError
    ? ""
    : "success";

  const variant = isSubmitted
    ? isError
      ? "outlined"
      : "plain"
    : isError
    ? "plain"
    : "outlined";

  return (
    <FormControl
      error={isSubmitted && !!error}
      sx={{
        width: "100%",
      }}
    >
      <Input
        onChange={onChange}
        placeholder={placeholder}
        variant={variant}
        color={color}
        value={value}
        type={type}
        error={isSubmitted && !!error}
        startDecorator={startDecorator}
        endDecorator={endDecorator}
        fullWidth
        size="lg"
        sx={{
          fontSize: 14,
        }}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default TextArea;
