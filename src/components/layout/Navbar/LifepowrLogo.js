import React from 'react';

import Logo from '../../../assets/logos/LPicon2.png';

class PKLogo extends React.Component {
  render() {
    return (
      <img
        width={this.props.width}
        height={this.props.height}
        src={Logo}
        id={this.props.id}
        alt={this.props.id}
      />
    );
  }
}

export default PKLogo;
