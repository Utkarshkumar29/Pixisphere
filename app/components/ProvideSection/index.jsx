const ProvideSection = () => {
    return (
        <div className="w-full px-4 py-10 flex flex-col gap-8">
            <p className="text-3xl md:text-4xl lg:text-5xl text-black font-bold text-center md:text-left">
                What we provide
            </p>

            <div className="flex flex-col md:flex-row gap-8 md:gap-14">
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    <div className="flex items-center gap-4">
                        <p className="text-4xl md:text-5xl text-black font-semibold">01</p>
                        <div className="flex-1 h-[2px] bg-gray-400" />
                        <span className="text-xl md:text-2xl font-medium">Maternity</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-4xl md:text-5xl text-black font-semibold">03</p>
                        <div className="flex-1 h-[2px] bg-gray-400" />
                        <span className="text-xl md:text-2xl font-medium">Event</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-4xl md:text-5xl text-black font-semibold">05</p>
                        <div className="flex-1 h-[2px] bg-gray-400" />
                        <span className="text-xl md:text-2xl font-medium">Portrait</span>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    <div className="flex items-center gap-4">
                        <p className="text-4xl md:text-5xl text-black font-semibold">02</p>
                        <div className="flex-1 h-[2px] bg-gray-400" />
                        <span className="text-xl md:text-2xl font-medium">Wedding</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-4xl md:text-5xl text-black font-semibold">04</p>
                        <div className="flex-1 h-[2px] bg-gray-400" />
                        <span className="text-xl md:text-2xl font-medium">Commercial</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-4xl md:text-5xl text-black font-semibold">06</p>
                        <div className="flex-1 h-[2px] bg-gray-400" />
                        <span className="text-xl md:text-2xl font-medium">Travel</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProvideSection;
