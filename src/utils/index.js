const currencyFormatter = require("currency-formatter");

export const toMoney = value =>
  currencyFormatter.format(value, {
    code: "CLP",
    locale: "es-CL",
    precision: 0
  });

const executeIfFunction = f => typeof f === "function" ? f() : f;

export const switchcase = cases =>
  defaultCase => key => key in cases ? cases[key] : defaultCase;

export const switchcaseF = cases =>
  defaultCase => key => executeIfFunction(switchcase(cases)(defaultCase)(key));

export const getLocaleDate = opt => {
  const options = {
    ...{
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    },
    ...opt
  };
  const date = new Date();
  return date.toLocaleString("es-ES", options);
};
