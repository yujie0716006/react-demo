/*
操作状态的一些行为，通过dispatch分发行为
* */
import {INCREASE, DECREASE} from "./actions-types";

export const increase = number => ({type: INCREASE, data: number})
export const decrease = number => ({type: DECREASE, data: number})