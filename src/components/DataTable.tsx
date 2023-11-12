import React, {useState, useEffect} from 'react';

interface IUser{
    'id':number,
    'name':string,
    'age':number
}
const DummyTable = [{ id: 1, name: 'John', age: 25 }, 
{ id: 2, name: 'Jane', age: 30 },
{ id: 3, name: 'Bob', age: 18 },
{ id: 4, name: 'Rita', age: 48 },
]
const DataTable: React.FC = () => {
    const [data, setData] = useState<IUser[]>([]);
    const [filteredData, setFilteredData] =  useState<IUser[]>([]);
    const [sortBy, setSortBy] = useState<string|null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(()=>{
        //to-do fetch data from api
        const fetchData = async()=>{
            setData(DummyTable);
            setFilteredData(DummyTable)
        }
        fetchData()
    },[])

    useEffect(()=>{
        //filter data by input by user
        const filtered = data.filter(item=>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        setFilteredData(filtered);
    },[data, searchTerm])

    const handleSort = (columnName:  'id'| 'name'|'age')=>{
        const sortedData = [...filteredData]
        if(sortBy != columnName){
            sortedData.sort((a,b)=>{
                if(a[columnName]<b[columnName]) return -1
                if(a[columnName]>b[columnName]) return 1
                return 0
            })
        }
        else{
            sortedData.reverse();
        }
        setFilteredData(sortedData);
        setSortBy(columnName);
    }

    return(
        <>
    <div>
        <h1 className="text-2xl font-extrabold text-gray-700">Таблица с сортировкой</h1>
      <input
        type="text"
        placeholder="Поиск..."
        className="w-full p-2 mb-4 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    <table className="w-full border border-collapse">
        <thead>
          <tr>
            <th  className="p-2 text-left border"onClick={() => handleSort('name')} >
              Имя {sortBy === 'name' ? '▲' : '▼'}
            </th>
            <th className="p-2 text-left border" onClick={() => handleSort('age')}>
              Возраст {sortBy === 'age' ? '▲' : '▼'}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
    )
}
export default DataTable