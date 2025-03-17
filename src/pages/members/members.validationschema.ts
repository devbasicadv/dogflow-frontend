import * as yup from "yup";

export const memberCreate = yup.object({
  name: yup.string().required("Il nome è obbligatorio"),
  surname: yup.string().required("Il cognome è obbligatorio"),
  dogName: yup.string().required("Il nome del cane è obbligatorio"),
  email: yup
    .string()
    .email("Email non valida")
    .required("L'email è obbligatoria"),
  phoneNumber: yup
    .string()
    .matches(/^\+?[1-9]\d{9,14}$/, "Numero di telefono non valido")
    .required("Il numero di telefono è obbligatorio"),
});

export const memberUpdate = yup.object({
  name: yup.string().required("Il nome è obbligatorio"),
  surname: yup.string().required("Il cognome è obbligatorio"),
  dogName: yup.string().required("Il nome del cane è obbligatorio")
});
