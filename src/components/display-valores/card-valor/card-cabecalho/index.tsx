import { Col, Row } from "antd";
import { ETipoValorEnum, retornarCoresCard, retornarTituloCard } from "../../../../shared/enum/ETipoValorEnum";
import { formatarMoeda } from "../../../../shared/utils";
import './style.css';
import ModalNovoValor from "../../../modal-novo-valor";
import { ValorModel } from "../../../../shared/models/ValorModel";

export interface CardCabecalhoProps {
  tipoCard: ETipoValorEnum;
  valorTotal: number;
  inserirNovoValor: (novoValor: ValorModel) => void;
}

export default function CardCabecalho(props: CardCabecalhoProps) {
  const {
    tipoCard,
    valorTotal,
    inserirNovoValor
  } = props;

  const { corPrincipal, corSecundaria } = retornarCoresCard(tipoCard);

  return (
    <div
      className="shadow card-header"
      style={{ backgroundColor: corPrincipal }}
    >
      <Row>
        <Col span={24}>
          <span className="header-title">
            {retornarTituloCard(tipoCard)}
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <ModalNovoValor
            inserirNovoValor={inserirNovoValor}
            tipoValor={tipoCard}
          />
        </Col>
        <Col>
          <span
            className="shadow card-total-value"
            style={{ backgroundColor: corSecundaria }}
          >
            {formatarMoeda(valorTotal)}
          </span>
        </Col>
      </Row>
    </div>
  )
}