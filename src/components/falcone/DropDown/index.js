/**
 *
 * DropDown
 *
 */

import React from "react";
import PropTypes from "prop-types";

import {
  DropDownWrapper,
  Selector,
  Options,
  StyledArrow,
  SelectedItem,
  OptionsWrapper,
  Interstitial,
  SigilBackGround
} from "./styles";

class DropDown extends React.PureComponent {
  state = {};
  render() {
    const { showDropDown } = this.state;
    const { selectedOption } = this.props;
    return (
      <DropDownWrapper>
        <Selector onClick={this.toogleDropDown}>
          <SelectedItem>
            {selectedOption.name || this.props.defaultText}
          </SelectedItem>
          <StyledArrow name="caret-down" />
        </Selector>
        <OptionsWrapper>
          {showDropDown &&
            this.props.options.map((item, i) => {
              const name = item.name || item.value;
              return (
                <Options key={`${name}_${i}`} onClick={this.selectItem(item)}>
                  <SigilBackGround imageName={item.sigil || "blue.jpg"} />
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
    this.props.selectItem(selectedOption);
  };
}

DropDown.defaultProps = { options: [], selectedOption: {} };

DropDown.propTypes = {
  options: PropTypes.array,
  selectedOption: PropTypes.object,
  defaultText: PropTypes.string
};

export default DropDown;
