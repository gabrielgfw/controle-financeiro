import { ETipoValorEnum, retornarCoresCard } from "../../../../shared/enum/ETipoValorEnum";
import { ValorModel } from "../../../../shared/models/ValorModel";
import { Col, Row } from "antd";
import { formatarMoeda } from "../../../../shared/utils";

export interface CardDetalhadoProps {
  tipoCard: ETipoValorEnum,
  valores: ValorModel[]
}


export default function CardDetalhado(props: CardDetalhadoProps) {
  const {
    tipoCard,
    valores
  } = props;

  const { corPrincipal, corSecundaria } = retornarCoresCard(tipoCard);

  return (
    <div
      className="shadow card-body"
      style={{ backgroundColor: corPrincipal }}
    >

      {valores?.length > 0 ?
        valores.map(v => {
          return <>
            <Row
              className="shadow body-row"
              style={{ backgroundColor: corSecundaria }}
            >
              <Col span={10}>
                {formatarMoeda(v.valor)}
              </Col>
              <Col className="body-row-text" span={14}>
                {v.descricao}
              </Col>
            </Row>
          </>
        }) :

        <Row
          className="shadow body-row"
          style={{ backgroundColor: corSecundaria }}
        >
          <Col className="body-row-vazio" span={24}>
            Nenhum valor adicionado
          </Col>
        </Row>}
    </div>
  );
}