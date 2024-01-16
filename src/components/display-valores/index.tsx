import { Space } from "antd";
import './style.css';
import useDisplayValores from "./useDisplayValores";
import CardCabecalho from "./card-cabecalho";
import CardDetalhado from "./card-detalhado";


export default function DisplayValores() {
  const {
    entradaProps
  } = useDisplayValores();


  return (
    <>
      {/* ENTRADAS */}
      <Space className="card-wrapper">
        <CardCabecalho {...entradaProps.cabecalhoProps} />
        <CardDetalhado {...entradaProps.detalhesProps} />
      </Space>
    </>
  );
}