import useData from "./useData";

interface DropDownPlatform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => useData<DropDownPlatform>('/platforms/lists/parents');

export default usePlatform;