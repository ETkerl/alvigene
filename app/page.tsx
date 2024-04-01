
// 'use client'
// import Image from "next/image";


import {products} from '@/app/utils/products'
import Product from '@/app/components/product'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/app/components/navbar'
import Image from 'next/image'
// import { Navbar, Alert } from "flowbite-react";
 

const navigation = [
  { name: 'Product', href: '#product' },
  { name: 'Testimonies', href: '#testimonie' },
 
]
 
export default function Home() {
  // const pathname = usePathname()
 
  return ( 
    <>
     {/* <main className=""> */}
      {/* Begin Navbar component */}
      <Navbar />
      {/* End Navbar component */}

      {/* Begin Jumbottron component  */}
      <section className="bg-[#aac400] bg-blend-multiply">
        {/* <div className="px-4 mx-auto max-w-screen-xl py-24"> */}
        <div className="container mx-auto flex flex-cols-2 pt-10">
          <div className="p-20">
            <h1 className="">Donnez à votre peau
            des soins nécessaires
            & mérités.</h1>
          </div>
        <div className="">
          <Image
            src="/products/gels/alvigene-gel-douche-bave-escargot-et-citron-6f5d7461b4b9e7e2bbd4f95438ca995e2d8efd1a9e67db7f83a523cc7e65d23c.png"
            width={700}
            height={700}
            className=""
            alt="Picture of the author"
          />
        </div>

        </div>
      </section>
      {/* End Jumbottron component  */}

      {/* Begin Our service component  */}
      <section className="bg-green-900 p-10">
        <div className="container mx-auto flex flex-col md:flex-row start-0 justify-between">
          <div className='flex flex-cols-2 gap-3 mb-2 mt-1'>
            <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
            <div className='text-white'>
              <span className='font-semibold'>Livraison gratuite</span><br></br>
              <small className='text-gray-400'>Livraison gratuite sur toute commande de plus de 20.00FCFA</small>
            </div>
            {/* <span className='m-2'>Livraison gratuite sur toute commande de plus de 20.00FCFA</span> */}
          </div>
          <div className='flex flex-cols-2 gap-3 mb-2 mt-1'>
            <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
            <div className='text-white'>
              <span className='font-semibold'>Payment par OM/MOMO</span><br></br>
              <small className='text-gray-400'>Payment par mobile money avant livraison</small>
            </div>
            {/* <span className='m-2'>Livraison gratuite sur toute commande de plus de 20.00FCFA</span> */}
          </div>
          <div className='flex flex-cols-2 gap-3 mb-2 mt-1'>
            <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
            <div className='text-white'>
              <span className='font-semibold'>Service Client</span><br></br>
              <small className='text-gray-400'>Nos sommes a votre ecoute via Whatsapp et GSM tout les jours</small>
            </div>
            {/* <span className='m-2'>Livraison gratuite sur toute commande de plus de 20.00FCFA</span> */}
          </div>
          {/* <div className='text-center'>Payment par mobile money avant livraison</div>
          <div className='text-center'>Nos sommes a votre ecoute via Whatsapp et GSM tout les jours</div> */}
        </div>
      </section>
      {/* End Our service component  */}

      {/* Begin Products section */}
      {/* <div id="products" className="grid grid-cols-3 gap-3 max-w-7xl mx-auto pt-20">
        {
          products.map(p => <Product key={p.title} url={p.url} title={p.title} description={p.description} price={p.price} />)         
        }
      </div> */}
      
      <div className='md:container mx-auto gap-3 flex flex-col grid md:grid-cols-3 justify-between'>
      {
          products.map(p => <Product key={p.title} url={p.url} title={p.title} description={p.description} price={p.price} />)         
        }
        {/* <div className="grid grid-cols-3 md:flex-row"> */}
        {/* <a href="#" className="flex flex-row m-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src="products/gels/alvigene-shower-gel-lemon-fede4d82a93fa86fd41e96dae4cc719a0fd946fbab731b9acb3ab890c4cf0d91.png" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>

        <a href="#" className="flex flex-row m-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src="products/gels/alvigene-shower-gel-snail-cd9e9d462ebe895a1010b8d485dc7ce6db76ea954d2ce6276c307150eee012ca.png" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>

        <a href="#" className="flex flex-row m-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>
        <a href="#" className="flex flex-row m-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src="products/gels/alvigene-shower-gel-lemon-fede4d82a93fa86fd41e96dae4cc719a0fd946fbab731b9acb3ab890c4cf0d91.png" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>

        <a href="#" className="flex flex-row m-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src="products/gels/alvigene-shower-gel-snail-cd9e9d462ebe895a1010b8d485dc7ce6db76ea954d2ce6276c307150eee012ca.png" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>

        <a href="#" className="flex flex-row m-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a> */}
        {/* </div> */}
      </div>
      {/* End Products section */}

      {/* Begin composition section  */}
      <section className="bg-[#f8f9fa] p-10">
        <div className="container mx-auto flex flex-col md:flex-row start-0 justify-between">
          <div className='basis-1/4'>
            <svg className="w-12 h-12 text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
              <span className=''>Un mélange unique d'ingrédients organiques harmonise et protège votre peau contre les maladies, vergetures, rides, cicatrices et tâches.</span>
              {/* <small className=''>Livraison gratuite sur toute commande de plus de 20.00FCFA</small> */}
            {/* <span className='m-2'>Livraison gratuite sur toute commande de plus de 20.00FCFA</span> */}
          </div>
          <div className='basis-1/4'>
            <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
              <span className=''>Nous élevons nos escargots dans le respect et l'hygiène nécessaires pour obtenir de la salive pure non infecté.</span>
          </div>
          <div className='basis-1/4'>
            <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
            <div className=''>
              <span className=''>Nous sommes fondamentalement contre l'éclaircissage de la peau. Nos produits sont faits pour protéger votre peau et votre teint naturel.</span>
              {/* <small className=''>Nos sommes a votre ecoute via Whatsapp et GSM tout les jours</small> */}
            </div>
            {/* <span className='m-2'>Livraison gratuite sur toute commande de plus de 20.00FCFA</span> */}
          </div>
          <div className='basis-1/4'>
            <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V9a5 5 0 1 1 10 0v7.083A2.919 2.919 0 0 1 14.083 19H14a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 1.732-1h.351a4.917 4.917 0 0 0 4.83-4H19a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3 7 7 0 0 0-7-7Zm1.45 3.275a4 4 0 0 0-4.352.976 1 1 0 0 0 1.452 1.376 2.001 2.001 0 0 1 2.836-.067 1 1 0 1 0 1.386-1.442 4 4 0 0 0-1.321-.843Z" clip-rule="evenodd"/>
            </svg>
            <div className=''>
              <span className=''>Tous nos ingrédients sont produits au Cameroun.</span>
              {/* <small className=''>Nos sommes a votre ecoute via Whatsapp et GSM tout les jours</small> */}
            </div>
            {/* <span className='m-2'>Livraison gratuite sur toute commande de plus de 20.00FCFA</span> */}
          </div>
        </div>
      </section>
      {/* End composition section  */}
    


<div id="controls-carousel" className="relative w-full" data-carousel="static">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
      
      <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
        <img src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
      
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
      
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
      
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img src="products/gels/alvigene-shower-gel-honey-442bd1b1657c90bde0ea21403b4cf3112da0b173f62dae4031724d0d7cd200ff.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
      </div>
    </div>
   
    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>



<footer className="bg-[#0d1c28] shadow dark:bg-gray-900">
    <div className="w-full pt-10">
        <div className="flex-row sm:flex sm:justify-center">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="/brand/alvigene-logo-c65d07955c1d97ae1efe6e10b90d98e332760c7ed3747a18771b8fda9cd5685c.svg" className="h-16" alt="Flowbite Logo" />
            </a>
        </div>
        <div className="grid grid-row">
          <p className="grid grid-cols-1 justify-center">
            Alvigène SARL est une société de cosmétiques basée au Cameroun.
            Nous sommes fiers de produire uniquement des produits de soins de
            la peau et de beauté à partir de composants biologiques et
            cultivés localement.
          </p><br />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
    <div className="">
          <p className="mx:auto text-center py-9 px-10 p-10 m-10">
            Alvigène SARL est une société de cosmétiques basée au Cameroun.
            Nous sommes fiers de produire uniquement des produits de soins de
            la peau et de beauté à partir de composants biologiques et
            cultivés localement.
          </p><br />
        </div>
</footer>




      
      {/* </main>  */}
    </>

  );
}

{/* 
// export default function Home() {
//   return (
//     <>
     
//     <main className="pt-24">
      

//       <div id="products" className="grid grid-cols-3 gap-3 max-w-7xl mx-auto">
//         {
//           products.map(p => <Product key={p.title} url={p.url} title={p.title} description={p.description} price={p.price} />)
//         }
//       </div>


//     </main> 
//         </>
//   );
// }




    // <nav className='bg-white fixed w-full z-20 top-0 start-0'>
    //   <ul className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="">
    //     <li>
    //       <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
    //        Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         className={`link ${pathname === '/about' ? 'active' : ''}`}
    //         href="/about"
    //       >
    //         About
    //       </Link>
    //     </li>
    //   </ul>
    // </nav> */}