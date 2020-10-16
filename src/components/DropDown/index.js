/**
 *
 * DropDown
 *
 */

import React from "react";
import {
  DropDownWrapper,
  Selector,
  Options,
  StyledArrow,
  SelectedItem,
  OptionsWrapper,
  Interstitial
} from "./styles";

class DropDown extends React.PureComponent {
  state = { selectedOption: {} };
  render() {
    const { selectedOption, showDropDown } = this.state;
    return (
      <DropDownWrapper>
        <Selector onClick={this.toogleDropDown}>
          <SelectedItem>
            {selectedOption.name ||
              selectedOption.value ||
              this.props.defaultText}
          </SelectedItem>
          <StyledArrow name="angle-down" />
        </Selector>
        <OptionsWrapper>
          {showDropDown &&
            this.props.options.map((item, i) => {
              const name = item.name || item.value;
              return (
                <Options key={`${name}_${i}`} onClick={this.selectItem(item)}>
                  {name}
                </Options>
              );
            })}
        </OptionsWrapper>
        {showDropDown && <Interstitial onClick={this.toogleDropDown} />}
      </DropDownWrapper>
    );
  }

  toogleDropDown = () => {
    this.setState(prevState => {
      return { showDropDown: !prevState.showDropDown };
    });
  };

  selectItem = selectedOption => () => {
    this.setState({ selectedOption, showDropDown: false });
    this.props.getSortedList(selectedOption);
  };
}

export default DropDown;
