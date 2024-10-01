import {create} from 'zustand'
const local_api = "http://localhost:3000";
const server_api = "https://ai-ease.vercel.app"


export const useStore = create((set) => ({
    url : server_api,
    details : {},
    dataAvailable : false,
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
    addDetails : (data) =>set({ details : data  , dataAvailable : true})

  }))
