/* global PUBLIC_PATH */

import React, { Fragment } from 'react'
import CustomLink from 'components/custom-link'
import HomeBannerSearchBox from '../home-banner-search-box'

export default class HomeBanner extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <section id="banner-home">
        <div className="bg-primary text-center">
          <div className="padding-y-205 tablet:padding-y-4">
            <div className="font-heading-xl tablet:font-heading-2xl text-white line-height-sans-2">
              {this.props.motto}
            </div>
            <div className="font-heading-lg text-white desktop:display-block display-none margin-top-1">
              {this.props.subtitle}
            </div>
          </div>
          <div className="bg-primary-lighter padding-y-205 tablet:padding-y-3">
            <div className="grid-container">
              <div className="grid-row">
                <div className="tablet:grid-col">
                  <HomeBannerSearchBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
