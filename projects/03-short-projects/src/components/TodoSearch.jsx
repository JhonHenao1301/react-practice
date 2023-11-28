

export default function TodoSearch ({ searchText, setSearchText}) {
    const onSearchChange = (e) => {
        setSearchText(e.target.value)
    }
    return (
        <input
            type="text"
            className='input'
            value={searchText}
            onChange ={onSearchChange}
            name=""
        />
    )
}