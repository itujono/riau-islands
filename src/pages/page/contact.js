import React, { Component } from 'react'
import Layout from '../../components/layout';
import { Row, Col, Form, Input, Button } from 'antd';

class Contact extends Component {

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <Layout>
                <div className="contact-page">
                    <Row>
                        <Col span={10} offset={8}>
                            <Row className="heading">
                                <Col>
                                    <h2>Contact Kami</h2>
                                    Ya mungkin kamu ada yang mau disampein. Gapapa sih ya kan.
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                        <input type="hidden" name="form-name" value="contact" />
                                        <Form.Item label="Nama kamu" colon={false}>
                                            <Input type="text" name="name" placeholder="Misal: Gunarso Sastra" />
                                        </Form.Item>
                                        <Form.Item label="Email kamu" colon={false}>
                                            <Input type="email" name="email" placeholder="Misal: gunawan@putra.com" />
                                        </Form.Item>
                                        <Form.Item label="Pesan kamu" colon={false}>
                                            <Input.TextArea rows={3} name="message" placeholder="Apa yang mau kamu curahkan di sini?" />
                                        </Form.Item>
                                        <Button htmlType="submit" type="primary" icon="plus">Submit</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Layout>
        )
    }
}

export default Contact