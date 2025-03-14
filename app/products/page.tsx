import {db} from "../_lib/prisma";


const ProductsPage = async () => {
  
  const products = await db.product.findMany({})

  //chamar o meu banco de dados
    return <div>
      {products.map((product) => (<p key={product.id}>{product.name}</p>))}
    </div>;
  }
  
  export default ProductsPage; 