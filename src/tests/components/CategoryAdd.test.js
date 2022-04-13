import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { AddCategory } from '../../components/AddCategory';

describe('Testing CategoryAdd', () => { 

    const setCategories = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('should show component correctly', () => { 
        const component = renderer.create(<AddCategory setCategories={setCategories}/>);

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot(); 
     });

     test('should change input', () => { 
        const value = 'Hello World';
        
        render(<AddCategory setCategories={setCategories}/>);

        const input = screen.getByLabelText('Category');

        fireEvent.change(input, {target: {value}})

        fireEvent.keyPress(input,)

        expect(input.value).toBe(value);
        
     });

     test('should not submit', () => {         
        render(<AddCategory setCategories={setCategories}/>);

        const form = screen.getByTestId('form');

        fireEvent.submit(form);

        expect(setCategories).not.toBeCalled();
     });

     test('should submit', () => {         
        render(<AddCategory setCategories={setCategories}/>);

        const value = 'Pepe Viyuela';

        const input = screen.getByLabelText('Category');
        
        fireEvent.change(input, {target: {value}})
        
        const form = screen.getByTestId('form');

        fireEvent.submit(form);

        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(input.value).toBe('');
     });

 });