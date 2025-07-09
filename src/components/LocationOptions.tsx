'use client';

const LocationOptions = () => {

    return (

        <div className="Locations flex h-[70vh]">
            <div className="Naperville_loc flex flex-col w-full text-center align-middle content-center justify-center items-center gap-[2vh]">
                <h2 className="text-3xl font-bold w-[50%] text-center self-center"  >MEADOWBROOK NAPERVILLE</h2>
                <a className="border-3 p-2 rounded-md w-[30%]" href="">Learn more</a>
            </div>
            <div className="Lagrance_loc w-full flex flex-col text-center align-middle justify-center items-center gap-[2vh]">
                <h2 className="text-3xl font-bold w-[50%] text-center self-center" >MEADOWBROOK LAGRANGE</h2>
                <a className="border-3 p-2 rounded-md w-[30%]" href="">Learn more</a>
            </div>
            <div className="Bolingbrook_loc w-full flex flex-col text-center align-middle justify-center items-center gap-[2vh]">
                <h2 className="text-3xl font-bold w-[50%] text-center self-center" >MEADOWBROOK BOLINGBROOK</h2>
                <a className="border-3 p-2 rounded-md w-[30%]" href="">Learn more</a>
            </div>
        </div>

    )

}

export default LocationOptions