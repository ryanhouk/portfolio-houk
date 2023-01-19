import React from 'react';
import { NextPage } from 'next';

interface Item {
  title: string;
  description: string;
  image: string;
}

interface Props {
  items: Item[];
}

const ItemList: NextPage<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img src={item.image} alt={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
