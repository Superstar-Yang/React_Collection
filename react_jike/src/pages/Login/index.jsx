import React from 'react';
import './index.scss'
import {Card, Form, Input, Button, message} from "antd";
import {useDispatch} from "react-redux";
import {fetchLogin} from "@/store/modules/user.js";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async(value) => {
        await dispatch(fetchLogin(value))
        navigate('/')
        message.success('登录成功')
    }
    return (
        <div className="login">
            <Card className="login_container">
                <img src="~@/assets/react.svg" alt="" className="login_logo"/>
                <Form onFinish={onFinish} validateTrigger='onBlur'>
                    <Form.Item name='mobile' rules={[{required: true, message: '请输入您的手机号'}, {
                        pattern: /^1[3-9]\d{9}$/,
                        message: '请输入正确手机号格式'
                    }]}>
                        <Input size="lager" placeholder="请输入手机号"></Input>
                    </Form.Item>
                    <Form.Item name='code' rules={[{required: true, message: '请输入您的验证码'}]}>
                        <Input size="lager" placeholder="请输入验证码"></Input>
                    </Form.Item>
                    <Button htmlType='submit' type='primary' size='large' block>登录</Button>
                </Form>
            </Card>
        </div>
    );
};

export default Login;