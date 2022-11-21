/* eslint-disable testing-library/no-node-access */
import {Posts} from '.';
// import {screen} from
const {render, screen} = require('@testing-library/react');


const props = {
    posts:[
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            cover:'imag/imag1.png'
        },
        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            cover:'imag/imag2.png'
        },
        {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            cover:'imag/imag3.png'
        },
    ]
}

describe('<Posts />',()=>{
    it('should render Posts', () => {
       render( <Posts {...props} />);

       expect(screen.getAllByRole('heading',{name:/title/i})).toHaveLength(3);
       expect(screen.getAllByRole('img',{name:/title/i})).toHaveLength(3);
       expect(screen.getAllByText(/body/i)).toHaveLength(3);     
    });

    
    it('should not render posts', () => {
        render(<posts />);
        expect(screen.queryByRole('heading',{name:/title/i})).not.toBeInTheDocument();
        
    });
    
    it('should match snapshot', () => {
        const {container} = render( <Posts {...props} />);
         expect(container.firstChild).toMatchSnapshot();
 
     });
});