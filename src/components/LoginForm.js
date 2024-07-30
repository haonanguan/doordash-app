import { Button, Form, Input, message, Modal } from "antd";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { login } from "../utils";
import SignupForm from "./SignupForm";

class LoginForm extends React.Component {
    state = {
        loading: false,
        displayModal: false,
    };

    signinOnclick = () => {
        this.setState({
            displayModal: true,
        });
    };
    handleCancel = () => {
        this.setState({
            displayModal: false,
        });
    };

    onFinish = (data) => {
        this.setState({
            loading: true,
        });
        login(data)
            .then(() => {
                message.success(`Login Successful`);
                this.props.onSuccess();
            })
            .catch((err) => {
                message.error(err.message);
            })
            .finally(() => {
                this.setState({
                    loading: false,
                    displayModal: false,
                });
            });
    };

    render = () => {
        return (
            <>
                <Button shape="round" type="primary" onClick={this.signinOnclick}>
                    Login
                </Button>
                <Modal
                    title="Register"
                    open={this.state.displayModal}
                    onCancel={this.handleCancel}
                    footer={null}
                    destroyOnClose={true}
                >
                    <Form
                        name="normal_login"
                        onFinish={this.onFinish}
                        style={{
                            width: 300,
                            margin: "auto",
                        }}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: "Please input your Username!" }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: "Please input your Password!" }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>

                        <Form.Item>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={this.state.loading}
                                >
                                    Login
                                </Button>
                                <SignupForm />
                            </div>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    };
}

export default LoginForm;
