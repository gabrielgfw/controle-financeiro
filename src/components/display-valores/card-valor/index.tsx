import { Space } from "antd";
import CardCabecalho, { CardCabecalhoProps } from "./card-cabecalho";
import CardDetalhado, { CardDetalhadoProps } from "./card-detalhado";
import "./style.css";

export interface CardValorProps {
  cabecalhoProps: CardCabecalhoProps;
  detalhesProps: CardDetalhadoProps;
}

export function CardValor(props: CardValorProps) {
  const { cabecalhoProps, detalhesProps } = props;

  return (
    <Space className="card-wrapper">
      <CardCabecalho {...cabecalhoProps} />
      <CardDetalhado {...detalhesProps} />
    </Space>
  )
}