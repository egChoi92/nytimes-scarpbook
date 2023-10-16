import { initialFilterState } from 'constants/filter';
import { FilterType } from 'types/filter';
import { create } from 'zustand';

interface FilterStoreType {
	filter: FilterType;
	setFilter: (filter: FilterType) => void;
}
export const filterStore = create<FilterStoreType>()((set) => ({
	filter: initialFilterState,
	setFilter: (filter: FilterType) => set({ filter }),
}));
