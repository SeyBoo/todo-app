import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import TodoSlice from '../module/todo/store/reducers';

const store = configureStore({
	reducer: {
		[TodoSlice.name]: TodoSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export default store;
