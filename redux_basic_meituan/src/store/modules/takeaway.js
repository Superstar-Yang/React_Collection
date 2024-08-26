import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
    name: "takeaway",
    initialState: {
        foodsList: [],
        activeIndex: 0,
        carList: []
    },
    reducers: {
        setFoodsList: (state, action) => {
            state.foodsList = action.payload
        },
        setActiveIndex: (state, action) => {
            state.activeIndex = action.payload
        },
        setCarList: (state, action) => {
            const item = state.carList.find(item => item.id === action.payload.id)
            if (item) {
                item.count++
            } else {
                state.carList.push(action.payload)
            }
        },
        incCar: (state, action) => {
            const item = state.carList.find(item => item.id === action.payload.id)
            item.count >= 0 && item.count++
        },
        decCar: (state, action) => {
            const item = state.carList.find(item => item.id === action.payload.id)
            item.count > 0 && item.count--
        },
        clearCarList: (state, action) => {
            state.carList = []
        }
    }
})
const {setFoodsList, setActiveIndex, setCarList, clearCarList,incCar,decCar} = foodStore.actions
const getFoodsList = () => {
    return async (dispatch) => {
        const {data} = await axios.get('http://localhost:3001/takeaway')
        dispatch(setFoodsList(data))
    }
}
const reducer = foodStore.reducer
export {getFoodsList, setActiveIndex, setCarList, clearCarList,incCar,decCar}
export default reducer
