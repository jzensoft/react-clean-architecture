import { useSelector } from 'react-redux'
import { counterSelector, minus, plus } from './presentation/store/slices/conterSlice'
import { getPhotoData, photoSelector } from './presentation/store/slices/photoSlice'
import { useAppDispatch } from './presentation/store/store'

type Props = {}

export default function App({ }: Props) {
  const dispatch = useAppDispatch()
  const counterReducer = useSelector(counterSelector)
  const photoReducer = useSelector(photoSelector)

  return (
    <div>
      <h1>Counter</h1>
      <span>
        <button onClick={() => {
          dispatch(plus())
        }}>Plus</button>
        {counterReducer.counter}
        <button onClick={() => {
          dispatch(minus())
        }}>Minus</button>
      </span>
      <hr />
      <h1>Get API</h1>
      <p>
        {photoReducer.isLoading ? "Loading" : photoReducer.error ? photoReducer.error : JSON.stringify(photoReducer.data)}
      </p>
      <button onClick={() => {
        dispatch(getPhotoData())
      }}>Get Data</button>
    </div>
  )
}