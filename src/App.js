import React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, Loader, Popup, TextArea} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import {ResultSections} from './components';

class App extends Component {
    state = {
        loading: false,
        text: "",
        result: null
    };

    render() {
        const {text, loading, result} = this.state;
        return (
            <div className="wrapper">
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">LAzyBAstards Helper</h1>
                    </header>
                    <div className="App-intro">
                        {loading &&
                        <Loader active inline='centered'>Loading</Loader>
                        }
                        {!loading && !result && (
                            <div>
                                <span>Hi you {
                                    <Popup
                                        trigger={<strong>Lazy Bastards</strong>}
                                        content='a.k.a. Recruiters'
                                    />
                                }
                                    , to get started, paste here the resume text.</span>
                                <p className="button">
                                    <Button disabled={text.length < 20}
                                            onClick={() => this.elaborate()}>Elaborate</Button>
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
                        {!loading && <ResultSections result={result}/>}
                    </div>
                </div>
                <footer>
                    <strong>
                        made with ♥ by <a href="https://vikkio.co" target="_blank"
                                          rel="noopener noreferrer">vikkio</a>
                    </strong>
                </footer>
            </div>
        );
    }

    elaborate() {
        this.setState({loading: true});
        axios.post(
            'https://vikkio.co/labahelp-api/text',
            {text: this.state.text, ua: window.navigator.userAgent}
        ).then(data => {
            this.setState({
                loading: false,
                result: data.data.payload
            });
        }).catch(() => {
            this.setState({loading: false});
        });
    }
}

export default App;
