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

      <div className="menu-screen-container">
        <div className="menu-screen-back-ground">
          <div className="menu-title">Menu</div>

          <div className="menu-underline"></div>
          <div className="menu-category-container">
            <div>
              <div className="menu-category">Appetizers</div>
              {appetizers.map((appetizer, index) => (
                <div index={index}>
                  <div className="menu-item-container">
                    <div className="menu-item">{appetizer.name}</div>
                    <div className="menu-item">${appetizer.price}</div>
                  </div>
                </div>
              ))}
            </div>


            <div>
              <div className="menu-category">Entrees</div>
              {entrees.map((entree, index) => (
                <div index={index}>
                  <div className="menu-item-container">
                    <div className="menu-item">{entree.name}</div>
                    <div className="menu-item">${entree.price}</div>
                  </div>
                </div>
              ))}
            </div>


            <div>
              <div className="menu-category">Desserts</div>
              {desserts.map((dessert, index) => (
                <div index={index}>
                  <div className="menu-item-container">
                    <div className="menu-item">{dessert.name}</div>
                    <div className="menu-item">${dessert.price}</div>
                  </div>
                </div>
              ))}
            </div>


            <div>
              <div className="menu-category">Drinks</div>
              {drinks.map((drink, index) => (
                <div index={index}>
                  <div className="menu-item-container">
                    <div className="menu-item">{drink.name}</div>
                    <div className="menu-item">${drink.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="menu-underline"></div>
        </div>
      </div>
    </div>

  );
}