import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialButton extends React.Component {
    state = {
        href: this.props.href,
    };

    handleClick = (e) => {
        e.preventDefault();
        window.open(this.state.href, '_blank');
    };

    render() {
        return (
            <a className="social-attribute" onClick={this.handleClick} href={this.props.href}>
                <FontAwesomeIcon size="2x" className="social" icon={this.props.icon} />
            </a>
        );
    }
}

export default SocialButton;
