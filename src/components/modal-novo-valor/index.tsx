import './style.css';
import useModalNovoValor, { ModalNovoValorProps } from './useModalNovoValor';
import { Button, Form, Input, Modal } from 'antd';
export default function ModalNovoValor(props: ModalNovoValorProps) {

  const {
    abrirModal,
    fecharModal,
    validarInputMonetario,
    valorInputMonetario,
    isModalAberto,
    formNovoValor,
    novoValor
  } = useModalNovoValor(props);


  return (
    <>
      <Button
        className="add-button"
        type="primary"
        onClick={abrirModal}>
        +
      </Button>
      <Modal
        title="Cadastrar novo valor"
        open={isModalAberto}
        onOk={novoValor}
        onCancel={fecharModal}
      >
        <Form
          form={formNovoValor}
          name="basic"
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Valor"
            name="valor"
            rules={[
              {
                required: true,
                message: 'Informe um valor',
              },
            ]}
          >
            <Input
              value={valorInputMonetario}
              style={{ width: '100%' }}
              onChange={validarInputMonetario}
            />
          </Form.Item>

          <Form.Item
            label="Descrição"
            name="descricao"
            rules={[
              {
                required: true,
                message: 'Informe uma descrição',
              },
            ]}
          >
            <Input value={valorInputMonetario} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
