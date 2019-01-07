/* eslint no-console: 0 */

import React from 'react';
import Select, { Option } from '../src';
import '../assets/index.less';

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      label: 'Lucy',
      options: [],
    };
    this.count = 0;
  }

  updateLabel = () => {
    this.setState({
      label: `newlabel ${this.count++}`,
    });
  };

  updateOptions = value => {
    const options = [value, value + value, value + value + value];
    this.setState({
      options,
    });
  };

  render() {
    const { label, options } = this.state;

    return (
      <div>
        label: {label}
        <hr />
        <Select
          defaultValue="lucy"
          optionLabelProp="children"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="lucy">{label}</Option>
          <Option value="lucy2">lucy2</Option>
        </Select>
        <p>
          <button type="button" onClick={this.updateLabel}>
            update option label
          </button>
        </p>
        <hr />
        <Select combobox optionLabelProp="children" onChange={this.updateOptions}>
          {options.map(opt => {
            return <Option key={opt}>{opt}</Option>;
          })}
        </Select>
        <hr />
      </div>
    );
  }
}

export default Test;
