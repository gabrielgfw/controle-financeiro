import { useState } from "react";
import { ETipoValorEnum } from "../../shared/enum/ETipoValorEnum";
import { Form } from "antd";
import { converterMonetarioParaNumber, converterValorParaMonetario } from "../../shared/utils";
import { ValorModel } from "../../shared/models/ValorModel";

export interface ModalNovoValorProps {
  inserirNovoValor: (novoValor: ValorModel) => void;
  tipoValor: ETipoValorEnum;
}

export default function useModalNovoValor(props: ModalNovoValorProps) {
  const { inserirNovoValor, tipoValor } = props;
  const [formNovoValor] = Form.useForm();
  const [isModalAberto, setIsModalAberto] = useState<boolean>(false);
  const [valorInputMonetario, setValorInputMonetario] = useState<string>('');

  const abrirModal = () => {
    setIsModalAberto(true);
  }

  const fecharModal = () => {
    setIsModalAberto(false);
  }

  const resetarForm = () => {
    formNovoValor.resetFields();
  }

  const validarInputMonetario = (event) => {
    const inputValue = event.target.value;
    const formattedValue = converterValorParaMonetario(inputValue);
    setValorInputMonetario(formattedValue);
    formNovoValor.setFieldValue('valor', formattedValue);
  };

  const novoValor = () => {
    const formValues = formNovoValor.getFieldsValue();
    console.log(formValues);
    const valor = converterMonetarioParaNumber(formValues.valor);
    inserirNovoValor({ ...formValues, tipoValor, valor });
    resetarForm();
    fecharModal();
  }


  return {
    abrirModal,
    fecharModal,
    validarInputMonetario,
    valorInputMonetario,
    isModalAberto,
    formNovoValor,
    novoValor
  }
}