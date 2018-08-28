import React, { PureComponent } from "react";
export default class Layout extends PureComponent {
    render() {
        return (
            <div>
                <div className="header">
                    header
                </div>
                <div className="content">{this.props.children}</div>
            </div>
        );
    }
}
