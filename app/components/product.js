export default function Product({url, title, description, price}) {

    return (
      <a href="#" className="flex flex-row m-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full h-64 md:h-auto md:w-100 md:rounded-t-lg" src={url} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2md font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <strong>{price} FCFA</strong>
        </div>
      </a>

    )
}

// export default function Product() {

//     return (
//          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="">
//         <div className="flex flex-col justify-between p-4 leading-normal">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//         </div>
//       </a>





//     )
// }


     {/* <a href="#" className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg md:rounded-s-lg" src="products/gels/alvigene-shower-gel-lemon-fede4d82a93fa86fd41e96dae4cc719a0fd946fbab731b9acb3ab890c4cf0d91.png" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="#" className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="w-full rounded-t-lg h-48  md:rounded-s-lg" src="products/gels/alvigene-shower-gel-lemon-fede4d82a93fa86fd41e96dae4cc719a0fd946fbab731b9acb3ab890c4cf0d91.png" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
<a href="#" className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="w-full rounded-t-lg h-48  md:rounded-s-lg" src="products/gels/alvigene-shower-gel-lemon-fede4d82a93fa86fd41e96dae4cc719a0fd946fbab731b9acb3ab890c4cf0d91.png" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a> */}

 {/* <a href="#" className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="products/gels/alvigene-shower-gel-lemon-fede4d82a93fa86fd41e96dae4cc719a0fd946fbab731b9acb3ab890c4cf0d91.png" alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </a>
      <a href="#" className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="products/gels/alvigene-shower-gel-lemon-fede4d82a93fa86fd41e96dae4cc719a0fd946fbab731b9acb3ab890c4cf0d91.png" alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </a> */}
      {/* </div> */}

      {/* <div id="products" className='container mx-auto flex flex-cols-3 md:flex-row justify-between gap-3'> */}
      {/* <div className="flex flex-row md:grid md:grid-cols-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <a href="#" >
          <img className="h-100 rounded-lg" src="products/gels/alvigene-shower-gel-lemon-fede4d82a93fa86fd41e96dae4cc719a0fd946fbab731b9acb3ab890c4cf0d91.png" alt="" />
        </a>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </a> 
        </div>
      </div> */}