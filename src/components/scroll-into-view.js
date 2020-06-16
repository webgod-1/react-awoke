import { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class ScrollIntoView extends PureComponent {
  componentDidMount = () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });;

  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render = () => this.props.children;
}

export default withRouter(ScrollIntoView);