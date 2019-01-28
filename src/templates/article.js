import React, { Component } from 'react'
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Share from "../components/Share";
import { Row, Col, List, Button, Icon, Divider, Tag } from 'antd';
import Image from '../components/image';
import { randomColor } from '../lib';



class Article extends Component {
    render() {
        const { title, image, content, createdAt, author, tags } = this.props.data.contentfulArticle
        const { next, prev } = this.props.pageContext
        const pathname = this.props.location.pathname

        return (
            <Layout pathname={pathname}>
                <div className="article-page">
                    <Row type="flex" justify="center" align="middle">
                        <Col span={12}>
                            <Row className="navigator">
                                <Col>
                                    <Link to="../">
                                        <Button type="dashed">
                                            <Icon type="left" />
                                            Back
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row className="title">
                                <Col>
                                    <h2>{title}</h2>
                                    <List grid={{ gutter: 16, column: 4 }}>
                                        <List.Item>
                                            { createdAt }
                                        </List.Item>
                                        <List.Item>
                                            { author }
                                        </List.Item>
                                    </List>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image fluid={image.fluid} alt={image.file.fileName} />
                                </Col>
                            </Row>
                            <Row className="content">
                                <Col>
                                    { content.content }
                                </Col>
                                <Divider dashed />
                                <Row className="tags">
                                    <Col>
                                        Ada di tag <br />
                                        { tags.map(tag => <Link to={`tag/${tag}`}><Tag color={randomColor}>{`#${tag}`}</Tag></Link>) }
                                    </Col>
                                    <Col>
                                        <Share pathname={pathname} url='https://riauislands.netlify.com' title={title} />
                                    </Col>
                                </Row>
                            </Row>
                            <Row type="flex" justify="space-between" className="prev-next">
                                <Col>
                                    { prev && <div className="prev">
                                        <strong>Sebelumnya</strong> <br />
                                        <Link to={'post/' + prev.node.slug}>
                                            <Icon type="left" /> &nbsp;
                                            { prev && prev.node.title }
                                        </Link>
                                    </div> }
                                </Col>
                                <Col>
                                    { next && <div className="next">
                                        <strong>Selanjutnya</strong> <br />
                                        <Link to={'post/' + next.node.slug}>
                                            { next && next.node.title } &nbsp;
                                            <Icon type="right" />
                                        </Link>
                                    </div> }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Layout>
        )
    }
}
    
export default Article

export const pageQuery = graphql`
    query ArticleQuery($slug: String!) {
        contentfulArticle(slug: { eq: $slug }) {
            id
            slug
            title
            author
            tags
            image {
                fluid(maxWidth: 600) {
                    ...GatsbyContentfulFluid
                }
                id
                file {
                    url
                    fileName
                    contentType
                }
            }
            content {
                id
                content
            }
            createdAt(formatString: "DD MMM YYYY")
        }
    }
`