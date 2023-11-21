import { create } from "zustand";
import { produce } from "immer";
import {persist, createJSONStorage} from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage";
import BeansData from "../data/BeansData";
import CoffeeData from "../data/CoffeeData";

export const useStore = create(
    persist(
        (set, get) => ({
            CoffeList: CoffeeData,
            BeansList: BeansData,
            CartPrice: 0,
            FavouritesList: [],
            CartList: [],
            OrderHistoryList: [],
        }),
        {
            name: "cooffee-store",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)