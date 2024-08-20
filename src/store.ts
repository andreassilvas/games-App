import { create } from "zustand";
export interface GameQuery {
    genreId?: number;
    genreName?: string;
    platformId?: number;
    platformName?: string;
    sortOrder?: string;
    searchText?: string;
    gameName?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setgenreName: (genreName: string) => void;
    setPlatformId: (platformId: number) => void;
    setplatformName: (platformName: string) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatformId: (platformId) => set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setSortOrder: (sortOrder) => set(store => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
    setgenreName: (genreName) => set(store => ({ gameQuery: { ...store.gameQuery, genreName } })),
    setplatformName: (platformName) => set(store => ({ gameQuery: { ...store.gameQuery, platformName } })),
}));

export default useGameQueryStore;