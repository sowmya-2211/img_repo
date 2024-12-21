import { Component } from "react";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
class App extends Component{
  render(){
    return(
      <div>
        <Test2/>
        <Test3/>
      </div>
    )
  }
}
export default App;