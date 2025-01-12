"use client"

export default function MatchView ({ params }: { params: { id: string } }) { 
    return (
        <main>
            <div className="absolute -top-3 -left-3 md:top-[-7rem] -z-20 md:left-8 flex-shrink-0 w-[336px] h-[336px] md:w-[587px] md:h-[587px] opacity-[0.3] bg-[#c51fff] blur-[227px]" />
            <div className="grid grid-cols-2 lg:grid-cols-10">
                <div className="col-span-7">
                    
                </div>
                <div className="col-span-3">

                </div>
            </div>
        </main>
    )
}