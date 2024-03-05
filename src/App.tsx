import React, { Component } from "react";
import ParamEditor from "./ParamEditor";

class App extends Component {
  state = {
    params: [
      {
        id: 1,
        name: "Назначение",
        type: "string" as const, // Используем `as const`, чтобы тип поля был строковым литералом
      },
      {
        id: 2,
        name: "Длина",
        type: "string" as const,
      },
    ],
    model: {
      paramValues: [
        {
          paramId: 1,
          value: "повседневное",
        },
        {
          paramId: 2,
          value: "макси",
        },
      ],
      colors: [], // Добавляем пустой массив цветов, чтобы компонент был расширяемым
    },
  };

  // Функция для обновления значения параметра
  updateParamValue = (paramId: number, value: string) => {
    const { model } = this.state;
    const updatedParamValues = model.paramValues.map((param) => {
      if (param.paramId === paramId) {
        return {
          ...param,
          value,
        };
      }
      return param;
    });
    this.setState({
      model: {
        ...model,
        paramValues: updatedParamValues,
      },
    });
  };

  render() {
    const { params, model } = this.state;
    return (
      <div>
        <h1>Product Editor</h1>
        <ParamEditor
          params={params}
          model={model}
          onUpdateParamValue={this.updateParamValue}
        />
      </div>
    );
  }
}

export default App;
