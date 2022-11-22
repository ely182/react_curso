

import {render, screen, userEvent} from '@testing-library/react';
import {Button} from '.';

describe('<Button />', () => {
   test('should render the button with the text "Load more posts"', () => {
        render (<Button text="Load more posts"/>);

        expect.assertions(1);

        const button = screen.getByRole('button', { nome: /Load more posts/i });
        expect(button).toHaveAttribute('class','button');
   });

   test('should call function on button click', () => {
    const fn = jest.fn();
    render (<Button text="Load more posts" onClick={fn} />);


    const button = screen.getByRole('button', { nome: /Load more posts/i });

    userEvent.click(button);


   expect(fn).toHaveBeenCalledTimes(1);

});

 test('should be disabled when disable is true', () => {
        render (<Button text="Load more posts" disabled={true}/>);
        const button = screen.getByRole('button', { nome: /Load more posts/i });
        expect(button).toBeDisabled();
   });
   test('should be disabled when disable is false', () => {
    render (<Button text="Load more posts" disabled={true}/>);
    const button = screen.getByRole('button', { nome: /Load more posts/i });
    expect(button).toBeEnabled();
});
test('should match snapshot', () => {
   const fn = jest.fn();
   const {container} = render (<Button text="Load more posts" disabled={false} onClick={fn} />);
   // eslint-disable-next-line testing-library/no-node-access
   expect( container.firstChild ).toMatchSnapshot();
});


   });
