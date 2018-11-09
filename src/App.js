import React, { Component } from 'react';
import { random } from 'lodash';
import axios from 'axios';
import './App.css'
import 'typeface-roboto';
import { Grid, withStyles } from '@material-ui/core';
import QuoteGenerator from './components/QuoteGenerator';

// quote json file
const URL = 'https://gist.githubusercontent.com/jamal-pb95/8e7099539618290e762cd8e0fb0d5f2a/raw/efd5f24eaf00f147f495cc364fc3698b5d258239/quotes.json';

// main styles
const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh'
  }
};


// App begin
class App extends Component {
  state = {
    quotes: [],
    selectedQuoteIndex: null
  };

  // fetch data from url json file
  componentDidMount() {
    axios.get(URL)
      .then((res) => res.data)
      .catch(error => console.log(error))
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  // check the index of quote array
  get selectedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  // select random index
  selectedQuoteIndex = () => {
    if(!this.state.quotes.length) return undefined;
    return random(0, this.state.quotes.length - 1);
  }

  // assign random index
  assignNewQuoteIndex = () => {
    this.setState({
      selectedQuoteIndex: this.selectedQuoteIndex()
    })
  }

  render() {
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
        <Grid xs={10} lg={8} color="primary" item>
          {
            /*
            * first check if selectedQuote exist of not?
            * if have then show the quote and the author
            * otherwise show null 
            */
          }
          {
            this.selectedQuote ?
            <QuoteGenerator 
              selectedQuote={this.selectedQuote}
              assignNewQuoteIndex={this.assignNewQuoteIndex} /> :
            null
          }
        </Grid>
      </Grid>
    );
  }
}

// Pass the App with styles
export default withStyles(styles)(App);
