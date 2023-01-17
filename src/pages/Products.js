import React from 'react';
import { Select } from 'antd';
import "./Products.css";
import Card from '../components/Card/card';
const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};
const demoData = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        img2: "https://images.unsplash.com/photo-1553260188-75a8d6205b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 1500000,
        title: "Tesla model 3"
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
        img2: "https://images.unsplash.com/photo-1547166812-0fca6370dc03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        price: 23500,
        title: "New Grey Sofa"
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1533568749383-2b0bf33e53cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        img2: "https://images.unsplash.com/photo-1535693739747-fa14e6af3cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 5500,
        title: "iPhone 6"
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        img2: "https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: 13500,
        title: "Used GTX 1080ti"
    }];

function Products() {
    return (
        <div className="products">
            <div className="search">
                <Select
                    showSearch
                    placeholder="Select locality"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                        {
                            value: 'Guwahati',
                            label: 'Guwahati',
                        },
                        {
                            value: 'Nagaon',
                            label: 'Nagaon',
                        },
                        {
                            value: 'Tezpur',
                            label: 'Tezpur',
                        },
                    ]}
                />
            </div>

            <div className="title">Browse Listings</div>
            <div className="card-container">
                {demoData.map(item => {
                    return (<Card item={item} key={item.id}></Card>);

                })}
            </div>
        </div>
    )
}

export default Products