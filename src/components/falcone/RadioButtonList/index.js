/**
 *
 * RadioButtonList
 *
 */

import React from "react";
import PropTypes from "prop-types";

import {
  RadioButton,
  Selector,
  Label,
  ItemWrapper,
  ListWrapper
} from "./styles";

class RadioButtonList extends React.PureComponent {
  render() {
    return (
      <ListWrapper>
        {this.props.options.map(item => {
          return (
            <ItemWrapper key={item.name} enableOption={item.enabled}>
              <RadioButton
                enableOption={item.enabled}
                onClick={item.enabled ? this.selectOption(item) : undefined}
              >
                <Selector
                  selected={this.props.selectedOption.name === item.name}
                />
              </RadioButton>
              <Label>
                {item.name} ({item.total_no})
              </Label>
            </ItemWrapper>
          );
        })}
      </ListWrapper>
    );
  }

  selectOption = selectedOption => () => {
    this.props.selectItem(selectedOption);
  };
}

RadioButtonList.propTypes = {
  options: PropTypes.array,
  selectItem: PropTypes.func,
  selectedOption: PropTypes.object
};

RadioButtonList.defaultProps = { options: [], selectedOption: {} };

export default RadioButtonList;
