import React, { Component } from 'react'
import { graphql, Link } from "gatsby";
import { Row, Col, List, Button, Icon } from 'antd';



class Article extends Component {
    render() {
        const { title, image, content, createdAt, author } = this.props.data.contentfulArticle
        const { next, prev } = this.props.pageContext

        return (
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
                                <img src={image.file.url} alt={image.file.fileName} />
                            </Col>
                        </Row>
                        <Row className="content">
                            <Col>
                                { content.content }
                            </Col>
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
            image {
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