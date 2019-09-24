import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import site from '../../config/site'

const _ = require('lodash-addons')

const metaImage = site.image
const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO
      title={`All tags | ${site.titleAlt}`}
      path="/tag/"
      description="An archive of posts organized by topic."
      metaImage={metaImage}
    />
    <h1>All tags</h1>
    <ul>
      {group.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tag/${_.slugify(tag.fieldValue)}/`}>
            <span>{tag.fieldValue}</span>{' '}
            <span className="count">{tag.totalCount}</span>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(filter: { frontmatter: { published: { ne: false } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage
