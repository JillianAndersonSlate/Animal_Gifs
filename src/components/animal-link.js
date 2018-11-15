import React, { Component } from "react";

export default class AnimalLink extends Component {
  constructor(props) {
    super(props);

    this.handleAnimalClick = this.handleAnimalClick.bind(this);
  }
  handleAnimalClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    const { name, emoji } = this.props;
    return (
      <button
        onClick={this.handleAnimalClick}
        className="animal-button"
      >{`${name} ${emoji}`}</button>
    );
  }
}
