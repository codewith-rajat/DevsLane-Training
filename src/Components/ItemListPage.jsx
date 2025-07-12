import React,{useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ItemsList from './ItemsList';
import allData from './AllData';
function ItemListPage() {
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState('default');
    const data = allData.filter(function (item) {
        const lowerCaseTitle = item.name.toLowerCase();
        const lowerCaseQuery = query.toLowerCase();
        return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
    });
    function handleQueryChange(event) {
        const newQuery = event.target.value;
        setQuery(newQuery);
    }
    function handleSortChange(event) {
        setSort(event.target.value);
    }

    if (sort == 'name') {
        data.sort(function (x, y) {
            return (x.name < y.name ? -1 : 1);
        })
    } else if (sort == "pricelh") {
        data.sort(function (x, y) {
            return x.price - y.price;
        })
    }
    else if (sort == "pricehl") {
        data.sort(function (x, y) {
            return y.price - x.price;
        })
    }
    return (
        <div className="bg-stone-100">
            <Navbar />
            <div className="bg-white mt-12 mx-40 flex justify-end">
                <input
                    type="text"
                    value={query}
                    placeholder='search'
                    className='border-2 border-gray-500 rounded-md p-1 self-end mr-8'
                    onChange={handleQueryChange} />
                <label for="category" className=" text-black font-semibold"></label>
                <select onChange={handleSortChange} name="category" id="category" className='mr-28 mt-8 border-2 p-1 rounded-md' value={sort} >
                    <option value="default">Default sort</option>
                    <option value="name">Sort by name</option>
                    <option value="pricelh">Sort by price: Low to High</option>
                    <option value="pricehl">Sort by price: High to Low</option>
                </select>
            </div>
            <div className="bg-white mx-40">
                <ItemsList products={data} />
            </div>
            <div className="flex mx-40 px-28 py-16 bg-white  gap-2">

                <button className="border-red-500 border-4 bg-red-500 text-white px-6 py-2 rounded">1</button>
                <button className="border-red-500 border-4 bg-red-500 text-white px-6 py-2 rounded">2</button>
                <button className="border-red-500 border-4 bg-red-500 text-white px-6 py-2 rounded">3</button>
            </div>
            <Footer />
        </div>
    );
}
export default ItemListPage;