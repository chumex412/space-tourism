import { createSlice } from '@reduxjs/toolkit';
import { NavlinksStateType } from '../../domain/entity/layout';

const initialState: NavlinksStateType = {
	show: false
};

const navLinksSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		showNavLinks(state) {
			state.show = true;
		},
		hideNavLinks(state) {
			state.show = false;
		}
	}
});

export const { showNavLinks, hideNavLinks } = navLinksSlice.actions;

export type showNavLinksType = ReturnType<typeof showNavLinks>;

export default navLinksSlice.reducer;
