import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron
 .configure({
  name:"NET WORKING APP",
     host: "192.168.1.121"
    }) 
    // .use(reactotronRedux())
    .connect()
export default reactotron;