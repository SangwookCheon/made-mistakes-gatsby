import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Gravatar from 'react-gravatar'

const Comment = props => {
  const { name, url, email, friendlyDate, iso8601Date, children } = props

  return (
    <div>
      <div>
        <Gravatar size={60} md5={email} email={name} default="mm" rating="pg" />
      </div>
      <div>
        <header>
          {url !== '' ? (
            <a className="h-card" href={url}>
              {name}
            </a>
          ) : (
            <span className="h-card">{name}</span>
          )}
          &nbsp;on <time dateTime={iso8601Date}>{friendlyDate}</time>
        </header>
        {children}
      </div>
    </div>
  )
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  friendlyDate: PropTypes.string.isRequired,
  iso8601Date: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Comment

export const commentQuery = graphql`
  fragment commentAttributesFragment on MarkdownRemark {
    frontmatter {
      _id
      name
      url
      email
      friendlyDate: date(formatString: "MMMM DD, YYYY")
      iso8601Date: date
    }
    html
  }
`
