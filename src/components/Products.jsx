export const Products = ({ product }) => {
	const isPopular = product.popular ? (
		<p className='bg-[#F6C768] font-semibold absolute top-2 p-2 rounded-lg left-2'>Popular</p>
	) : (
		''
	);

	const isAvariable = !product.available ? (
		<span className='text-[#ED735D]'>Sold out</span>
	) : (
		''
	);

	const starYellow = (
		<img
			src='../../Star_fill.svg'
			alt='star'
		/>
	);

	const star = (
		<img
			src='../../Star.svg'
			alt='star'
		/>
	);

	const isRating = product.rating ? (
		<p className='text-[#FEF7EE] font-semibold flex gap-1'>
			{starYellow} {product.rating} <span className='text-[#6F757C]'>({product.votes} votes)</span>
		</p>
	) : (
		<p className='text-[#6F757C] flex items-center gap-2 font-semibold'>{star} No ratings</p>
	);

	return (
		<article data-id={product.id} className='relative w-[100%] flex flex-col gap-3'>
			<img
				className='w-full rounded-lg'
				src={product.image}
				alt={product.name}
			/>
			{isPopular}
			<div className='flex flex-col gap-3'>
				<header className='flex items-center justify-between'>
					<h2 className='text-lg font-bold text-[#FEF7EE]'>{product.name}</h2>
					<p className='text-lg font-bold bg-[#BEE3CC] p-1 rounded-md'>{product.price}</p>
				</header>
				<footer className='flex items-center justify-between'>
					{isRating}
					{isAvariable}
				</footer>
			</div>
		</article>
	);
};

