import React, {Component} from 'react';
import {Button, Form, Loader, TextArea} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
    state = {
        loading: false,
        text: "",
        result: null
    };

    render() {
        const {text, loading, result} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to LAzyBAstards Helper</h1>
                </header>
                <div className="App-intro">
                    {loading &&
                    <Loader active inline='centered'>Loading</Loader>
                    }
                    {!loading && !result && (
                        <div>
                            <span>To get started, paste here the resume text.</span>
                            <p className="button">
                                <Button disabled={text.length < 20} onClick={() => this.elaborate()}>Elaborate</Button>
                            </p>
                            <Form className="form">
                        <TextArea
                            className="text-area" autoHeight placeholder='Paste here'
                            onChange={e => this.setState({text: e.target.value})}
                            value={text}
                        />
                            </Form>
                        </div>
                    )}
                    {!loading && result && (
                        <h1>Result</h1>
                    )}
                </div>
            </div>
        );
    }

    elaborate() {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, result: {ciao: 1}});
        }, 4000);
    }
}

export default App;
