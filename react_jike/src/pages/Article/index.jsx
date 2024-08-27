import {Link, useNavigate} from 'react-router-dom'
import {Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Table, Tag, Space, Popconfirm} from 'antd'
// import 'moment/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN'
import './index.scss'
import {useArticle} from "@/hooks/article.js";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import {delArticleListApi, getArticleListApi} from "@/api/article.js";
import log from "eslint-plugin-react/lib/util/log.js";
import error from  '@/assets/error.gif'
const {Option} = Select
const {RangePicker} = DatePicker
const Article = () => {
    const navigate = useNavigate()
    const {channelList} = useArticle()
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)
    const state = {1: <Tag color="orange">未审核</Tag>, 2: <Tag color="green">审核通过</Tag>}
    const columns = [
        {
            title: '封面',
            dataIndex: 'cover',
            width: 120,
            render: cover => {
                return <img src={cover.images[0] || error} width={80} height={60} alt=""/>
            }
        },
        {
            title: '标题',
            dataIndex: 'title',
            width: 220
        },
        {
            title: '状态',
            dataIndex: 'status',
            render: data => state[data]
        },
        {
            title: '发布时间',
            dataIndex: 'pubdate'
        },
        {
            title: '阅读数',
            dataIndex: 'read_count'
        },
        {
            title: '评论数',
            dataIndex: 'comment_count'
        },
        {
            title: '点赞数',
            dataIndex: 'like_count'
        },
        {
            title: '操作',
            render: data => {
                return (
                    <Space size="middle">
                        <Button type="primary" shape="circle" icon={<EditOutlined/>}
                                onClick={() => navigate(`/publish?id=${data.id}`)}/>
                        <Popconfirm
                            title="警告"
                            description="确认删除这条文章吗？"
                            onConfirm={() => handleConfirm(data.id)}
                            okText="确认"
                            cancelText="取消"
                        >
                            <Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined/>}
                            />
                        </Popconfirm>
                    </Space>
                )
            }
        }
    ]
    const [postData, setPostData] = useState({page: 1, per_page: 4})
    const data = [
        {
            id: '8218',
            comment_count: 0,
            cover: {
                images: ['http://geek.itheima.net/resources/images/15.jpg'],
            },
            like_count: 0,
            pubdate: '2019-03-11 09:00:00',
            read_count: 2,
            status: 2,
            title: 'wkwebview离线化加载h5资源解决方案'
        }
    ]
    useEffect(() => {
        getArticleListApi(postData).then(res => {
            setList(res.data.results)
            setTotal(res.data.total_count)
        })
    }, [postData]);
    const handleForm = (val) => {
        const {state, date, channel_id} = val
        setPostData({
            ...postData,
            channel_id,
            state,
            begin_pubdate: date[0].format('YYYY-MM-DD'),
            end_pubdate: date[1].format('YYYY-MM-DD'),
        })
    }

    const handleConfirm = async (id) => {
        await delArticleListApi(id)
        setPostData({...postData})
    }

    return (
        <div>
            <Card
                title={
                    <Breadcrumb separator=">"
                                items={[
                                    {
                                        title: <Link to={'/home'}>首页</Link>
                                    },
                                    {
                                        title: '内容管理'
                                    }
                                ]}
                    />
                }
                style={{marginBottom: 20}}
            >
                <Form initialValues={{status: '',selectVal:'推荐'}} onFinish={handleForm}>
                    <Form.Item label="状态" name="status">
                        <Radio.Group>
                            <Radio value={''}>全部</Radio>
                            <Radio value={0}>草稿</Radio>
                            <Radio value={1}>待审核</Radio>
                            <Radio value={2}>审核通过</Radio>
                            <Radio value={3}>审核失败</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="频道" name="channel_id">
                        <Select
                            placeholder="请选择文章频道"
                            style={{width: 120}}
                        >
                            {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item label="日期" name="date">
                        {/* 传入locale属性 控制中文显示*/}
                        <RangePicker locale={locale}></RangePicker>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{marginLeft: 80}}>
                            筛选
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <div>
                <Card title={`根据筛选条件共查询到 ${total} 条结果：`}>
                    <Table rowKey="id" columns={columns} dataSource={list} pagination={{
                        total,
                        pageSize: postData.per_page,
                        onChange: (page) => setPostData({...postData, page})
                    }
                    }/>
                </Card>
            </div>
        </div>
    )
}

export default Article