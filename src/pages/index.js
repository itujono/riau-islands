import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button, Card, Avatar, Row, Col } from 'antd'
import "../style/index.less";
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({ data: { allContentfulArticle: article } }) => (
	<Layout>
		<SEO title="Home" keywords={['gatsby', 'application', 'react']} />
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>

		<Row gutter={16}>
			{ article.edges.map(({ node }) => (
				<Col span={6} key={node.id}>
					<Link to={`post/${node.slug}`}>
						<Card
							hoverable
							key={node.id}
							cover={ <img alt="example" src={node.image ? node.image.file.url : "http://source.unsplash.com/random/"} /> }
						>
							<Card.Meta
								avatar={ <Avatar src={""} /> }
								title={node.title}
								description={node.createdAt}
							/>
						</Card>
					</Link>
				</Col>
			))}
		</Row>

		<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
			<Image />
		</div>
		<Button type="primary">
			<Link to="/page-2/">Go to page 2</Link>
		</Button>
	</Layout>
)

export const IndexQuery = graphql`
  query Index {
    allContentfulArticle {
      edges {
        node {
		  id
		  slug
          content {
            id
            content
          }
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
          createdAt(formatString: "DD MMM YYYY")
        }
      }
    }
  }
`

export default IndexPage
