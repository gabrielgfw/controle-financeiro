import { Space } from "antd";
import './style.scss';
import useDisplayValores from "./useDisplayValores";
import { CardValor } from "./card-valor";

export default function DisplayValores() {
  const {
    entradaProps,
    investimentoProps,
    saidaProps
  } = useDisplayValores();

  return (
    <Space className="display-container">
      <CardValor {...entradaProps} />
      <CardValor {...saidaProps} />
      <CardValor {...investimentoProps} />
    </Space>
  );
}