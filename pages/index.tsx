import * as React from 'react';

export default class extends React.PureComponent {
  static async getInitialProps () {
    console.log('getInitialProps');
  }

  render () {
    return (
      <>
        index
      </>
    )
  }
}