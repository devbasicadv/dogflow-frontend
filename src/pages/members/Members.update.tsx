import React, { useEffect, useState } from "react";
import { IMemberGetResponse, IMemberUpdateRequest } from "./members.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { memberUpdate } from "./members.validationschema";
import { Button } from "@mui/material";
import styles from "./members.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import LoadingTextField from "../../components/loadingTextField/LoadingTextField";
import { useLoading } from "../../hooks/useLoading";

const fakeData: IMemberGetResponse = {
  id: 1,
  name: "Antonio",
  surname: "Altieri",
  dogName: "Zoe",
  email: "altieriantonio99@gmail.com",
  phoneNumber: "3315832498",
};

const UpdateMembers: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Legge il parametro dalla URL

  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();
  const [getData, setGetData] = useState<IMemberGetResponse>();
  const [getIsLoading, setGetIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMemberUpdateRequest>({
    resolver: yupResolver(memberUpdate),
  });

  // Simula una GET al backend per ottenere i dati del membro
  useEffect(() => {
    if (id) {
      setGetIsLoading(true);

      //simula chiama al be
      setTimeout(() => {
        const data = fakeData;
        setGetData(data);
        reset({
          name: data.name,
          surname: data.surname,
          dogName: data.dogName,
        });
        setGetIsLoading(false);
      }, 1000);
    }
  }, [id, reset]);

  const onSubmit = (data: IMemberUpdateRequest) => {
    showLoading("Salvataggio in corso...");

    //simula chiama al be
    setTimeout(() => {
      console.log(data)
      hideLoading();
      navigate("/members");
    }, 1000);
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
            disabled={getIsLoading}
          >
            Annulla
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            endIcon={<SaveIcon />}
            className={styles.button}
            disabled={getIsLoading}
          >
            Salva
          </Button>
        </div>
        <div className={styles.main}>
          <h1>Modifica tesserato</h1>
          <LoadingTextField
            fullWidth
            variant="filled"
            label="Nome*"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            color="primary"
            margin="normal"
            loading={getIsLoading}
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
            loading={getIsLoading}
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
            loading={getIsLoading}
          />
          <LoadingTextField
            fullWidth
            variant="filled"
            label="Email*"
            disabled
            value={getData?.email}
            color="primary"
            margin="normal"
            loading={getIsLoading}
          />
          <LoadingTextField
            fullWidth
            variant="filled"
            label="Cellulare*"
            disabled
            value={getData?.phoneNumber}
            color="primary"
            margin="normal"
            loading={getIsLoading}
          />
        </div>
      </form>
    </>
  );
};

export default UpdateMembers;
