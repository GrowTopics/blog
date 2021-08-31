import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import DefaultLayout from "./layouts/DefaultLayout";
import Article from "../components/Article";
import TitleBar from "../components/TitleBar";

const Index = ({ data }: any) => {
    return (
        <DefaultLayout>
            <Seo title="Home"/>
            <TitleBar title="Welcome to GrowTopics!" icon="emoji_people" />
            <div className="surface-text">
                <p>
                    Welcome to GrowTopics, we are a small Growtopia company that partners with in-game worlds and relays their helpful information to the world wide web. Take a look at some of our super helpful articles filled to the brim with player provided information.
                </p>
            </div>
            <TitleBar title="Recent Posts" icon="update" />
            <RecentPosts data={ data } />
        </DefaultLayout>
    )
}

const RecentPosts = ({ data }: any) => {
    const posts = data.allMarkdownRemark.nodes

    if (posts.length === 0) {
        return (
            <p>
                No blog posts found. Add markdown posts to "content/blog" (or the
                directory you specified for the "gatsby-source-filesystem" plugin in
                gatsby-config.js).
            </p>
        )
    }

    return (
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
    )
}

export default Index

export const pageQuery = graphql`
    query {
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


