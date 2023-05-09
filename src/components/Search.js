import { Input } from '@mui/material';

function Search({searchValue}) {
  return (
    <div className='input'>
        <Input onChange={(e) => searchValue(e.target.value)} className="search-input" placeholder='...'></Input>
    </div>
  )
}

export default Search