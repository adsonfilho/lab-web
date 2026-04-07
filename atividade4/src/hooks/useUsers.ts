import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { addUser, removeUser } from '../features/userSlice'

export function useUsers() {
  const users = useSelector((state: RootState) => state.users.users)
  const dispatch = useDispatch()

  return {
    getUsers: () => users,
    addUser: (user: string) => dispatch(addUser(user)),
    removeUser: (user: string) => dispatch(removeUser(user))
  }
}