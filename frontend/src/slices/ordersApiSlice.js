import { apiSlice } from './apiSlice.js';
import { ORDERS_URL, PAYPAL_URL } from '../constants.js';

export const ordersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createOrder: builder.mutation({
			query: (order) => ({
				url: ORDERS_URL,
				method: 'POST',
				body: {...order}
			})
		}),
		getOrderById: builder.query({
			query: (order_id) => ({
				url: `${ORDERS_URL}/${order_id}`,
				method: 'GET'
			}),
			keepUnusedDataFor: 5,
		}),
		payOrder: builder.mutation({
			query: ({orderId, details}) => ({
				url: `${ORDERS_URL}/${orderId}/pay`,
				method: 'PUT',
				body: { ...details },
			})
		}),
		getPayPalClientId: builder.query({
			query: () => ({
				url: PAYPAL_URL,
				method: 'GET'
			}),
			keepUnusedDataFor: 5
		})
	})
});

export const { useCreateOrderMutation, useGetOrderByIdQuery, usePayOrderMutation, useGetPayPalClientIdQuery } = ordersApiSlice;