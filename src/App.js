import { Box, Stack } from "@mui/joy";
import { Controller, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Button, Typography } from "@mui/joy";

import TextArea from "./components/TextArea/TextArea";
import TextAreaPassword from "./components/TextAreaPassword/TextAreaPassword";

import { schema } from "./schema";

function App() {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: joiResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(#F4F9FF, #E0EDFB)",
      }}
    >
      <Box marginTop={20} textAlign="center" padding={2}>
        <Typography level="h3" sx={{ mb: 4, color: "#4A4E71" }}>
          Sign up
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: 315, margin: "0 auto" }}
        >
          <Stack spacing={2} alignItems={"center"}>
            <Controller
              name="email"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
                formState: { isSubmitted },
              }) => (
                <TextArea
                  isSubmitted={isSubmitted}
                  placeholder="Create your email"
                  type="email"
                  onChange={onChange}
                  value={value}
                  error={error}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({
                field: { onChange, value, name },
                fieldState: { error },
                formState: { isSubmitted },
              }) => (
                <TextAreaPassword
                  isSubmitted={isSubmitted}
                  placeholder="Create your password"
                  type="password"
                  onChange={onChange}
                  value={value}
                  error={error}
                />
              )}
            />
            <Button
              type="submit"
              variant="solid"
              color="primary"
              fullWidth
              sx={{
                borderRadius: 30,
                maxWidth: 240,
                background: "linear-gradient(#70C3FF, #4B65FF)",
              }}
            >
              Sign up
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

export default App;
