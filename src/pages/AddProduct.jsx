import React, { useState } from 'react';
import axios from 'axios';
import { Card, Input, Button, message, Select } from 'antd';
import AdminHeader from '../components/AdminHeader';

const { Option } = Select;

const AddProduct = () => {
  const [itemData, setItemData] = useState({
    itemcode: '',
    imagelink: '',
    itemname: '',
    description: '',
    details: '',
    one_month_price: '',
    two_month_price: '',
    three_month_price: '',
    six_month_price: '',
    nine_month_price: '',
    twelve_month_price: '',
    status: ''
  });

  const handleChange = (name, value) => {
    setItemData({
      ...itemData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://cataloguebackend.onrender.com/api/catalogue/add', itemData);
      message.success('Product added successfully');
      setItemData({
        itemcode: '',
        imagelink: '',
        itemname: '',
        description: '',
        details: '',
        one_month_price: '',
        two_month_price: '',
        three_month_price: '',
        six_month_price: '',
        nine_month_price: '',
        twelve_month_price: '',
        status: ''
      });
    } catch (error) {
      console.error('Error adding product:', error.message);
      message.error('Failed to add product');
    }
  };

  return (
    <div>
      <AdminHeader />
      <Card title="Add Product" style={{ width: 600, margin: 'auto', marginTop: 50 }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="itemcode">Item Code:</label>
            <Input id="itemcode" value={itemData.itemcode} onChange={(e) => handleChange('itemcode', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="imagelink">Image Link:</label>
            <Input id="imagelink" value={itemData.imagelink} onChange={(e) => handleChange('imagelink', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="itemname">Item Name:</label>
            <Input id="itemname" value={itemData.itemname} onChange={(e) => handleChange('itemname', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="description">Description:</label>
            <Input.TextArea id="description" value={itemData.description} onChange={(e) => handleChange('description', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="details">Details:</label>
            <Input.TextArea id="details" value={itemData.details} onChange={(e) => handleChange('details', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="one_month_price">1 Month Price:</label>
            <Input id="one_month_price" value={itemData.one_month_price} onChange={(e) => handleChange('one_month_price', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="two_month_price">2 Month Price:</label>
            <Input id="two_month_price" value={itemData.two_month_price} onChange={(e) => handleChange('two_month_price', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="three_month_price">3 Month Price:</label>
            <Input id="three_month_price" value={itemData.three_month_price} onChange={(e) => handleChange('three_month_price', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="six_month_price">6 Month Price:</label>
            <Input id="six_month_price" value={itemData.six_month_price} onChange={(e) => handleChange('six_month_price', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="nine_month_price">9 Month Price:</label>
            <Input id="nine_month_price" value={itemData.nine_month_price} onChange={(e) => handleChange('nine_month_price', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="twelve_month_price">12 Month Price:</label>
            <Input id="twelve_month_price" value={itemData.twelve_month_price} onChange={(e) => handleChange('twelve_month_price', e.target.value)} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="status">Status:</label>
            <Select id="status" value={itemData.status} onChange={(value) => handleChange('status', value)}>
              <Option value="In Stock">In Stock</Option>
              <Option value="Out of Stock">Out of Stock</Option>
            </Select>
            {console.log(itemData)}
          </div>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
