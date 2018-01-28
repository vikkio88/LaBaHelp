import React, {Component} from 'react';
import {ResultSet} from "./ResultSet";
import {Button, Image} from "semantic-ui-react";

class ResultSections extends Component {
    renderCategories(result) {
        if (result.filter(e => e.results.length === 0).length > 1) {
            return (
                <div>
                    <h1>You probably pasted bullshit instead of a CV text</h1>
                    <Image
                        fluid
                        src="https://user-images.githubusercontent.com/248805/35486874-3bffdd50-046c-11e8-9129-8ffff228de8a.gif"
                        alt="Instructions"/>
                </div>
            );
        }
        return result.map(category => {
                if (!category.results.length) {
                    return <div/>;
                }
                return (
                    <div key={category.name} className="category-wrapper">
                        <h1>{category.name}</h1>
                        <ResultSet result={category.results.sort((e, e2) => e.count < e2.count ? 1 : -1)}/>
                    </div>
                );
            }
        );
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