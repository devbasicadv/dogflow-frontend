import { Backdrop, CircularProgress } from "@mui/material";
import { useLoading } from "../../hooks/useLoading";

const LoadingBackdrop: React.FC = () => {
  const { isLoading, message } = useLoading();

  return (
    <Backdrop
      sx={(theme) => ({
        color: "#fff",
        zIndex: theme.zIndex.drawer + 1,
        display: "flex",
        flexDirection: "column",
      })}
      open={isLoading}
    >
      <CircularProgress color="primary" />
      {message && <span style={{ marginTop: "20px" }}>{message}</span>}
    </Backdrop>
  );
};

export default LoadingBackdrop;
