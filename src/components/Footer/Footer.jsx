import Logo from "../Logo";

function Footer() {
    return (
        <footer className="flex">
            <div className="flex flex-wrap w-full px-5 py-5">
                <div className="w-[40%] flex flex-col justify-between items-center">
                    <Logo />
                    <p className="content-center font-semibold text-[15px] text-slate-700">© Copyright 2023. All Rights Reserved by Mayank M Jain.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-x-28 w-[60%]">
                    <nav>
                        <h3 className="font-bold text-[17px]">COMPANY</h3>
                        <ul className="flex flex-col gap-y-1 font-semibold mt-2">
                            <li className="text-[15px] text-slate-800">Features</li>
                            <li className="text-[15px] text-slate-800">Pricing</li>
                            <li className="text-[15px] text-slate-800">Affiliate Program</li>
                            <li className="text-[15px] text-slate-800">Press Kit</li>
                        </ul>
                    </nav>
                    <nav>
                        <h3 className="font-bold text-[17px]">SUPPORT</h3>
                        <ul className="flex flex-col gap-y-1 font-semibold mt-2">
                            <li className="text-[15px] text-slate-800">Account</li>
                            <li className="text-[15px] text-slate-800">Help</li>
                            <li className="text-[15px] text-slate-800">Contact Us</li>
                            <li className="text-[15px] text-slate-800">Customer Support</li>
                        </ul>
                    </nav>
                    <nav>
                        <h3 className="font-bold text-[17px]">LEGALS</h3>
                        <ul className="flex flex-col gap-y-1 font-semibold mt-2">
                            <li className="text-[15px] text-slate-800">Terms & Conditions</li>
                            <li className="text-[15px] text-slate-800">Privacy Policy</li>
                            <li className="text-[15px] text-slate-800">Licensing</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;