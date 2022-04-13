import React from 'react';
import renderer from 'react-test-renderer';
import { GifExpertApp } from '../GifExpertApp';
import { waitFor, render, screen } from '@testing-library/react';

describe('Testing GifExpertApp', () => { 

    test('should show component correctly', () => { 
        const tree = renderer.create(<GifExpertApp />).toJSON();

        expect(tree).toMatchSnapshot(); 
    });

    test('should show grid categories ', async () => { 
        const categories = ['Kyojin', 'Kimetsu'];

        render(<GifExpertApp defaultCategories={categories}/>);

        const gridCategories = await waitFor(() => screen.getAllByRole('GifGrid'));

        expect(gridCategories.length).toBe(categories.length);
    });
 });