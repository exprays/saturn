import React from 'react'
import TabsMenu from '../tabs/intex'
import { SideSheet } from '../sheet'
import { Plus } from 'lucide-react'
import { CreateProductForm } from './product-form'
import { TabsContent } from '../ui/tabs'
import { DataTable } from '../table'
import { TableCell, TableRow } from '../ui/table'
import Image from 'next/image'
import { getMonthName } from '@/lib/utils'

type Props = {
  products: {
    id: string
    name: string
    price: number
    image: string
    createdAt: Date
    domainId: string | null
  }[]
  id: string
}

const ProductTable = ({ id, products }: Props) => {

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center p-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
      <p className="mt-4 text-lg font-semibold">No products yet</p>
      <p className="text-sm text-timelessgray">Add your first product to get started</p>
    </div>
  )

  return (
    <div className='space-y-2'>
      <div>
        <h2 className="font-bold text-2xl">Products</h2>
        <p className="text-sm font-light">
          Add products to your store and set them live to accept payments from
          customers.
        </p>
      </div>
      <TabsMenu
        className="w-full flex justify-start"
        triggers={[
          {
            label: 'All products',
          },
          { label: 'Live' },
          { label: 'Deactivated' },
        ]}
        button={
          <div className="flex-1 flex justify-end">
            <SideSheet
              description="Add products to your store and set them live to accept payments from
          customers."
              title="Add a product"
              className="flex items-center gap-2 bg-orange px-4 py-2 text-black font-semibold rounded-lg text-sm"
              trigger={
                <>
                  <Plus
                    size={20}
                    className="text-aquamarine"
                  />
                  <p className="text-aquamarine">Add Product</p>
                </>
              }
            >
              <CreateProductForm id={id} />
            </SideSheet>
          </div>
        }
      >
        <TabsContent value="All products">
            {products.length === 0 ? (
                <EmptyState />
            ) : (
          <DataTable headers={['Featured Image', 'Name', 'Pricing', 'Created']}>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={`https://ucarecdn.com/${product.image}/`}
                    width={50}
                    height={50}
                    alt="image"
                  />
                </TableCell>
                <TableCell>${product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell className="text-right">
                  {product.createdAt.getDate()}{' '}
                  {getMonthName(product.createdAt.getMonth())}{' '}
                  {product.createdAt.getFullYear()}
                </TableCell>
              </TableRow>
            ))}
          </DataTable>
            )}
        </TabsContent>
      </TabsMenu>
    </div>
  )
}

export default ProductTable
