import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { container } from "../../../di/injection_container"
import { PhotoRepsitory } from "../../../domain/photoRepository"
import { IntjectionKey } from "../../../di/injection_key"
import { Photo } from "../../../data/model/photo"

const photoRepository = container.get<PhotoRepsitory>(IntjectionKey.PHOTOREPOSITORY)

type PhotoState = {
    isLoading: boolean,
    error: string | null,
    data: Photo[]
}

const initState: PhotoState = {
    isLoading: false,
    error: null,
    data: []
}

export const getPhotoData = createAsyncThunk("photo/get_data", async () => {
    return await photoRepository.getPhotos()
})

const photoSlice = createSlice({
    name: "photo",
    initialState: initState,
    reducers: {},
    extraReducers: (buidler) => {
        buidler.addCase(getPhotoData.pending, (state, action) => {
            state.isLoading = true
        })
        buidler.addCase(getPhotoData.fulfilled, (state, action) => {
            state.isLoading = false
            if (action.payload.isSuccess) {
                state.data = action.payload.data!
            } else {
                state.error = action.payload.error!
            }
        })
        buidler.addCase(getPhotoData.rejected, (state, action) => {
            state.isLoading = false
            state.error = `${action.error}`
        })
    }
})

export const { } = photoSlice.actions
export const photoSelector = (store: RootState) => store.photoReducer
export default photoSlice.reducer
