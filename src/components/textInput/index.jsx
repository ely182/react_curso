import'./style.css';
export const TextInput = ({searchValue,handleChange}) => {
    return(
    <input
    className='text-Input'
    onChange={handleChange} 
    value={searchValue}
    type="search"
    placeholder='type yor search'
    />
    
    );
}