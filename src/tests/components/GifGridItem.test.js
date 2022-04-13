import React from 'react';
import renderer from 'react-test-renderer';
import { GifGridItem } from '../../components/GifGridItem';

describe('Testing GifGridItem', () => { 

    test('should show component correctly', () => { 
        const tree = renderer.create(<GifGridItem title='Hola' url='https://'/>).toJSON();

        expect(tree).toMatchSnapshot(); 
     })
 })