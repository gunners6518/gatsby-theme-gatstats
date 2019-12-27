/** @jsx jsx */
import * as React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import Img from 'gatsby-image'

import { preToCodeBlock } from 'mdx-utils'

import { Tag } from '../components/Tag'
import { Seo } from '../components/Seo'
import { Code } from '../components/Code'

import { formatDate, colorRange } from '../utils'

// https://www.lekoarts.de/en/blog/language-tabs-for-gatsbys-code-blocks
const components = {
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }
    return <pre {...preProps} />
  },
  wrapper: ({ children }: any) => <React.Fragment>{children}</React.Fragment>
}

const Post = ({ data: { mdx, site }, ...props }: any) => {
  const context = useThemeUI()

  const { timeToRead, wordCount, excerpt, fields } = mdx
  const { title, date, tags, featuredImage, embeddedImages } = mdx.frontmatter

  // https://deltaskelta.github.io/blog/using-gatsby-images-with-gatsby-mdx/
  const embedded: { [k: string]: React.ReactNode } = {}

  if (embeddedImages) {
    embeddedImages.forEach((image: any, index: number) => {
      if (image && image.childImageSharp.fluid) {
        embedded[`image${index + 1}`] = () =>
          image.childImageSharp.fluid || null
      }
    })
  }

  const colorScale = colorRange(
    context.theme.colors!.primary!,
    context.theme.colors!.secondary!,
    tags ? tags.length : []
  )

  return (
    <article
      sx={{
        mb: 7
      }}
    >
      <Seo
        title={`${site.siteMetadata.title} | ${title}`}
        description={excerpt}
        keywords={tags || []}
        siteURL={site.siteMetadata.siteURL}
        path={fields.slug}
        image={
          featuredImage
            ? featuredImage.childImageSharp.fluid.src.replace('/', '')
            : ''
        }
      />
      {featuredImage && (
        <Styled.div
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden',
            mb: 4
          }}
        >
          <Img
            fluid={featuredImage.childImageSharp.fluid}
            alt={title}
            style={{
              display: 'block',
              width: '100%',
              height: '100%'
            }}
          />
        </Styled.div>
      )}
      <Styled.div
        sx={{
          fontSize: 2,
          fontFamily: 'body',
          color: 'secondary',
          mb: 3
        }}
      >
        {title && <Styled.h1>{title}</Styled.h1>}

        {date && formatDate(date)}
      </Styled.div>
      <ul
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 0,
          mt: 4,
          mb: 3,
          '> :nth-of-type(n)': {
            mr: 2
          }
        }}
      >
        {tags &&
          tags.map((tag: string, index: number) => (
            <Tag key={index} color={colorScale[index]}>
              {tag}
            </Tag>
          ))}
      </ul>

      <Styled.div
        sx={{
          mb: 4,
          color: 'textMuted',
          fontSize: 1,
          fontFamily: 'body',
          textAlign: 'right'
        }}
      >
        {`${timeToRead} min read / ${wordCount.words} words`}
      </Styled.div>

      <MDXProvider components={components}>
        <MDXRenderer embedded={embedded} location={props.location}>
          {mdx.body}
        </MDXRenderer>
      </MDXProvider>
    </article>
  )
}

// 21266d50-dea9-55e5-8192-9b41cd6346c6
export const contentQuery = graphql`
  query postQuery($id: String) {
    site {
      siteMetadata {
        title
        siteURL
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      timeToRead
      wordCount {
        words
      }
      fields {
        slug
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(quality: 90) {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
        embeddedImages {
          publicURL
          childImageSharp {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
`
export default Post
