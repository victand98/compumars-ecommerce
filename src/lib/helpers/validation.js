import * as yup from "yup";

/* eslint-disable no-template-curly-in-string */
yup.setLocale({
  mixed: {
    required: "El campo es requerido.",
    notType: "El valor no es válido.",
  },
  string: {
    min: "Escriba al menos ${min} caracter(es).",
    max: "Escriba no más de ${max} caracter(es).",
    email: "El correo ingresado no es válido.",
  },
  number: {
    min: "El valor ingresado debe ser mayor o igual a ${min}.",
    max: "El valor ingresado debe ser menor o igual a ${max}.",
    integer: "El valor ingresado debe ser un número entero.",
  },
  date: {
    min: "La fecha indicada ya ha pasado.",
    max: "El valor indicado no puede exceder la fecha ${max}.",
  },
  array: {
    min: "El campo debe tener al menos ${min} elemento(s).",
  },
});

export default yup;
