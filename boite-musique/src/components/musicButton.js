import React from "react";

class MusicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };

    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    const sound = document.getElementById(`${this.props.associatedLetter}`);
    sound.play();
    this.setState({ ...this.state, isClicked: true });
  }
  render() {
    const { associatedLetter, description, soundUrl, handleClick } = {
      ...this.props,
    };
    const className = this.state.isClicked
      ? "drum-pad clicked"
      : "drum-pad notClicked";
    return (
      <div
        id={`musicButton${associatedLetter}`}
        className={`${className}`}
        onClick={() => {
          this.playSound();
          handleClick(description);
        }}
      >
        {associatedLetter}
        <audio
          className="clip"
          id={associatedLetter}
          controls={false}
          src={soundUrl}
          preload="true"
          onEnded={() => {
            this.setState({ ...this.state, isClicked: false });
          }}
        >
          Your browser dosn't support the <code>audio</code> html element.
        </audio>
      </div>
    );
  }
}

export default MusicButton;
