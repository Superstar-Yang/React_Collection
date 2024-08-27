import {Layout, Menu, Popconfirm} from 'antd'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {clearInfo, fetchUserInfo} from "@/store/modules/user.js";
import {useDispatch, useSelector} from "react-redux";

const {Header, Sider} = Layout

const items = [
    {
        label: '首页',
        icon: <HomeOutlined/>,
        key: '/home'
    },
    {
        label: '文章管理',
        icon: <DiffOutlined/>,
        key: '/article'
    },
    {
        label: '创建文章',
        icon: <EditOutlined/>,
        key: '/publish'
    },
]

const GeekLayout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleMenu = (route) => {
        const path = route.key
        navigate(path)
    }
    const location = useLocation()
    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [dispatch]);
    const name = useSelector((state) => state.user.userInfo.name)
    const handleConfirm  = ()=>{
        dispatch(clearInfo())
        navigate('/login')
    }
    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <div className="user-info">
                    <span className="user-name">{name}</span>
                    <span className="user-logout">
                        <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={handleConfirm}>
                          <LogoutOutlined/> 退出
                        </Popconfirm>
                  </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        selectedKeys={location.pathname}
                        style={{height: '100%', borderRight: 0}}
                        items={items}
                        onClick={handleMenu}
                    />
                </Sider>
                <Layout className="layout-content" style={{padding: 20}}>
                    <Outlet/>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default GeekLayout