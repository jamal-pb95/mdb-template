import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from  '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const QuoteGenerator = ({ selectedQuote, assignNewQuoteIndex }) => (
  <Card>
    <CardContent>
      <Typography id="text">
        {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button 
        variant="contained"
        id="new-quote"
        size="small"
        onClick={assignNewQuoteIndex}>Next Quote
      </Button>
      {/* tweet button */}
      <IconButton
        color="primary"
        id="tweet-quote"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote} - ${selectedQuote.author}&hashtags=JamalUddin, RandomThoughts, freeCodeCamp`}
      >
        <FontAwesomeIcon
          icon={faTwitter}
          size="lg">
        </FontAwesomeIcon>
      </IconButton>
      {/* Github Repo */}
      <IconButton
        color="secondary"
        target="_blank"
        href={`https://github.com/jamal-pb95/random-quote-machine`}
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="lg">
        </FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default QuoteGenerator;