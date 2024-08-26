import {useEffect, useRef, useState} from 'react'
import './App.scss'
import avatar from './assets/react.svg'
import _ from 'loadsh'
import classNames from 'classnames'
import {v4 as uuid} from 'uuid'
import dayjs from "dayjs";
import axios from "axios";

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const list = [
    {
        // 评论id
        rpid: 3,
        // 用户信息
        user: {
            uid: '13258165',
            avatar: '',
            uname: '周杰伦',
        },
        // 评论内容
        content: '哎哟，不错哦',
        // 评论时间
        ctime: '10-18 08:15',
        like: 100,
    },
    {
        rpid: 2,
        user: {
            uid: '36080105',
            avatar: '',
            uname: '许嵩',
        },
        content: '我寻你千百度 日出到迟暮',
        ctime: '11-13 11:29',
        like: 88,
    },
    {
        rpid: 1,
        user: {
            uid: '30009257',
            avatar,
            uname: '黑马前端',
        },
        content: '学前端就来黑马',
        ctime: '10-19 09:00',
        like: 66,
    },
]
// 当前登录用户信息
const user = {
    // 用户id
    uid: '30009257',
    // 用户头像
    avatar,
    // 用户昵称
    uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
    {type: 'hot', text: '最热'},
    {type: 'time', text: '最新'},
]

const useGetList = () => {
    const [commonList, setCommonList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3004/list').then((res) => {
            setCommonList(res.data)
        })
    }, [])
    return {
        commonList, setCommonList
    }
}

const Item = ({item,handleList}) => {
    return (<div className="reply-item">
        {/* 头像 */}
        <div className="root-reply-avatar">
            <div className="bili-avatar">
                <img
                    className="bili-avatar-img"
                    alt=""
                    src={item.user.avatar}
                />
            </div>
        </div>

        <div className="content-wrap">
            {/* 用户名 */}
            <div className="user-info">
                <div className="user-name">{item.user.uname}</div>
            </div>
            {/* 评论内容 */}
            <div className="root-reply">
                <span className="reply-content">{item.content}</span>
                <div className="reply-info">
                    {/* 评论时间 */}
                    <span className="reply-time">{item.ctime}</span>
                    {/* 评论数量 */}
                    <span className="reply-time">点赞数:{item.like}</span>
                    {user.uid === item.user.uid && <span className="delete-btn" onClick={() => handleList(item.rpid)}>删除</span>}
                </div>
            </div>
        </div>
    </div>)
}


const App = () => {
    const {commonList, setCommonList} = useGetList()
    const [type, setType] = useState('hot')
    const [content, setContent] = useState('')
    const inputRef = useRef(null)
    const handleList = (id) => {
        setCommonList(commonList.filter(item => id !== item.rpid))
    }
    const handleTab = (type) => {
        setType(type)
        type === 'hot' ? setCommonList(_.orderBy(commonList, 'like', 'asc')) : setCommonList(_.orderBy(commonList, 'ctime', 'desc'))
    }
    const handlePubSub = () => {
        setCommonList([
            ...commonList,
            {
                rpid: uuid(),
                user: {
                    uid: '30009257',
                    avatar,
                    uname: '黑马前端',
                },
                content: content,
                ctime: dayjs().format('MM-DD HH:mm'),
                like: 66,
            }
        ])
        setContent('')
        inputRef.current.focus()
    }
    return (
        <div className="app">
            {/* 导航 Tab */}
            <div className="reply-navigation">
                <ul className="nav-bar">
                    <li className="nav-title">
                        <span className="nav-title-text">当前评论</span>
                        {/* 评论数量 */}
                        <span className="total-reply">{commonList.length} 条</span>
                    </li>
                    <li className="nav-sort">
                        {/* 高亮类名： active */}
                        {tabs.map((item, index) => (
                            <span key={item.type}
                                // className={`nav-item ${item.type === type && 'active'}`}
                                  className={classNames('nav-item', {active: type === item.type})}
                                  onClick={() => handleTab(item.type)}>{item.text}</span>
                        ))}
                    </li>
                </ul>
            </div>

            <div className="reply-wrap">
                {/* 发表评论 */}
                <div className="box-normal">
                    {/* 当前用户头像 */}
                    <div className="reply-box-avatar">
                        <div className="bili-avatar">
                            <img className="bili-avatar-img" src={avatar} alt="用户头像"/>
                        </div>
                    </div>
                    <div className="reply-box-wrap">
                        {/* 评论框 */}
                        <textarea
                            className="reply-box-textarea"
                            placeholder="发一条友善的评论"
                            ref={inputRef}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        {/* 发布按钮 */}
                        <div className="reply-box-send">
                            <div className="send-text" onClick={handlePubSub}>发布</div>
                        </div>
                    </div>
                </div>
                {/* 评论列表 */}
                <div className="reply-list">
                    {/* 评论项 */}
                    {
                        commonList.map(item => (
                            <Item item={item} key={item.rpid} handleList={handleList} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default App
