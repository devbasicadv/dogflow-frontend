import React from "react";
import styles from "./members.module.scss";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  Tooltip,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PetsIcon from "@mui/icons-material/Pets";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import DotsButton from "../../components/dotsButton/DotsButton";

const data = [
  {
    id: 1,
    nome: "Antonio",
    cognome: "Altieri",
    cane: "Zoe",
    email: "antonioaltieri@example.com",
    cellulare: "3315832498",
  },
  {
    id: 2,
    nome: "Ornella",
    cognome: "Forte",
    cane: "Akira",
    email: "antonioaltieri@example.com",
    cellulare: "3315832498",
  },
];

const Members: React.FC = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate(`/members/new`);
  };

  const handleUpdate = (id: number) => {
    navigate(`/members/${id}`);
  };

  const handleDelete = (id: number) => {
    navigate(`/members/${id}`);
  };

  return (
    <div className={styles.members}>
      <h1>Gestisci i tuoi tesserati</h1>

      <Grid container spacing={2} className={styles.cardTable}>
        {data.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className={styles.container}
          >
            <Card>
              <CardContent className={styles.container}>
                <div className={styles.actions}>
                  <Tooltip title={`${item.nome} ${item.cognome}`} arrow>
                    <Box
                      className={styles.text}
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <Typography className={styles.header} variant="body1">
                        {item.nome} {item.cognome}
                      </Typography>
                    </Box>
                  </Tooltip>
                  <DotsButton
                    items={[
                      {
                        text: "Modifica",
                        action: () => handleUpdate(item.id),
                      },
                      {
                        text: "Elimina",
                        action: () => handleDelete(item.id),
                        error: true,
                      },
                    ]}
                  />
                </div>
                <Tooltip title={item.cane} arrow>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PetsIcon className={styles.icon} />
                    <Typography variant="body1">{item.cane}</Typography>
                  </Box>
                </Tooltip>
                <Divider className={styles.divider} />
                <Tooltip title={item.email} arrow>
                  <Box display="flex" alignItems="center" gap={1}>
                    <EmailIcon className={styles.icon} />
                    <Typography variant="body1">{item.email}</Typography>
                  </Box>
                </Tooltip>
                <Divider className={styles.divider} />
                <Tooltip title={item.cellulare} arrow>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PhoneIcon className={styles.icon} />
                    <Typography variant="body1">{item.cellulare}</Typography>
                  </Box>
                </Tooltip>
                <Divider className={styles.dividerLast} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div className={styles.footer} />

      <Tooltip title="Aggiungi tesserato" arrow>
        <IconButton className={styles.createButton} onClick={handleCreate}>
          <AddCircleIcon className={styles.icon} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Members;
