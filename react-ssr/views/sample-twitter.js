'use strict';

const React = require('react');
const { Component } = React;

const Tweet = ({ user, text }, idx) => React.createElement(
  'tr',
  { key: idx },
  React.createElement(
    'th',
    null,
    '@',
    user.screen_name
  ),
  React.createElement(
    'th',
    null,
    text
  )
);

module.exports = class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('render');
    return React.createElement(
      'table',
      { border: '1' },
      React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          null,
          'Screen Name'
        ),
        React.createElement(
          'th',
          null,
          'Tweet'
        )
      ),
      this.props.tweets.map(Tweet)
    );
  }
};
