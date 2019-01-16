
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const articlePage = path.resolve('src/templates/article.js')
        resolve(graphql(`
            {
                allContentfulArticle(limit: 20) {
                    edges {
                        node {
                            id
                            slug
                            title
                        }
                    }
                }
            }
        `).then(response => {
                if (response.errors) {
                    reject(response.errors)
                }

                const posts = response.data.allContentfulArticle.edges

                posts.forEach(({ node }, index) => {
                    createPage({
                        path: 'post/' + node.slug,
                        component: articlePage,
                        context: {
                            slug: node.slug,
                            prev: index === 0 ? null : posts[index - 1],
                            next: response.length - 1 ? null : posts[index + 1]
                        }
                    })
                });
                return
            })
        )
    })
}