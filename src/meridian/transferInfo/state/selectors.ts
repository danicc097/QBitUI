import { GlobalState } from 'meridian/state/types';

export const selectTransferInfo = (state: GlobalState) =>
    state.transferInfoState.fetch.data;
