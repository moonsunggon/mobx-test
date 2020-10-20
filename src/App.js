import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';

@inject('viewStore')
@observer
@autobind
class App extends Component {

  constructor(props){
    super(props)
  }
  render() {
  
    return (
      <div>
        <button type="button" onClick={()=>this.props.viewStore.callAjax()}>test</button>
      </div>
    );
  }
}

export default App;