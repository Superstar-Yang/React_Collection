import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select, message
} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import './index.scss'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import {useEffect, useState} from "react";
import {getArticleDetailApi, submitArticleApi, updateArticleDetailApi} from "@/api/article.js";
import {useArticle} from "@/hooks/article.js";

const {Option} = Select

const Publish = () => {
    const [params] = useSearchParams()
    const articleId = params.get('id')
    const {channelList} = useArticle()
    const [fileList, setFileList] = useState([])
    const [radioType, setRadioType] = useState(0)
    const navgate = useNavigate()
    const handleFinish = async (formValue) => {
        fileList.length !== radioType && message.warning('封面数量与类型数量不匹配')
        const {title, content, channel_id} = formValue
        const postData = {
            title,
            content,
            cover: {
                type: radioType,
                images: fileList.map(item => item.response ? item.response.data.url : item.url)
            },
            channel_id
        }
        articleId ? await updateArticleDetailApi({...postData,id:articleId}) : await submitArticleApi(postData)
        navgate('/article')
        form.resetFields()
    }
    const [form] = Form.useForm()
    useEffect(() => {
        articleId && getArticleDetailApi(articleId).then(res => {
            const {data} = res
            form.setFieldsValue({...data, type: data.cover.type})
            setFileList(data.cover.images.map(url => {
                return {url}
            }))
            setRadioType(data.cover.type)
        })
    }, [articleId, form])
    return (
        <div className="publish">
            <Card
                title={
                    <Breadcrumb separator=">" items={[
                        {
                            title: <Link to={'/home'}>首页</Link>,
                        },
                        {
                            title: '发布文章',
                        },
                    ]}/>
                }
            >
                <Form form={form}
                      labelCol={{span: 4}}
                      wrapperCol={{span: 16}}
                      initialValues={{type: radioType}}
                      onFinish={handleFinish}
                >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{required: true, message: '请输入文章标题'}]}
                    >
                        <Input placeholder="请输入文章标题" style={{width: 400}}/>
                    </Form.Item>
                    <Form.Item
                        label="频道"
                        name="channel_id"
                        rules={[{required: true, message: '请选择文章频道'}]}
                    >
                        <Select placeholder="请选择文章频道" style={{width: 400}}>
                            {channelList.map(item => (<Option key={item.id} value={item.id}>{item.name}</Option>))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="封面">
                        <Form.Item name="type">
                            <Radio.Group onChange={(e) => setRadioType(e.target.value)}>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {
                            radioType > 0 && <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList
                                action={'http://geek.itheima.net/v1_0/upload'}
                                onChange={(file) => {
                                    setFileList(file.fileList)
                                }}
                                fileList={fileList}
                                maxCount={radioType}
                            >
                                <div style={{marginTop: 8}}>
                                    <PlusOutlined/>
                                </div>
                            </Upload>
                        }
                    </Form.Item>
                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{required: true, message: '请输入文章内容'}]}
                    >
                        <ReactQuill
                            className="publish-quill"
                            theme="snow"
                            placeholder="请输入文章内容"
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 4}}>
                        <Space>
                            <Button size="large" type="primary" htmlType="submit">
                                发布文章
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Publish