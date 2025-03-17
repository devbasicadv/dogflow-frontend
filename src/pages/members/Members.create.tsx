import React from "react";
import { IMemberCreateRequest } from "./members.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { memberCreate } from "./members.validationschema";
import { Button } from "@mui/material";
import styles from "./members.module.scss";
import { useNavigate } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import LoadingTextField from "../../components/loadingTextField/LoadingTextField";
import { useLoading } from "../../hooks/useLoading";

const CreateMembers: React.FC = () => {
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMemberCreateRequest>({
    resolver: yupResolver(memberCreate),
  });

  const onSubmit = (data: IMemberCreateRequest) => {
    showLoading("Salvataggio in corso...");

    //simula chiama al be
    setTimeout(() => {
        console.log(data)
        hideLoading();
    }, 1000)
  };

  const handleCancel = () => {
    navigate("/members");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.createMembers}>
        <div className={styles.header}>
          <Button
            variant="contained"
            color="error"
            onClick={handleCancel}
            endIcon={<CloseIcon />}
            className={styles.button}
          >
            Annulla
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            endIcon={<SaveIcon />}
            className={styles.button}
          >
            Salva
          </Button>
        </div>
        <div className={styles.main}>
          <h1>Nuovo tesserato</h1>
          <LoadingTextField
            fullWidth
            variant="filled"
            label="Nome*"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            color="primary"
            margin="normal"
          />
          <LoadingTextField
            fullWidth
            variant="filled"
            label="Cognome*"
            {...register("surname")}
            error={!!errors.surname}
            helperText={errors.surname?.message}
            color="primary"
            margin="normal"
          />
          <LoadingTextField
            fullWidth
            variant="filled"
            label="Cane*"
            {...register("dogName")}
            error={!!errors.dogName}
            helperText={errors.dogName?.message}
            color="primary"
            margin="normal"
          />
          <LoadingTextField
            fullWidth
            variant="filled"
            label="Email*"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            color="primary"
            margin="normal"
          />
          <LoadingTextField
            fullWidth
            variant="filled"
            label="Cellulare*"
            {...register("phoneNumber")}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            color="primary"
            margin="normal"
          />
        </div>
      </form>
    </>
  );
};

export default CreateMembers;
