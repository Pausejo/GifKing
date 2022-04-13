import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Testing useFetchGifs', () => { 

    test('should return original value', () => { 

        const { result } = renderHook(() => useFetchGifs('One Punch') );

        const {data, loading} = result.current;

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('should return image array', async() => { 
        const { result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch') );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(5);
        expect(loading).not.toBeTruthy();
    });
     
 });