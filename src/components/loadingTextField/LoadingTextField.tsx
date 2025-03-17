import React from "react";
import { TextField, Skeleton, Box, TextFieldProps } from "@mui/material";

interface LoadingTextFieldProps extends Omit<TextFieldProps, "ref"> {
  loading?: boolean; // Prop per controllare il caricamento
}

const LoadingTextField = React.forwardRef<HTMLInputElement, LoadingTextFieldProps>(
  ({ loading = false, ...props }, ref) => {
    return (
      <Box sx={{ width: "100%" }}>
        {loading ? (
          <Skeleton variant="rectangular" height={56} sx={{ borderRadius: 1, marginTop: "16px", marginBottom: "8px" }} />
        ) : (
          <TextField {...props} inputRef={ref} fullWidth />
        )}
      </Box>
    );
  }
);

export default LoadingTextField;
