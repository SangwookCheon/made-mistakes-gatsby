import React from 'react'
import chunk from 'lodash/chunk'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

import site from '../../config/site'
import style from '../styles/Document.module.css'

const metaImage = site.image

// This would normally be in a Redux store or some other global data store.
if (typeof window !== `undefined`) {
  window.postsToShow = 20
}

class Gallery extends React.Component {
  constructor() {
    super()
    let postsToShow = 20
    if (typeof window !== `undefined`) {
      postsToShow = window.postsToShow
    }

    this.state = {
      showingMore: postsToShow > 20,
      postsToShow,
    }
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
    window.postsToShow = this.state.postsToShow
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.pageYOffset + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 100) {
      this.setState(prevState => ({ postsToShow: prevState.postsToShow + 20 }))
    }
    this.ticking = false
  }

  render() {
    const posts = this.props.data.allMarkdownRemark.edges.map(e => e.node)
    const postsSize = this.props.data.allMarkdownRemark.edges.length

    return (
      <Layout>
        <SEO
          title={`Procreate iPad paintings - ${site.title}`}
          path="/procreate-paintings/"
          description="Gallery of digital paintings created with Procreate on
          an iPad. Find time lapse videos, in-process screenshots, and more."
          metaImage={metaImage}
        />
        <main className={style.document}>
          <div className={style.title}>
            <h1 className={style.heading}>
              <span>
                <span>Procreate iPad paintings</span>
              </span>
            </h1>
          </div>
          {this.props.data.file.childImageSharp.fluid && (
            <Img
              fluid={this.props.data.file.childImageSharp.fluid}
              className={style.cover}
            />
          )}
          <div className={style.content}>
            <p>
              Digital paintings created on an iPad using the iOS app{' '}
              <a href="http://procreate.si/">
                <strong>Procreate</strong> by Savage Interactive
              </a>
              .
            </p>
          </div>
          <div className={style.gallery}>
            {chunk(
              posts.slice(0, this.state.postsToShow),
              this.state.postsToShow
              // eslint-disable-next-line no-shadow
            ).map((chunk, i) => (
              <Masonry className={style.grid} key={`chunk-${i}`}>
                {chunk.map(post => {
                  const image = post.frontmatter.thumbnail
                    ? post.frontmatter.thumbnail
                    : post.frontmatter.image

                  return (
                    <div key={post.id} className={style.gridItem}>
                      <Link to={post.frontmatter.path}>
                        <Img
                          fadeIn={false}
                          fluid={image.childImageSharp.fluid}
                        />
                      </Link>
                    </div>
                  )
                })}
              </Masonry>
            ))}
            {postsSize <= this.postsToShow ||
              (!this.state.showingMore && (
                <button
                  type="button"
                  data-testid="load-more"
                  className={style.loadMore}
                  onClick={() => {
                    this.setState({
                      postsToShow: this.state.postsToShow + 20,
                      showingMore: true,
                    })
                  }}
                >
                  Load more
                </button>
              ))}
          </div>
        </main>
      </Layout>
    )
  }
}

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query ProcreatePaintingsQuery {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "procreate-paintings-feature.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1100
          quality: 75
          traceSVG: { background: "#fff", color: "#111" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
        fixed(width: 1100, quality: 75) {
          src
          height
          width
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: "procreate-paintings" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            image {
              childImageSharp {
                fluid(
                  maxHeight: 400
                  quality: 75
                  traceSVG: { background: "#fff", color: "#111" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            thumbnail {
              childImageSharp {
                fluid(
                  maxHeight: 400
                  quality: 75
                  traceSVG: { background: "#fff", color: "#111" }
                ) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Gallery
