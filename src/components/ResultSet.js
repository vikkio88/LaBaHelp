import React, {Component} from 'react';
import {Progress} from "semantic-ui-react";

class ResultSet extends Component {
    renderSubcategories(result, max) {
        return result.map(r => (
            <div key={r.value} className="subcategory">
                <h3>{r.value}</h3>
                <div className="progress-wrapper">
                    <Progress
                        percent={Math.round(r.count / max * 100)}
                        progress="percent"
                        indicating
                    />
                </div>
            </div>
        ));
    }

    render() {
        const {result} = this.props;
        const max = result[0].count;
        return (
            <div>
                {this.renderSubcategories(result, max)}
            </div>
        );
    }
}

export {ResultSet}