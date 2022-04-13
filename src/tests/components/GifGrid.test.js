import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid', () => { 

    const setCategories=jest.fn();
    const category = 'Viyuela';

    test('should show component correctly', () => { 

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const tree = renderer.create(<GifGrid category={category} setCategories={setCategories}/>).toJSON();

        expect(tree).toMatchSnapshot(); 
    });

    test('should show items when images are loaded', () => { 
        
        const gifs = [{
            id: '1',
            url: 'https://mockiando.com/test.gif',
            title: 'Mock'
        },{
            id: '2',
            url: 'https://mockiando.com/test2.gif',
            title: 'Mock2'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        render(<GifGrid category={category} setCategories={setCategories}/>);

        expect(screen.queryByTestId("loading")).toBeNull();
        
        expect(screen.getAllByRole("img").length).toBe(gifs.length);

    });
 })