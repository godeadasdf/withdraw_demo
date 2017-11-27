import React from 'react';
import AlertModalPlus from './AlertModalPlus';
import AlertModalPureText from './AlertModalPureText';


export default class AlertModalViewMix extends React.Component {

  renderContent = (style) => {
    switch (style) {
      case 'image':
        return (<AlertModalPlus
          {...this.props}/>);
        break;
      case 'text':
        return (<AlertModalPureText
          {...this.props}/>);
        break;
      case 'choose':
        return null;
        break;
      default:
        return (<AlertModalPlus
          {...this.props}/>);
        break;
    }
  };

  render() {
    return this.renderContent(this.props.style ? this.props.style : 'image');
  }


}