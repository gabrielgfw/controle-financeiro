import { Space } from "antd";
import './style.css';
import useDisplayValores from "./useDisplayValores";
import { CardValor } from "./card-valor";


export default function DisplayValores() {
  const {
    entradaProps,
    investimentoProps,
    saidaProps
  } = useDisplayValores();


  return (
    <>
      <Space align="start">
        <CardValor {...entradaProps} />
        <CardValor {...saidaProps} />
        <CardValor {...investimentoProps} />
      </Space>
    </>
  );
}