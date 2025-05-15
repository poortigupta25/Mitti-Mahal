'use client';
import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return updateCartTotals({
          ...state,
          items: updatedItems
        });
      }

      return updateCartTotals({
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      });

    case 'REMOVE_FROM_CART':
      return updateCartTotals({
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      });

    case 'UPDATE_QUANTITY':
      return updateCartTotals({
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id 
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      });

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

const updateCartTotals = (state) => {
  const totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  return { ...state, totalQuantity, totalAmount };
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'REPLACE_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const value = {
    items: state.items,
    totalAmount: state.totalAmount,
    totalQuantity: state.totalQuantity,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};