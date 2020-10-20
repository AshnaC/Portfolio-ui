import PropTypes from "prop-types";
import React from "react";

import DropDown from "../DropDown";
import RadioButtonList from "../RadioButtonList";
import {
  ContentWrapper,
  SelectorWrapper,
  Button,
  OptionsWrapper,
  TimeTaken,
  DarkBackground,
  LightBackground,
  SelectedTile,
  TileItem,
  ItemHeader,
  ItemDetail
} from "./styles";

class SelectorPage extends React.PureComponent {
  initialState = {
    selectionList: [],
    availableVehicles: this.props.vehicles,
    availablePlanets: this.props.planets
  };
  state = { ...this.initialState };
  render() {
    const searchButtonEnabled = this.isSearchButtonEnabled();
    return (
      <ContentWrapper>
        <TimeTaken>Time taken: {this.getTotalTime()}</TimeTaken>
        <OptionsWrapper>
          {this.props.selectionGroupIds.map((item, i) => {
            const group =
              this.state.selectionList.find(
                selection => selection.id === item.id
              ) || {};
            const sigil = group.selectedPlanet && group.selectedPlanet.sigil;
            return (
              <div key={item.id}>
                <SelectorWrapper imageName={sigil}>
                  <LightBackground showBackGround={sigil}>
                    <DarkBackground showBackGround={sigil}>
                      <DropDown
                        selectedOption={group.selectedPlanet}
                        options={this.state.availablePlanets}
                        selectItem={this.selectPlanet(item.id, group)}
                        defaultText="Select a planet"
                      />
                      {group.selectedPlanet && (
                        <RadioButtonList
                          selectedOption={group.selectedVehicle}
                          selectItem={this.selectVehicle(group)}
                          options={this.getAvailableVehiclesForPlanet(group)}
                        />
                      )}
                    </DarkBackground>
                  </LightBackground>
                </SelectorWrapper>
                {group.selectedPlanet && group.selectedVehicle && (
                  <SelectedTile>
                    <TileItem>
                      <ItemHeader>Planet</ItemHeader>
                      <ItemDetail>{group.selectedPlanet.name}</ItemDetail>
                      <ItemDetail>
                        {group.selectedPlanet.distance} km
                      </ItemDetail>
                    </TileItem>
                    <TileItem>
                      <ItemHeader>Vehicle</ItemHeader>
                      <ItemDetail>{group.selectedVehicle.name}</ItemDetail>
                      <ItemDetail>
                        {group.selectedVehicle.max_distance} km
                      </ItemDetail>
                      <ItemDetail>
                        {group.selectedVehicle.speed} kmph
                      </ItemDetail>
                    </TileItem>
                  </SelectedTile>
                )}
              </div>
            );
          })}
        </OptionsWrapper>
        <Button
          enabled={searchButtonEnabled}
          onClick={searchButtonEnabled ? this.searchFalcon : undefined}
        >
          Find Falcone!
        </Button>
      </ContentWrapper>
    );
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.reset && this.props.reset) {
      this.setState({ ...this.initialState });
      this.props.clearResetFlag();
    }
  }

  getTotalTime() {
    let totalTime = 0;
    this.state.selectionList.forEach(item => {
      if (item.selectedPlanet && item.selectedVehicle) {
        totalTime =
          totalTime + item.selectedPlanet.distance / item.selectedVehicle.speed;
      }
    });
    return totalTime.toFixed(0);
  }

  isSearchButtonEnabled() {
    let isEnabled = this.state.selectionList.length === 4;
    this.state.selectionList.forEach(item => {
      if (!item.selectedVehicle) {
        isEnabled = false;
      }
    });
    return isEnabled;
  }

  searchFalcon = () => {
    let planet_names = [];
    let vehicle_names = [];
    let timeTaken = 0;
    this.state.selectionList.forEach(item => {
      planet_names = [...planet_names, item.selectedPlanet.name];
      vehicle_names = [...vehicle_names, item.selectedVehicle.name];
      timeTaken =
        timeTaken + item.selectedPlanet.distance / item.selectedVehicle.speed;
    });
    this.props.searchFalcon(timeTaken.toFixed(0), {
      planet_names,
      vehicle_names
    });
  };

  selectPlanet = (groupId, group) => selectedPlanet => {
    const prevPlanet = group.selectedPlanet && group.selectedPlanet.name;
    if (prevPlanet !== selectedPlanet.name) {
      const allAvailableVehicles =
        prevPlanet && group.selectedVehicle
          ? this.replaceVehicleAndGetList(group.selectedVehicle)
          : this.state.availableVehicles;
      let availablePlanets = this.state.availablePlanets.filter(
        item => item.name !== selectedPlanet.name
      );
      if (prevPlanet) {
        availablePlanets = [...availablePlanets, group.selectedPlanet];
      }
      const list = this.state.selectionList.filter(item => item.id !== groupId);
      const selectionList = [...list, { id: groupId, selectedPlanet }];
      this.setState({
        selectionList,
        availableVehicles: allAvailableVehicles,
        availablePlanets
      });
    }
  };

  getAvailableVehiclesForPlanet(group) {
    return this.state.availableVehicles.map(vehicle => {
      const isSelected =
        group.selectedVehicle && group.selectedVehicle.name === vehicle.name;
      const enabled =
        vehicle.max_distance >= group.selectedPlanet.distance &&
        (vehicle.total_no > 0 || isSelected);
      return { ...vehicle, enabled };
    });
  }

  replaceVehicleAndGetList(preVehicle) {
    let availableVehicles = [...this.state.availableVehicles];
    var vehicleIndex = availableVehicles.findIndex(
      item => item.name === preVehicle.name
    );
    let vehicle = availableVehicles[vehicleIndex];
    if (vehicle) {
      const units = vehicle.total_no;
      vehicle = { ...vehicle, total_no: units + 1 };
      availableVehicles[vehicleIndex] = vehicle;
    }
    return availableVehicles;
  }

  selectVehicle = group => selectedVehicle => {
    const isSelected =
      group.selectedVehicle &&
      group.selectedVehicle.name === selectedVehicle.name;
    if (!isSelected) {
      const list = this.state.selectionList.filter(
        item => item.id !== group.id
      );
      const availableVehicles = this.getRemainingVehicles(
        selectedVehicle,
        group.selectedVehicle
      );
      const updatedGroup = { ...group, selectedVehicle };
      const selectionList = [...list, updatedGroup];
      this.setState({ selectionList, availableVehicles });
    }
  };

  getRemainingVehicles(selectedVehicle, preVehicle) {
    let availableVehicles = [...this.state.availableVehicles];
    if (preVehicle) {
      availableVehicles = this.replaceVehicleAndGetList(preVehicle);
    }
    let units = selectedVehicle.total_no;
    const selectedVehicleIndex = availableVehicles.findIndex(
      item => item.name === selectedVehicle.name
    );
    selectedVehicle = { ...selectedVehicle, total_no: units - 1 };
    availableVehicles[selectedVehicleIndex] = selectedVehicle;
    return availableVehicles;
  }
}

SelectorPage.propTypes = { vehicles: PropTypes.array };

export default SelectorPage;
