import { useSelector } from "react-redux";
import {
  counterSelector,
  minus,
  plus,
} from "./feature/presentation/store/slices/conterSlice";
import {
  getPhotoData,
  photoSelector,
} from "./feature/presentation/store/slices/photoSlice";
import { useAppDispatch } from "./feature/presentation/store/store";

type Props = {};

export default function App({}: Props) {
  const dispatch = useAppDispatch();
  const counterReducer = useSelector(counterSelector);
  const photoReducer = useSelector(photoSelector);

  const onPlus = () => {
    dispatch(plus());
  };

  const onMinus = () => {
    dispatch(minus());
  };

  const onGetPhotos = () => {
    dispatch(getPhotoData());
  };

  return (
    <div>
      <h1>Counter</h1>
      <span>
        <button onClick={onPlus}>Plus</button>
        {counterReducer.counter}
        <button onClick={onMinus}>Minus</button>
      </span>
      <hr />
      <span>
        <h1>Get API</h1>
        <button onClick={onGetPhotos}>Get Data</button>
      </span>
      <p>
        {photoReducer.isLoading
          ? "Loading"
          : photoReducer.error
          ? photoReducer.error
          : photoReducer.data.length === 0
          ? "Not found data."
          : JSON.stringify(photoReducer.data)}
      </p>
    </div>
  );
}
