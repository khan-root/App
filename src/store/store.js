import {create} from 'zustand'
import userViewModal from "../viewModal/users_view_modal/UserViewModal";
const useStore = create((set, get)=>({
    ...userViewModal(set,get)
}))

export default useStore