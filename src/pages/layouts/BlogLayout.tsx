import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../../components/bio"
import DefaultLayout from "./DefaultLayout";
import SEO from "../../components/Seo"
import Banner from "../../components/Banner";
import Button from "../../components/Button";

const BlogPostTemplate = ({data, location}: any) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const {previous, next} = data

    return (
        <DefaultLayout>
            <SEO
                title={ post.frontmatter.title }
                description={ post.frontmatter.description || post.excerpt }
            />
            <article
                className="gtp-blogpost"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </header>
                <section
                    dangerouslySetInnerHTML={{__html: post.html}}
                    itemProp="articleBody"
                />
            </article>
            <nav className="blog-post-nav">
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                <Button type="outlined" label={`← ${ previous.frontmatter.title }`} />
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                <Button type="outlined" label={`${ next.frontmatter.title } →`} />
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </DefaultLayout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`
