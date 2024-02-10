import { Col, Row } from "antd";
import { ETipoValorEnum, retornarCoresCard, retornarTituloCard } from "../../../../shared/enum/ETipoValorEnum";
import { formatarMoeda } from "../../../../shared/utils";
import { PlusOutlined } from "@ant-design/icons";
import './style.css';

export interface CardCabecalhoProps {
  tipoCard: ETipoValorEnum;
  valorTotal: number;
  novoValor: () => void;
}

export default function CardCabecalho(props: CardCabecalhoProps) {
  const {
    tipoCard,
    valorTotal,
    novoValor
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
          <button
            className="shadow add-button"
            onClick={novoValor}
            style={{ backgroundColor: corSecundaria }}
          >
            <PlusOutlined />
          </button>
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