import React from "react";
import MusicButton from "./components/musicButton";
import Display from "./components/display";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSound: "",
    };
  }

  sounds = {
    Q: {
      description: "Air horn",
      soundUrl:
        "http://soundbible.com/mp3/Air%20Horn-SoundBible.com-1561808001.mp3",
    },
    W: {
      description: "Common fart",
      soundUrl:
        "http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3",
    },
    E: {
      description: "Cat Meaw",
      soundUrl:
        "http://soundbible.com/mp3/Cat_Meow_2-Cat_Stevens-2034822903.mp3",
    },
    A: {
      description: "Slap",
      soundUrl: "http://soundbible.com/mp3/Slap-SoundMaster13-49669815.mp3",
    },
    S: {
      description: "Bear",
      soundUrl: "http://soundbible.com/mp3/Bear-SoundBible.com-866204188.mp3",
    },
    D: {
      description: "Coyote call",
      soundUrl:
        "http://soundbible.com/mp3/Coyote Call-SoundBible.com-1347099109.mp3",
    },
    Z: {
      description: "Wolf",
      soundUrl:
        "http://soundbible.com/mp3/Werewolf Howl-SoundBible.com-1888553688.mp3",
    },
    X: {
      description: "Bike horn",
      soundUrl:
        "http://soundbible.com/mp3/Bike Horn-SoundBible.com-602544869.mp3",
    },
    C: {
      description: "SMS alert",
      soundUrl: "http://soundbible.com/mp3/sms-alert-4-daniel_simon.mp3",
    },
  };

  componentDidMount() {
    document.addEventListener("keyup", (e) => {
      if (
        ["q", "w", "e", "a", "s", "d", "z", "x", "c"].indexOf(
          e.key.toLowerCase()
        ) >= 0
      ) {
        const musicButton = document.getElementById(
          `musicButton${e.key.toUpperCase()}`
        );
        musicButton.click();
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <Display description={this.state.currentSound} />
          {Object.keys(this.sounds).map((associatedLetter) => {
            return (
              <MusicButton
                key={associatedLetter}
                associatedLetter={associatedLetter}
                description={this.sounds[associatedLetter].description}
                soundUrl={this.sounds[associatedLetter].soundUrl}
                handleClick={(description) => {
                  this.setState(
                    Object.assign(this.state, { currentSound: description })
                  );
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
