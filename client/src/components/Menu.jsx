import React, { useState, useEffect } from 'react';
import { getByCategory } from '../services/api-helper'

export default function Menu(props) {

  const [appetizers, setAppetizer] = useState([])
  const [entrees, setEntree] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getByCategory('appetizer')
        setAppetizer(response)
      } catch (e) {
        throw e
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getByCategory('entree')
        setEntree(response)
      } catch (e) {
        throw e
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getByCategory('dessert')
        setDesserts(response)
      } catch (e) {
        throw e
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getByCategory('drink')
        setDrinks(response)
      } catch (e) {
        throw e
      }
    }
    fetchData()
  }, [])


  return (
    <div>
      <div>Appetizers</div>
      {appetizers.map((appetizer, index) => (
        <div index={index}>
          <div>
            <div>{appetizer.name}</div>
            <div>{appetizer.price}</div>
          </div>
        </div>
      ))}



      <div>Entrees</div>
      {entrees.map((entree, index) => (
        <div index={index}>
          <div>
            <div>{entree.name}</div>
            <div>{entree.price}</div>
          </div>
        </div>
      ))}



      <div>Desserts</div>
      {desserts.map((dessert, index) => (
        <div index={index}>
          <div>
            <div>{dessert.name}</div>
            <div>{dessert.price}</div>
          </div>
        </div>
      ))}



      <div>Drinks</div>
      {drinks.map((drink, index) => (
        <div index={index}>
          <div>
            <div>{drink.name}</div>
            <div>{drink.price}</div>
          </div>
        </div>
      ))}
    </div>

  );
}