/* eslint-disable import/no-extraneous-dependencies */
/** @jsx createElement */
import { createElement, Component, render } from 'rax';
import GestureView from '../src/index';
import View from 'rax-view';
import Text from 'rax-text';
import DriverUniversal from 'driver-universal';

class App extends Component {
  onHorizontalPan = (e) => {
    console.error('onHorizontalPan:' + e.state);
  }

  onVerticalPan = (e) => {
    console.error('onVerticalPan:' + e.state);
  }

  render() {
    return (<View style={{ flex: 1 }}>
      <GestureView style={{ width: 300, height: 300, backgroundColor: 'red' }}
        onVerticalPan={this.onVerticalPan}
        onHorizontalPan={this.onHorizontalPan}
      >
        <Text>Pan Me</Text>
      </GestureView>
    </View>);
  }
}

render(<App />, document.body, { driver: DriverUniversal });
