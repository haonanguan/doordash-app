import { Button, Form, Input, message, Modal } from "antd";
import { useState } from "react";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { signup } from "../utils";

const SignupForm = () => {
    const [displayModal, setDisplayModal] = useState(false);

    const handleCancel = () => {
        setDisplayModal(false);
    };

    const signupOnclick = () => {
        setDisplayModal(true);
    };

    const onFinish = (data) => {
        signup(data)
            .then(() => {
                setDisplayModal(false);
                message.success(`Successfully signed up`);
            })
            .catch((err) => {
                message.error(err.message);
            })
            .finally(() => {
                setDisplayModal(false);
            });
    };

    return (
        <>
            <Button shape="round" type="primary" onClick={signupOnclick}>
                Register
            </Button>
            <Modal
                title="Register"
                open={displayModal}
                onCancel={handleCancel}
                footer={null}
                destroyOnClose={true}
            >
                <Form
                    name="normal_register"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    preserve={false}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: "Please input your email!" }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                        name="first_name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your first name!",
                            },
                        ]}
                    >
                        <Input placeholder="firstname" />
                    </Form.Item>
                    <Form.Item
                        name="last_name"
                        rules={[{ required: true, message: "Please input your last name!" }]}
                    >
                        <Input placeholder="lastname" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
// class SignupForm extends React.Component {
//     state = {
//         displayModal: false,
//     };
//     handleCancel = () => {
//         this.setState({
//             displayModal: false,
//         });
//     };

//     signupOnClick = () => {
//         this.setState({
//             displayModal: true,
//         });
//     };

//     onFinish = (data) => {
//         signup(data)
//             .then(() => {
//                 this.setState({
//                     displayModal: false,
//                 });
//                 message.success(`Successfully signed up`);
//             })
//             .catch((err) => {
//                 message.error(err.message);
//             });
//     };

//     render = () => {
//         return (
//             <>
//                 <Button shape="round" type="primary" onClick={this.signupOnClick}>
//                     Register
//                 </Button>
//                 <Modal
//                     title="Register"
//                     open={this.state.displayModal}
//                     onCancel={this.handleCancel}
//                     footer={null}
//                     destroyOnClose={true}
//                 >
//                     <Form
//                         name="normal_register"
//                         initialValues={{ remember: true }}
//                         onFinish={this.onFinish}
//                         preserve={false}
//                     >
//                         <Form.Item
//                             name="email"
//                             rules={[{ required: true, message: "Please input your email!" }]}
//                         >
//                             <Input prefix={<UserOutlined />} placeholder="Email" />
//                         </Form.Item>
//                         <Form.Item
//                             name="password"
//                             rules={[{ required: true, message: "Please input your password!" }]}
//                         >
//                             <Input prefix={<LockOutlined />} placeholder="Password" />
//                         </Form.Item>
//                         <Form.Item
//                             name="first_name"
//                             rules={[{ required: true, message: "Please input your first name!" }]}
//                         >
//                             <Input placeholder="firstname" />
//                         </Form.Item>
//                         <Form.Item
//                             name="last_name"
//                             rules={[{ required: true, message: "Please input your last name!" }]}
//                         >
//                             <Input placeholder="lastname" />
//                         </Form.Item>

//                         <Form.Item>
//                             <Button type="primary" htmlType="submit">
//                                 Register
//                             </Button>
//                         </Form.Item>
//                     </Form>
//                 </Modal>
//             </>
//         );
//     };
// }

export default SignupForm;
