'use client';

import { useState } from "react";
import {useRouter} from 'next/navigation'

const NavDropdown = () => {

    const [selected, setSelected] = useState('-SELECT LOCATION-');
    const router = useRouter();
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value)
        router.push(`/${e.target.value}`)
    }

  return (
    <div className="text-black">
        <p>CHANGE LOCATION</p>
        <select value={selected} id="" className="p-2 rounded-md border-2" onChange={handleChange}>
            <option value="">-SELECT LOCATION-</option>
            <option value="meadowbrook-la-grange">LA GRANGE</option>
            <option value="meadowbrook-boilingbrook">BOILINGBROOK</option>
            <option value="meadowbrook-naperville">NAPERVILLE</option>
        </select>
    </div>
  )
}

export default NavDropdown