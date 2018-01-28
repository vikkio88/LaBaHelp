import React, {Component} from 'react';
import {ResultSet} from "./ResultSet";
import {Button} from "semantic-ui-react";

class ResultSections extends Component {
    renderCategories(result) {
        if (result.filter(e => e.results.length === 0).length) {
            return <h1>You probably pasted bullshit instead of a CV text</h1>;
        }
        return result.map(category => (
            <div key={category.name} className="category-wrapper">
                <h1>{category.name}</h1>
                <ResultSet result={category.results.sort((e, e2) => e.count < e2.count ? 1 : -1)}/>
            </div>
        ));
    }

    render() {
        const {result} = this.props;
        if (!result) return <div/>;


        return (<div className="results-wrapper">
            <Button content='Back' icon='left arrow' labelPosition='right' style={{marginBottom: "30px"}}
                    onClick={() => window.location.reload()}/>

            {
                this.renderCategories(result)
            }
        </div>);
    }
}

export {ResultSections};