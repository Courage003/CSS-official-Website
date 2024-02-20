import React from 'react'
import { people } from '../../data'

export default function Card() {
    return (
            <div className="bg-white py-24 sm:py-32 w-full">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                    <li key={person.id}>
                        <div className="flex flex-col justify-center items-center gap-x-6 bg-slate-600 py-20 h-40">
                        <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                        <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                        </div>
                        <div>
                        </div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            )
        }
