import {createSlice} from "@reduxjs/toolkit";
import {getToken, setToken as _setToken, removeToken, request} from "@/utils";
import {getProfileApi, loginApi} from "@/api/user.js";

const userStore = createSlice({
    name: "user",
    initialState: {
        token: getToken() || '',
        userInfo:{}
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            _setToken(action.payload);
        },
        setUserInfo: (state, action)=>{
            state.userInfo = action.payload;
        },
        clearInfo: (state, action)=>{
            state.userInfo = {}
            state.token = ''
            removeToken()
        }
    }
})
const {setToken,setUserInfo,clearInfo} = userStore.actions;
const reducer = userStore.reducer
const fetchLogin = (data) => {
    return async (dispatch) => {
        const res = await loginApi(data)
        dispatch(setToken(res.data.token))
    }
}
const fetchUserInfo = ()=>{
    return async (dispatch) => {
        const res = await getProfileApi();
        dispatch(setUserInfo(res.data));
    }
}
export {fetchLogin,fetchUserInfo,clearInfo}
export default reducer