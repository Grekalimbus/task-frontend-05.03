import React, { Component } from "react";

// Определяем типы
interface Param {
  id: number;
  name: string;
  type: "string"; // Заменяем тип string на "string"
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  // Добавляем интерфейс для цветов, чтобы компонент был расширяемым
  colors: Color[];
}

interface Color {
  id: number;
  name: string;
}

interface Props {
  params: Param[];
  model: Model;
  onUpdateParamValue: (paramId: number, value: string) => void;
}

class ParamEditor extends Component<Props> {
  // Вспомогательная функция для обновления значения параметра
  handleParamValueChange = (
    paramId: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { onUpdateParamValue } = this.props;
    onUpdateParamValue(paramId, event.target.value);
  };

  // Функция для получения текущего значения параметра
  getParamValue = (paramId: number) => {
    const { model } = this.props;
    const paramValue = model.paramValues.find(
      (param) => param.paramId === paramId
    );
    return paramValue ? paramValue.value : "";
  };

  // Функция для отрисовки параметров
  renderParams = () => {
    const { params } = this.props;
    return params.map((param) => (
      <div key={param.id}>
        <label>{param.name}:</label>
        <input
          type="text"
          value={this.getParamValue(param.id)}
          onChange={(event) => this.handleParamValueChange(param.id, event)}
        />
      </div>
    ));
  };

  // Метод для получения полной структуры модели
  getModel = () => {
    const { model } = this.props;
    return model;
  };

  render() {
    return <div>{this.renderParams()}</div>;
  }
}

export default ParamEditor;
