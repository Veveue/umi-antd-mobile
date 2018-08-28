import { connect } from "dva";
function App(props) {
    return props.children;
}
export default connect()(App);
