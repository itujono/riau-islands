import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon, Row, Col } from 'antd';

const Header = ({ siteTitle }) => (
	<div style={{ background: 'rebeccapurple', marginBottom: '1.45rem', }} >
		<div style={{ margin: '0 auto', maxWidth: 960, padding: '1.45rem 1.0875rem', }} >
			<Row>
				<Col span={8}>
					<Link to="/" style={{ color: 'white', textDecoration: 'none', }} >
						{siteTitle}
					</Link>
				</Col>
				<Col span={8} offset={8} style={{ textAlign: 'right' }}>
					<Link to="/page/contact">
						<Icon type="user" /> &nbsp;
						Contact
					</Link>
				</Col>
			</Row>
		</div>
	</div>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: '',
}

export default Header
