import { Products } from './components/Products';
import { useProducts } from './hooks/useProducts';

function App() {
	const {products,setProducts,originalProducts} = useProducts();

	const handleAllClick = () => {
		setProducts(originalProducts);
	};

	const handleClick = () => {
		const temp = [...products];
		const filter = temp.filter((items) => items.available === true);

		setProducts(filter);
	};

	return (
		<>
			<main className='w-full min-h-screen relative flex justify-center z-10 bg-[#111315]'>
				<div className='w-full h-56 absolute top-0 z-[-1] bg-hero bg-cover'></div>
				<section className='bg-[rgb(27,29,31)] mt-20 w-[90%] z-[999] p-4 flex flex-col items-center gap-4 rounded-md shadow-lg'>
					<header className='flex flex-col relative items-center gap-3 justify-center min-h-[15rem] overflow-hidden'>
						<img
							src='../vector.svg'
							className='absolute z-[-1] top-0 left-[50%]'
							alt='vector'
						/>
						<h1 className='text-4xl text-[#FEF7EE] font-bold'>
							Our Collection
						</h1>
						<p className='w-[90%] md:w-[50%] text-center text-[#6F757C] font-semibold'>
							Introducing our Coffee Collection, a selection of unique coffees
							from different roast types and origins, expertly roasted in small
							batches and shipped fresh weekly.
						</p>
						<div className='flex items-center gap-4'>
							<button
								onClick={handleAllClick}
								className='bg-[#6F757C] text-[#FEF7EE] p-2 rounded-md font-semibold'>
								All Products
							</button>
							<button
								onClick={handleClick}
								className='text-[#FEF7EE] p-2 rounded-md font-semibold'>
								Available Now
							</button>
						</div>
					</header>
					<div className='w-[100%] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-5 p-3'>
						{products &&
							products.map((product) => {
								return (
									<Products
										key={product.id}
										product={product}
									/>
								);
							})}
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
