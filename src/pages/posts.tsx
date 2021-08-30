import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import DefaultLayout from "./layouts/DefaultLayout";
import Article from "../components/Article";

const Posts = ({data, location}: any) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    if (posts.length === 0) {
        return (
            <DefaultLayout>
                <Seo title="Posts"/>
                <p>
                    No blog posts found. Add markdown posts to "content/blog" (or the
                    directory you specified for the "gatsby-source-filesystem" plugin in
                    gatsby-config.js).
                </p>
            </DefaultLayout>
        )
    }

    return (
        <DefaultLayout>
            <Seo title="Posts"/>
            <section className="article__container">
                {posts.map((post: { frontmatter: { title: any; date: boolean; author: any | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: any }; fields: { slug: React.Key | null | undefined }; excerpt: any }) => {
                    const title = post.frontmatter.title || post.fields.slug

                    return (
                        <>
                            <Article
                                key={ post.fields.slug }
                                title={ title }
                                // preview={ post.frontmatter.description || post.excerpt }
                                slug={ post.fields.slug }
                                author={ post.frontmatter.author }
                            />
                        </>
                    );

                })}
            </section>
        </DefaultLayout>
    )
}

export default Posts

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                    author
                }
            }
        }
    }
`
