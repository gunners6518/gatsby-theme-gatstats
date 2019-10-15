/** @jsx jsx */
import { Container, Styled, jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import { TagsList } from "../components/TagsList"
import DefaultLayout from "./DefaultLayout"
import { Seo } from "../components/Seo"

const PostLayout = ({ data: { mdx } }) => {
  const { excerpt, timeToRead, wordCount } = mdx,
    { title, tags, date, featuredImage } = mdx.frontmatter

  return (
    <DefaultLayout>
      <Seo title={title} description={excerpt} tags={tags} />
      <Container
        sx={{
          backgroundColor: "surface",
          borderRadius: 1,
        }}
      >
        <Styled.a
          onClick={() => window.history.back()}
          tabIndex={1}
          onKeyDown={e => {
            if (e.key === "Enter") {
              window.history.back()
            }
          }}
          sx={{
            display: "inline-block",
            mb: 4,
          }}
        >
          Back
        </Styled.a>
        {featuredImage && (
          <Styled.div
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: [250, 300],
              overflow: "hidden",
              mb: 4,
            }}
          >
            <Img
              fluid={featuredImage.childImageSharp.fluid}
              alt={title}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
              }}
            />
          </Styled.div>
        )}
        <Styled.h6
          sx={{
            color: "primary",
          }}
        >
          {date}
        </Styled.h6>
        <Styled.p
          sx={{
            mb: 2,
          }}
        >{`${timeToRead} min read / ${wordCount.words} words`}</Styled.p>
        <TagsList tags={tags} />
        <Styled.h1>{title}</Styled.h1>

        <MDXRenderer>{mdx.body}</MDXRenderer>
        <Styled.div>
          <Styled.a
            onClick={() => window.history.back()}
            tabIndex={1}
            onKeyDown={e => {
              if (e.key === "Enter") {
                window.history.back()
              }
            }}
            sx={{
              display: "inline-block",
              mt: 4,
            }}
          >
            Back
          </Styled.a>
        </Styled.div>
      </Container>
    </DefaultLayout>
  )
}

export const contentQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      timeToRead
      wordCount {
        words
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
export default PostLayout
