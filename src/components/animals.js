import React, { Component } from "react";
import { connect } from "react-redux";
import AnimalLink from "./animal-link";
import { getGifs } from "../actions";
import AnimalModal from "./animal-modal";

class Animals extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedAnimal: "" };

    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(animal) {
    this.props.getGifs(animal);
    this.setState({ selectedAnimal: animal });
  }

  renderModal() {
    if (this.state.selectedAnimal) {
      if (this.props.loading) {
        return <span>Loading...</span>;
      } else if (this.props.error) {
        return <span>Whoops! There has been an error.</span>;
      }
      return (
        <AnimalModal
          handleClose={this.closeModal}
          gifData={this.props.gifs[this.state.selectedAnimal] || []}
        />
      );
    }
  }

  closeModal() {
    this.setState({ selectedAnimal: "" });
  }

  render() {
    return (
      <div>
        <h1>Choose an animal!</h1>
        {this.props.animals.map(animal => {
          return (
            <AnimalLink
              onClick={this.handleClick}
              name={animal.name}
              emoji={animal.emoji}
              key={animal.name}
            />
          );
        })}
        {this.renderModal()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.animal,
    loading: state.loading.gifsLoading,
    error: state.error.gifsError
  };
}

export default connect(
  mapStateToProps,
  { getGifs }
)(Animals);
