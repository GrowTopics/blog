import * as React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/Seo"
import Button from "../components/Button";

const NotFoundPage = () => {
  return (
      <>
          <SEO title="404" />
          <div className="page-error">
              <div className="gtp-error-card">
                  <h1><span>404</span> Error</h1>
                  <p>Page does not exist! Please try another url, or go back home.</p>
                  <small>If you feel like this page should exist, please don't hesitate to report it in our discord server</small>
                  <div className="gtp-error-card__actions">
                      <Link to="/discord">
                          <Button type="outlined" label="Discord Server" />
                      </Link>
                      <Link to="/">
                          <Button type="filled" label="Go back home" />
                      </Link>
                  </div>
              </div>
          </div>
      </>
  )
}

export default NotFoundPage
