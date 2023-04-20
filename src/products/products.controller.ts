import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';

interface Product {
    name: string;
    price: Number;
    notes?: string; // optional
}

@Controller('products')
export class ProductsController {
    
    @Get('/') //  /products/
    getProducts() {
        return 'Return all products'
    }

    @Get('/:id') //  /product/123
    getProduct(@Param('id') productId: string) {
        return `Return product with id = ${productId}`
    }
    
    @Post('/')
    createProduct(@Body() product: Product) {
        return {
            message: `Create a product`,
            product: product
        }
    }

    @Put('/:id')
    updateProduct(@Param('id') productId: string, @Body() product: Product) {
        return {
            message: 'Create product',
            productId: productId,
            product: product
        }
    }

    @Delete('/:id')
    deleteProduct(@Param('id') productId: string) {
        return `Return product with id = ${productId}`
    }
}

//CRUD
//Create = Post
//Read = Put
//Update = Get
//Delete = Delete
//REST API = Restful Application Interface
