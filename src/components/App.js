import React from 'react';
import TopBar from './TopBar';
import InstructionsPanel from './InstructionsPanel';
import PicturesPanel from './PicturesPanel';

class App extends React.Component {
  state = { score: null, topScore: null };

  handleIncrement = (picture, key) => {
    this.setState({ topScore: this.state.topScore + 1 });
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (
      <div className="ui container">
        <TopBar score={this.state.score} topScore={this.state.topScore} />
        <InstructionsPanel />
        <PicturesPanel handleIncrement={this.handleIncrement} />
      </div>
    );
  }
}

export default App;
