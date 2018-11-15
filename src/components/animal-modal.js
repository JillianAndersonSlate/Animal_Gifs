import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class AnimalModal extends Component {
  constructor(props) {
    super(props);

    this.handleEscape = this.handleEscape.bind(this);
    this.el = document.createElement("div");
    this.el.className = "overlay";
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleEscape);
    document.body.appendChild(this.el);
  }

  handleEscape(event) {
    if (event.which === 27) {
      this.props.handleClose();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleEscape);
    document.body.removeChild(this.el);
  }

  renderGifs() {
    // Only show 'G-rated' gifs, because this app is for kids
    const gRatedGifs = this.props.gifData.filter(gif => gif.rating === "g");

    // Show no more than three gifs starting at a random index in the gif array
    const randomIndex = Math.floor(Math.random() * (gRatedGifs.length - 3));

    const gifsToShow =
      gRatedGifs.length >= 3
        ? gRatedGifs.slice(randomIndex, randomIndex + 3)
        : gRatedGifs;

    return gifsToShow.map(gif => (
      <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
    ));
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal-image-panel">
        <div className="image-container">{this.renderGifs()}</div>
        <button className="button" onClick={this.props.handleClose}>
          Close
        </button>
      </div>,
      this.el
    );
  }
}
