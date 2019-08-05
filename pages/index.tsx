import React from 'react';
import { NextPageContext } from 'next';
import { UserAgent, UserAgentProvider } from '@quentin-sommer/react-useragent';

interface Props {
  userAgent?: string
}

export default class extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render () {
    const { userAgent } = this.props;
    return (
      <>
        <UserAgentProvider ua={userAgent}>
          <UserAgent mobile>
            <p>This will only be rendered on mobile</p>
          </UserAgent>
          <UserAgent computer>
            <p>This will only be rendered on desktop</p>
          </UserAgent>
        </UserAgentProvider>
      </>
    )
  }
}