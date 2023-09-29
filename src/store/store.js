import {create} from 'zustand'
import userViewModal from '../viewModal/usersViewModel/Users'
const useStore = create((set, get)=>({
    ...userViewModal(set,get)
}))

export default useStore