import React from "react";

export const Vspacer = () => {
	return (
        <section>
        {/* LINE SPACER - EMPTY */}
                            <div className="flex flex-row mx-4 sm:mx-20 w-full">
                            
                                <div className="grid grid-cols-3 w-10 sm:w-12 place-items-center">
                                    <div className=""></div>
                                    <div className="w-px h-16 sm:h-24 bg-slate-300"></div>
                                    <div className=""></div>
                                </div>    
                                <div className="">
                                {/* EMPTY */ }
                                </div>                        
                                                        
                            </div>
            {/* END LINE SPACER - EMPTY*/} 
        </section>    
    );
}